import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  //Initially title and description field will be empty
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  //The user will be obtained with Context
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //Creating a new Post with all the fields
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    try {
      const res = await axios.post("/posts", newPost);
      //The user will be redirected to the singlePost page of the newPost
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            
          </label>
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}