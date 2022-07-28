import "./rooms.css";
import { Search } from "./Search/Search";
import { Style } from "./Styles/Style";
const Room = () => {
  return (
    <div>
      <div className="content-rooms">
        <p className="text-rooms">Rooms</p>
      </div>
      <div className="search-room">
        <Search
          placeholder="Search..."
          data={
            "mongodb+srv://final_project_3: 1234567890@cluster0.gi7pf.mongodb.net/?retryWrites=true&w=majority"
          }
        />
      </div>
      <div>
        <Style />
      </div>
    </div>
  );
};
export default Room;
