import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import "./booking.css";

function Booking() {
  const [showClass, setShowClass] = useState(false)
  const addShowClass = () => {
    setShowClass(!showClass)
  }
  return (
    <div className="booking-container">
      <header>
        <nav>
          <div className="row">
            <img
              src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/289077027_731210008115697_8505480625261202562_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RpkxJjw9o3IAX9M5dmX&tn=vy_40HxMuTcWo-oL&_nc_ht=scontent.fhan2-4.fna&oh=03_AVKhud9Evoz4i7GNV80TyK4sAlEm0_krI9KPr0XPdkaHYw&oe=62FB2F5D"
              className="logo"
              alt="logo"
            />
            <div>
              <ul
                className={`main-nav ${showClass ? "show" : ""}`}
                id="check-class"
              >
                <li>
                  <a href="Main.html">HOME</a>
                </li>
                <li>
                  <a href="Aboutus.html">ABOUT US</a>
                </li>
                <li>
                  <a href="Form.html">BOOK YOUR ROOM</a>
                </li>
                <li>
                  <a href="attraction.html">ATTRACTIONS</a>
                </li>
              </ul>
              <label className="icon" onClick={addShowClass}>
                <FaBars />
              </label>
            </div>
          </div>
        </nav>
      </header>

      <h1> Resort Booking Form</h1>
      
      <div className="container">
        <div className="title">Book Now</div>
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <FaUser className="icon" />
                <input type="text" id="input-group" placeholder="First name" />
              </div>

              <div className="input-box">
                <FaUser className="icon" />
                <input type="text" id="input-group" placeholder="Last name" />
              </div>

              <div className="input-box">
                <FaEnvelope className="icon" />
                <input type="email" id="input-group" placeholder="Email" />
              </div>

              <div className="input-box">
                <FaPhoneAlt className="icon" />
                <input
                  type="number"
                  id="input-group"
                  placeholder="Phone number"
                />
              </div>

              <div className="input-box">
                <FaCalendarAlt className="icon" />
                <input
                  style={{color: '#fff'}}
                  type="date"
                  id="input-group"
                  placeholder="Departure Date"
                />
              </div>

              <div className="input-box">
                <FaCalendarAlt className="icon" />
                <input
                  type="date"
                  id="input-group"
                  placeholder="Arrival Date"
                />
              </div>

              <div className="input-box">
                <FaUsers className="icon" />
                <input
                  type="number"
                  id="input-group"
                  placeholder="No.of guests"
                />
              </div>

              <div className="input-box">
                <FaHotel className="icon" />
                <select id="input-group">
                  <option value="">Room Type</option>
                  <option value="">AC</option>
                  <option value="">Non-AC</option>
                  <option value="">Single Bed</option>
                  <option value="">Double Bed</option>
                </select>
              </div>
            </div>
            <div className="button">
              <button id="reset-btn">Reset</button>
              <button type="submit" value="Submit" id="submit-btn">
                Book Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Booking;
