import axios from "axios";
import { useState } from "react";
import "./register.css";

export default function Register() {
  //The initial state is an empty String for all fields
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      //After registration, the user is redirected to the login page
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    //When the submission occurs, the handleSubmit function will be called
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
      
        <label><b>Username</b></label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          //Update username var 
          onChange={(e) => setUsername(e.target.value)}
        />
        <label><b>Email</b></label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          //Update email var
          onChange={(e) => setEmail(e.target.value)}
        />
        <label><b>Password</b></label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          //Update password var
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}