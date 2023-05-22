const mongoose = require("mongoose")


//UserSchema will have 3 attributes: username, email and password
//All 3 will be required
//Username and email must be unique

const UserSchema = mongoose.Schema({
        username:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },

    },
    //To have access of createdDate
    { timestamps: true }
);

//Export Schema
module.exports = mongoose.model("User", UserSchema);