import "../rooms.css";
// import "./Detail.css";
import "../../home/RoomsSuites.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
// import "./HandleImageDetail";
import { React, useState, useEffect } from "react";
import axios from "axios";

function Detail(props) {
  const [roomDetail, setRoomDetail] = useState([]);

  useEffect(() => {
    const RoomDetail = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:5000/user/room");
        setRoomDetail(res.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    RoomDetail();
  });

  const slideLeft = () => {
    var slideCards = document.getElementById("slideCards");
    slideCards.scrollLeft = slideCards.scrollLeft - 500;
  };
  const slideRight = () => {
    var slideCards = document.getElementById("slideCards");
    slideCards.scrollLeft = slideCards.scrollLeft + 500;
  };
  return (
    <div>
      <div
        className="content-rooms"
        style={{
          backgroundImage:
            "url('https://erios.webhotel.vn/images/breadcrumb-bg.jpg')",
        }}
      >
        <p className="text-rooms">Rooms Detail</p>
      </div>
      <div className="slider-card">
        <div className="main-slider">
          <FontAwesomeIcon
            className="angle-left"
            icon={faAngleLeft}
            onClick={slideLeft}
          />
          <div className="slideCards" id="slideCards">
            {roomDetail.map((roomDetail, index) => {
              return (
                <div className="card font-serif" key={index}>
                  <div
                    className="card-img"
                    style={{
                      backgroundImage: `url(${roomDetail.url})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <p className="card-img-title" >{roomDetail.title}</p>
                  <p className="card-img-description">
                    <p>Weekdayprice: {roomDetail.weekdayprice} </p>
                    <br />
                    <p>Weekendprice: {roomDetail.weekendprice} </p>
                  </p>
                </div>
              );
            })}
          </div>
          <FontAwesomeIcon
            className="angle-right"
            icon={faArrowRight}
            onClick={slideRight}
          />
        </div>
      </div>
    </div>
  );
}

export default Detail;
