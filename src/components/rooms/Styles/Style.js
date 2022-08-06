import "./Style.css";
import { Title } from "./Title";
import { Link } from "react-router-dom";
// import useFetch from "./useEffect";
export const Style = () => {
  // const { data } = useFetch("http://127.0.0.1:5000/user/room");
  // console.log(data);
  return (
    <div>
      <div className="row-style">
        <Link to="Luxury Rooms">
          <Title
            img="	https://erios.webhotel.vn/images/room-5-768x624.jpg"
            title="Luxury Rooms"
          />
        </Link>
        <Link to="">
          {" "}
          <Title
            img="	https://erios.webhotel.vn/images/room-1-768x624.jpg"
            title="Double Rooms"
          />
        </Link>
        <Link to="">
          <Title
            img="	https://erios.webhotel.vn/images/room-5-768x624.jpg"
            title="Classic Rooms"
          />
        </Link>
        <Link to="">
          {" "}
          <Title
            img="	https://erios.webhotel.vn/images/room-6-768x624.jpg"
            title="Premium Rooms"
          />
        </Link>
        <Link to="">
          <Title
            img="	https://pix10.agoda.net/hotelImages/209/2092140/2092140_17031512040051555216.jpg?ca=6&ce=1&s=1024x768
          "
            title="Standard Rooms"
          />
        </Link>
        <Link to="Double Rooms">
          <Title
            img="	https://s3-ap-southeast-1.amazonaws.com/blog-ph/wp-content/uploads/2016/08/12091211/hotel-room-marina-bay-sands.jpg"
            title="Double Rooms"
          />
        </Link>
        <Link to="Classic Rooms">
          <Title
            img="	https://erios.webhotel.vn/images/room-1-768x624.jpg"
            title="Classic Rooms"
          />
        </Link>
        <Link to="Golden Rooms">
          {" "}
          <Title
            img="	https://erios.webhotel.vn/images/room-1-768x624.jpg"
            title="Golden Rooms"
          />
        </Link>
      </div>
    </div>
  );
};
