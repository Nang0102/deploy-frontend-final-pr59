import "./rooms.css";
import { Search } from "./Search/Search";
import { Style } from "./Styles/Style";
const Room = () => {
  return (
    <div>
      <div className="content-rooms">
        <p className="text-rooms">Rooms</p>
      </div>
      <div>
        <Search />
      </div>
      <div>
        <Style />
      </div>
    </div>
  );
};
export default Room;
