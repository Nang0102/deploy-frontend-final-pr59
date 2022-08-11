import "./rooms.css";
import { Search } from "./Search/Search";
import { Style } from "./Styles/Style";
import roomData from "./room.json";
// import Detail from "./Detail/Detail";
// import Search2 from "./Search2/Search2";

const Room = () => {
  return (
    <div>
      <div
        className="content-rooms"
        style={{
          backgroundImage:
            "url('https://erios.webhotel.vn/images/rooms-breadcrumbs.jpg')",
        }}
      >
        <p className="text-rooms">Rooms</p>
      </div>
      <div className="search-room">
        {/* <Search /> */}
        <Search placeholder="Search..." data={roomData} />
      </div>
      <div>
        <Style />
        {/* <Detail /> */}
      </div>
    </div>
  );
};
export default Room;
