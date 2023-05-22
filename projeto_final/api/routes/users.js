const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");


//creating -> post method
//updating -> put method
//deleting -> delete method
//fetch -> get method


//GET 
router.get("/:id", async (req, res) => {
    //We will try to get an user from the db but this process can fail
    //so a try/catch is necessary
    try {
      //Find the user from the db using his id
      const user = await User.findById(req.params.id);
      //It will take all properties except the password
      const { password, ...others } = user._doc;
      //Successful
      res.status(200).json(others);
    } catch (err) {
      //Failure
      res.status(500).json(err);
    }
  });

//Export router
module.exports = router;