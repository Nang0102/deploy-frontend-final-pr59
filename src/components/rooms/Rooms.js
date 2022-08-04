import "./rooms.css";
import { Search } from "./Search/Search";
import { Style } from "./Styles/Style";
import roomData from "./room.json";

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
        <Search placeholder="Search..." data={roomData} />
      </div>
      <div>
        <Style />
      </div>
    </div>
  );
};
export default Room;
