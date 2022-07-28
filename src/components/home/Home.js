import React, { useContext } from "react";
import { LoginContext } from "../../context/AuthContext";
import Logout from "../auth/logout/Logout";
import Room from "../rooms/Rooms";

function Home() {
  const { login } = useContext(LoginContext);
  return (
    <div>
      <div>
        <Room />
      </div>
      {login ? <Logout /> : null}
    </div>
  );
}

export default Home;
