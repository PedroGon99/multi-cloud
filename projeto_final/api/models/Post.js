const mongoose = require("mongoose")

//PostSchema will have 3 attributes: title, description and username of author
//All 3 will be required
//Title must be unique

const PostSchema = mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            unique:true
        },
        desc:{
            type:String,
            required:true,
        },
        username:{
            type:String,
            required:true,
        },
    },
    //To have access of createdDate
    { timestamps: true }
);

//Export Schema
module.exports = mongoose.model("Post", PostSchema);