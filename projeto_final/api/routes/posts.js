const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
router.post("/", async (req, res) => {
    const newPost = new Post(req.body);
    //We will try insert a new post to the db but this process can fail
    //so a try/catch is necessary
    try {
      const savedPost = await newPost.save();
      //Successful
      res.status(200).json(savedPost);
    } catch (err) {
      //Failure
      res.status(500).json(err);
    }
  });


//UPDATE POST
router.put("/:id", async (req, res) => {
    //We will try update post in the db but this process can fail
    //so a try/catch is necessary
    try {
      const post = await Post.findById(req.params.id);
      //Its only possible to update our own posts
      if (post.username === req.body.username) {
        try {
          const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
              $set: req.body,
            },
            { new: true }
          );
          //Successful
          res.status(200).json(updatedPost);
        } catch (err) {
          //Failure
          res.status(500).json(err);
        }
      } else {
        //Trying to update someone else post - not possible 
        res.status(401).json("You can update only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });


//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      //Its only possible to delete our own posts
      if (post.username === req.body.username) {
        try {
          await post.delete();
          //Successful
          res.status(200).json("Post has been deleted...");
        } catch (err) {
          //Failure
          res.status(500).json(err);
        }
      } else {
        //Trying to delete someone else post - Not possible
        res.status(401).json("You can delete only your post!");
      }
    } catch (err) {
      res.status(500).json(err);
    }
  });

//GET POST
router.get("/:id", async (req, res) => {
    try {
      //Serching the post with the right id in the db
      const post = await Post.findById(req.params.id);
      //Success
      res.status(200).json(post);
    } catch (err) {
      //Failure
      res.status(500).json(err);
    }
  });


//GET ALL POSTS
//It is possible to filter posts of a specific user
//by clicking on his username on the singlePost page or we can search http://localhost:3000/?user=username
router.get("/", async (req, res) => {
    //Username of the posts we are looking for
    const username = req.query.user;
    try {
      //let because is changeable
      let posts;
      //Get posts from a specific username
      if (username) {
        posts = await Post.find({ username });
      } 
      //Get all posts
      else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

//Export router
module.exports = router;