import "./index.css";
import { Description } from "./Description";
import { Information } from "./Information";
import { Link, Routes, Route } from "react-router-dom";

const DescriptionImage = () => {
  return (
    <div className="container-description">
      <div>
        <Link to="#Description"> Description </Link> <br />
        <Link to="#"> Information </Link> <br />
      </div>
      <div>
        <Routes>
          <Route index path="" element={<Description />} />

          <Route path="#" element={<Information />} />
        </Routes>
      </div>

      {/* <Routes>
        <Route path="#" element={<Description />} />
        <Route path="#" element={<Information />} />
      </Routes> */}
      {/* <div>{<Information />}</div>
      <div>{<Description />}</div> */}
    </div>
  );
};
export default DescriptionImage;
