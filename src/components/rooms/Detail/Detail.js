import "../rooms.css";
import { React, useState, useEffect } from "react";
import { axios } from "axios";

export const Detail = () => {
  const url = "http://127.0.0.1:5000/user/room";
  const [room, setRoom] = useState(null);
  //
  let content = null;
  useEffect(() => {
    axios.get(url).then((response) => {
      setRoom(response.data);
    });
  }, [url]);
  if (room) {
    content = (
      <div>
        <h1>{room.title}</h1>
      </div>
    );
  }
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
        {content}
      </div>
    </div>
  );
};
