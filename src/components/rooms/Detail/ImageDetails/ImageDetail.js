import "./index.css";
import axios from "axios";
import useState from "react";

const ImageDetail = () => {
  const showItem = (title, image, weekdayprice, weekendprice) => {
    return axios.get("http://127.0.0.1:5000/user/room", {
      title,
      image,
      weekdayprice,
      weekendprice,
    });
  };

  const [showClass, setShowClass] = useState(false);
  const addShowClass = () => {
    setShowClass(!showClass);
  };

  return (
    <div className="image-detail-container">
      <div className={`main-nav ${showClass ? "show" : ""}`} id="check-class">
        {showItem}
      </div>
    </div>
  );
};
export default ImageDetail;
