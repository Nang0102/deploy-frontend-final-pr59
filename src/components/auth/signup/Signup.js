import React, { useContext, useState } from "react";
import { LoginContext } from "../../../context/AuthContext";
import "./signup.css";

function Signup() {
  const { setSignup } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const clickSignin = () => {
    setSignup(true);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const url = "https://backenfinal-prweb59.herokuapp.com/user/sign-up";
    const data = { email, username, password };
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });

    setSignup(true);

    return response.clone().json();
  };

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
            setUsername(e.target.value.trim());
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
