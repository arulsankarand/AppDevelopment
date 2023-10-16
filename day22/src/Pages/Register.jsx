import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [emailid, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      username.length === 0 &&
      password.length === 0 &&
      emailid.length === 0 &&
      mobileno
.length === 0
    ) {
      seterror(true);
    } else if (password.length < 8) {
      seterror(true);
    } else if (mobileno
.length < 10) {
      seterror(true);
    } else if (username === password) {
      seterror(true);
      alert("Username and password should not be same");
    } else if (username  && emailid && mobileno
 && password) {
      await axios.post("http://localhost:8080/auth/register",{username,emailid,mobileno
,password});
      navigate("/login");
    }
  };
  return (
    <div className="body">
    
      <div className="layer"></div>
      <form onSubmit={handleSubmit} className="cover2">
        <br/>
        <br/>
       <label id="username">Username</label>
       <br/> <input
          type="text"
          placeholder="Enter Username"
          value={username}
          on
          onChange={(e) => setUsername(e.target.value)}
        />
        <span>
          {error && username.length === 0 ? (
            <label style={{ color: "blue" ,fontSize:'12px'}}>Username is required</label>
          ) : (
            ""
          )}
        </span>
        <br/>
        <label id="email">Email</label>
        <br/><input
          type="emailid"
          placeholder="Enter your Email"
          value={emailid}
          on
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>
          {error && emailid.length === 0 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>EmailId is required</label>
          ) : (
            ""
          )}
        </span>
        <br/>
        <label id="mobile">Mobile Number</label><br/><input
          type="tel"
          placeholder="Enter Mobile mobileno
    "
          value={mobileno
    }
          on
          onChange={(e) => setMobileno
        (e.target.value)} maxLength={10}
        />
        <span>
          {error && mobileno
      .length === 0 ? (
            <label style={{ color: "blue" ,fontSize:'12px' }}>Mobile mobileno
       is required</label>
          ) : (
            ""
          )}
          {error && mobileno
      .length > 0 && mobileno
      .length < 10 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>
              Mobile mobileno
         must have 10 digits
            </label>
          ) : (
            ""
          )}
        </span>
        <br/>
        <label id="password">Password</label><br/>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          on
          onChange={(e) => setPassword(e.target.value)}
        />
        <span>
          {error && password.length === 0 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>Password is required</label>
          ) : (
            ""
          )}

          {error && password.length > 0 && password.length < 8 ? (
            <label style={{ color: "blue",fontSize:'12px' }}>
              Password should contain atleast 8 characters
            </label>
          ) : (
            ""
          )}
        </span>
        <br/>
        <button type="submit" className="signup-btn1">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Register;
