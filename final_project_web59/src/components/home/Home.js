import React, { useContext } from "react";
import { LoginContext } from "../../context/AuthContext";
import Logout from "../auth/logout/Logout";

function Home() {
  const { login } = useContext(LoginContext);
  return (
    <div>
      <div>HOME PAGE </div>
      {login ? <Logout /> : null}
    </div>
  );
}

export default Home;
