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
  const [firtname, setfirtname] = useState("");
  const [gmail, setgmail] =useState("");
  const [ngaydat, setngaydat] =useState("");
  const [soluongnguoi, setsoluongnguoi] =useState("");
  const [lastname, setlastname] = useState("");
  const [sdt, setsdt] =useState("");
  const [loaiphong, setloaiphong] =useState("");
  const [ngaytra, setngaytra] =useState("");
  // const okii=false;

  // const [showClass, setShowClass] = useState(false);
  // const addShowClass = () => {
  //   setShowClass(!showClass);
  // };
  const datphong = async (e) => {
    e.preventDefault();
    const data={
      firtname,
      lastname,
      gmail,
      sdt,
      ngaydat,
      ngaytra,
      soluongnguoi,
      loaiphong
    };
    const url = "http://localhost:5001/The-Booking"
    // console.log("giatri", e.target.value);
    // console.log("tendau", firtname);
    // console.log("tencuoi", lastname);
    // console.log("tendau", gmail);
    // console.log("tendau", sdt);
    // console.log("tendau", ngaydat);
    // console.log("tendau", ngaytra);
    // console.log("tendau", soluongnguoi);
    // console.log("loaiphong", loaiphong);
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    console.log("tendau", firtname);
    console.log("tencuoi", lastname);
    console.log("danhap", response.json());
    alert("ban da dat phong thanh cong");
    
  };
  const onchangefirtname = (event) => {
    setfirtname(event.target.value);
  };
  const onchangelastname = (event) => {
    setlastname(event.target.value);
  };
  const onchangegmail=(event)=>{
    setgmail(event.target.value);
}

  const onchangephonenumber= (event) => {
      setsdt(event.target.value);
  }

    const onchangengayroidi= (event) => {
      setngaytra(event.target.value);
    }

    const onchangengaydatphong= (event) => {
      setngaydat(event.target.value);
    }
    const onchangesoluongnguoi= (event) => {
      setsoluongnguoi(event.target.value);
    }
    const onchangeloaiphong= (event) => {
      setloaiphong(event.target.value);
    }
  return (
    <div className="booking-container">
      {" "}
      {/* <header>
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
                              </header> */}{" "}
      <p className="booking-container-h1"> Resort Booking Form </p>{" "}
      <div className="booking-item">
        <div className="title"> Book Now </div>{" "}
        <div className="content">
          <form action="#">
            <div className="user-details">
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  type="text"
                  id="input-group"
                  placeholder="First name"
                  onChange={onchangefirtname}
                />{" "}
              </div>{" "}
              <div className="input-box">
                <FaUser className="icon" />
                <input
                  type="text"
                  id="input-group"
                  placeholder="Last name"
                  onChange={onchangelastname}
                />{" "}
              </div>{" "}
              <div className="input-box">
                <FaEnvelope className="icon" />
                <input type="email" id="input-group" placeholder="Email"  onChange={onchangegmail}/>
              </div>{" "}
              <div className="input-box">
                <FaPhoneAlt className="icon" />
                <input
                  type="number"
                  id="input-group"
                  placeholder="Phone number"
                  onChange={onchangephonenumber}
                />
              </div>{" "}
              <div className="input-box">
                <FaCalendarAlt className="icon" />
                <input
                  style={{ color: "#fff" }}
                  type="date"
                  id="input-group"
                  placeholder="Departure Date:"
                  onChange={onchangengayroidi}
                />
              </div>{" "}
              <div className="input-box">
                <FaCalendarAlt className="icon" />
                <input
                  type="date"
                  id="input-group"
                  placeholder="Arrival Date:m"
                  onChange={onchangengaydatphong}
                />
              </div>{" "}
              <div className="input-box">
                <FaUsers className="icon" />
                <input
                  type="number"
                  id="input-group"
                  placeholder="No.of guests"
                  onChange={onchangesoluongnguoi}
                />
              </div>{" "}
              <div className="input-box">
                <FaHotel className="icon" />
                <select id="input-group" onChange={onchangeloaiphong}>
                  <option value=""> Room Type </option>
                  <option value="AC"> AC </option>
                  <option value="Non - AC"> Non - AC </option>
                  <option value="Single Bed"> Single Bed </option>
                  <option value="Double Bed"> Double Bed </option>
                  
                </select>
                
              </div>{" "}
            </div>{" "}
            <div className="button">
              <button id="reset-btn"> Reset </button>{" "}
              <button id="submit-btn" onClick={datphong}>
                Book Now{" "}
              </button>{" "}
              {/* {okii==true && <button id="reset-btn"> sdfd </button>} */}
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Booking;
