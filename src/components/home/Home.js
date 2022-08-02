import React, { useContext } from "react";
import { LoginContext } from "../../context/AuthContext";
import Logout from "../auth/logout/Logout";
// import Room from "../rooms/Rooms";

// import { Contact } from "../Contact/Contact";

function Home() {
  const { login } = useContext(LoginContext);
  return (
    <div>
      <div>
        {/* <Room />
        <Contact /> */}
      </div>
      {login ? <Logout /> : null}
    </div>
  );
}

export default Home;
