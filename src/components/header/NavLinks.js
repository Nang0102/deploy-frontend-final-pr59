import "../header/header.css";
import { NavLink } from "react-router-dom";

const NavLinks = (props) => {
  return (
    <div>
      <ul className=" menu">
        <li>
          <NavLink className="menu-name" to="/Home">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="menu-name" to="/The-Booking">
            THE BOOKING
          </NavLink>
        </li>
        <li>
          <NavLink className="menu-name" to="/Rooms">
            ROOMS
          </NavLink>
        </li>
        {/* <li>
          <NavLink className="menu-name" to="/Amenities">
            AMENITIES
          </NavLink>
        </li> */}

        {/* <li>
          <NavLink className="menu-name" to="/Gallery">
            GALLERY
          </NavLink>
        </li> */}
        <li>
          <NavLink className="menu-name" to="/Rooms/:id">
            PAGE
          </NavLink>
        </li>
        <li>
          <NavLink className="menu-name" to="/Contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavLinks;
