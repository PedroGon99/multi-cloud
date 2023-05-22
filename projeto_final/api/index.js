//create the express server
const express = require("express");
//create application
const app = express();
const dotenv = require("dotenv");
//"Mongoose provides a straight-forward, schema-based solution to model your application data."
//"It includes built-in type casting, validation, query building, business logic hooks and more, out of the box."
const mongoose = require("mongoose");

//Necessary to be able to access auth route
const authRoute = require("./routes/auth");

//Necessary to be able to access user route
const userRoute = require("./routes/users");

//Necessary to be able to access post route
const postRoute = require("./routes/posts");

dotenv.config();

//It can send any json object
app.use(express.json());

mongoose.set("strictQuery", false);


//Connection to MongoDB(MONGO_URL is .env file )
mongoose.connect(process.env.MONGO_URL).then(console.log("Connected to MongoDB")).catch((err) => console.log(err));


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

//To use the app we chose the port number 5000
app.listen("5000", ()=>{
    console.log("Backend is running.");
});