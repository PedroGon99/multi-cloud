
const router = require("express").Router();
//It will be required the User model
const User = require("../models/User");
//In order to encrypt the passwords in our database bcrypt is recommended
const bcrypt = require('bcrypt');

//creating -> post method
//updating -> put method
//deleting -> delete method
//fetching -> get method

//REGISTER
//All this process will take some time, so it will be an async function
router.post("/register", async(req,res) => {
    //We will try to regist a new user into the db but this process can fail
    //so a try/catch is necessary
    try{

        //Encrypting the password so It wont be visible in the db
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);

        //Create a new User with the UserSchema
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPass,
        });

        //Save the new User in the db
        const user = await newUser.save();
        //Successful
        res.status(200).json(user);
    } catch(err){
        //Something wrong with MongoDB or express Server
        res.status(500).json(err);
    }
});

//LOGIN

router.post("/login", async (req,res) => {
    //The login process cann fail so a try/catch is necessary
    try{
        //It will search the username in the db
        const user = await User.findOne({ username: req.body.username })
        if(!user){
            //Could not find the account 
            !user && res.status(400).json("Wrong credentials!")
            return;
        }

        //It is necessary to compare the submitted password with the hashed password in the db.
        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated){
            //Wrong password
            res.status(400).json("Wrong credentials!")
            return;
        }

        //It will take all properties except the password
        const {password, ...others } = user._doc;
        //All fields right. Login Successful
        res.status(200).json(others);
    }catch(err){
        console.log(err);
        res.sendStatus(500);
        return;
    }
});

//Export router
module.exports = router;