import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";
import "../signup/signup.css";
import { LoginContext } from "../../../context/AuthContext";
import Signup from "../signup/Signup";

function Login() {
  const navigate = useNavigate();
  const { setLogin, setSignup, signup } = useContext(LoginContext);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrMessage("");
    // const data = { email, username, password };
    // const url = "/user/login";
    // const response = await fetch(url, {
    //   method: "POST",
    //   cache: "no-cache",
    //   credentials: "same-origin",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   redirect: "follow",
    //   referrerPolicy: "no-referrer",
    //   body: JSON.stringify(data),
    // });

    // setLogin(true);
    // navigate("/");

    // console.log("response:", response.clone().json());
    // console.log(email, username);

    try {
      const data = await handleSubmit(email, username, password);
      if (data.data && data.data.errCode !== 0) {
        setErrMessage(data.data.message);
      } else {
        localStorage.setItem("user", JSON.stringify({ email, username }));
        setLogin(true);
        navigate("/");
      }
    } catch (e) {
      if (e.response) {
        if (e.response.data) {
          setErrMessage(e.response.data.message);
        }
      }
      console.log("error", e.response);
    }
  };

  const handleSubmit = (email, username, password) => {
    return axios.post("https://backenfinal-prweb59.herokuapp.com/user/login", {
      email,
      username,
      password,
    });
  };

  const clickSignup = (e) => {
    setSignup(!signup);
  };

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/289077027_731210008115697_8505480625261202562_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RpkxJjw9o3IAX9M5dmX&tn=vy_40HxMuTcWo-oL&_nc_ht=scontent.fhan2-4.fna&oh=03_AVKhud9Evoz4i7GNV80TyK4sAlEm0_krI9KPr0XPdkaHYw&oe=62FB2F5D"
          alt=""
        />

        <button className="loginScreen__button" onClick={clickSignup}>
          {signup ? "Sign Up" : "Sign In"}
        </button>

        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        {signup ? (
          <div className="signupScreen">
            <form>
              <h1>Sign In</h1>
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

              <button type="submit" onClick={handleLogin}>
                Sign In
              </button>

              <h4>
                <span className="signupScreen__gray">
                  Don't have an account?{" "}
                </span>
                <span className="signupScreen__link" onClick={clickSignup}>
                  Sign Up now.
                </span>
              </h4>
            </form>
          </div>
        ) : (
          <Signup />
        )}
      </div>
    </div>
  );
}

export default Login;
