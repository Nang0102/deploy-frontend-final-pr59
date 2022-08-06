import React from "react";
import "./header.css";
import { NavLink, Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import NavLinks from "./NavLinks";
// import NavLinks from "./NavLinks";
import Home from "./../home/Home";
import Room from "./../rooms/Rooms";
import Booking from "./../../page/booking/Booking";

function Header() {
  // const activeClass = (params) => {
  //   return params.isActive ? "active-menu" : "active-menu-items";
  // };

  // const [navbar, setNavbar] = useState(false);
  // const changeBackground = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };
  // window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <div className=" header-container">
        <img
          className=" logo"
          src="https://static.ybox.vn/2020/9/4/1600941241699-1594126270885-1577762085284-1571027713600-logo%20techkids%20moi%207%20(1)-05%20(1).png"
          alt=""
        />

        <NavLinks />
        <NavLink className=" button  " to="/auth">
          Login <FontAwesomeIcon icon={faArrowRight} />{" "}
        </NavLink>
      </div>
      <Routes>
        <Route index path="/Home" element={<Home />} />
        <Route path="/Rooms" element={<Room />} />
        <Route path="/The-Booking" element={<Booking />} />
      </Routes>
    </div>
  );
}

export default Header;
