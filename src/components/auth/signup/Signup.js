import React, { useContext, useState } from "react";
import axios from "axios";
import { LoginContext } from "../../../context/AuthContext";
import "./signup.css";

function Signup() {
  const { setSignup } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const clickSignin = () => {
    setSignup(true);
  };

  const handleSubmit = (email, username, password) => {
    return axios.post(
      "https://backenfinal-prweb59.herokuapp.com/user/sign-up",
      {
        email,
        username,
        password,
      }
    );
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setErrMessage("");
    try {
      const data = await handleSubmit(email, username, password);
      // if (
      //   !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      //     email
      //   )
      // ) {
      //   setErrMessage("Invalid email!");
      // }
      // if (password.length < 8) {
      //   setErrMessage("Password: 8 characters minimum!");
      // }

      // if (data.data && data.data.errCode !== 0) {
      //   // setErrMessage(data.data.message);
      // // } else {
      //   setSignup(true);
      // }

      if (data.data && data.data.errCode !== 0) {
        setErrMessage(data.data.message);
      }
      setEmail("");
      setPassword("");
      setUsername("");
      setSignup(true);
    } catch (e) {
      if (e.response) {
        if (e.response.data) {
          setErrMessage(e.response.data.message);
        }
      }
      console.log("error", e.response);
    }
  };

  // const handleSignup = async (e) => {
  //   e.preventDefault();
  //   const url = "http://127.0.0.1:5000/user/sign-up";
  //   const data = { email, username, password };
  //   const response = await fetch(url, {
  //     method: "POST",
  //     cache: "no-cache",
  //     credentials: "same-origin",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     redirect: "follow",
  //     referrerPolicy: "no-referrer",
  //     body: JSON.stringify(data),
  //   });

  //   setSignup(true);

  //   return response.clone().json();
  // };

  return (
    <div className="signupScreen">
      <form method="POST">
        <h1>Sign Up</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value.trim());
          }}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value.trim());
          }}
          required
        />

        <div className="err_message">{errMessage}</div>

        <button type="submit" onClick={handleSignup}>
          Sign Up
        </button>

        <h4>
          <span className="signupScreen__gray">Already have an account? </span>
          <span className="signupScreen__link" onClick={clickSignin}>
            Sign In now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default Signup;
