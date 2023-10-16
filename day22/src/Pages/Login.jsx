import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../Assets/Login.css'


import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
   try{ if (username === "admin" && password === "admin@123") {
      
      navigate("/dashboard");
    }
    else if (username.length === 0 && password.length === 0) {
      seterror(true);
    } else if (password.length < 8) {
      seterror(true);
    } else if (username && password) {
      
      const response=await
       axios.post("http://localhost:8080/auth/authenticate",{username,password});
       localStorage.setItem("token", response.data.token)
      navigate("/");
    }}
    catch(error)
    {
      alert("Incorrect Username and Password.");
    }
    
    
  };
  return (
    <div className="body">
      
      <div className="layer"></div>
      <form onSubmit={handleSubmit} className="cover1">
        <h1 className="logintxt">Login to book a service!</h1>

        <label id="username">Username</label>
        <br/>
        <input id="inputuser"
          type="text"
          placeholder="Enter your Username"
          value={username}
          on
          onChange={(e) => setUsername(e.target.value)}
          
        />
         <br/>
        <span>
          {error && username.length === 0 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>Username is required</label>
          ) : (
            ""
          )}
        </span>
        <br/>
        <label id="password">Password</label>
        <br/>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          on
          onChange={(e) => setPassword(e.target.value)}
        />
         <br/>
        <span>
          {error && password.length === 0 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>Password is required</label>
          ) : (
            ""
          )}
      
          {error && password.length > 0 && password.length < 8 ? (
            <label style={{ color: "blue" ,fontSize:'12px'}}>
              Password should contain atleast 8 characters
            </label>
          ) : (
            ""
          )}
        </span>
        <button type="submit" className="loginn-btn">
          Login
        </button>
        <h2 className="account">Don't have account?</h2>
        <Link style={{ textDecoration: "none", color: "white" }} to="/register">
          <button type="submit" className="signnup-btn">
            Signup
          </button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
