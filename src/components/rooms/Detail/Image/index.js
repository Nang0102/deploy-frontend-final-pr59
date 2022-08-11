import "./index.css";
import { Description } from "./Description";
import { Information } from "./Information";
import { useState } from "react";

const DescriptionImage = () => {
  const [mytab, setTab] = useState(0);

  return (
    <div>
      <div className="container-description">
        <button
          style={{ margin: "0 20px", cursor: "pointer" }}
          className="tab"
          onClick={function (e) {
            setTab(0);
          }}
        >
          Description
        </button>
        <button
          style={{ margin: "0 20px", cursor: "pointer" }}
          className="tab"
          onClick={function (e) {
            setTab(1);
          }}
        >
          Aditional Information
        </button>
        {/* <p
          style={{ margin: "0 20px", cursor: "pointer" }}
          className="tab"
          onClick={() => {
            setTab(2);
          }}
        >
          Des
        </p>
        <p
          style={{ margin: "0 20px", cursor: "pointer" }}
          className="tab"
          onClick={() => {
            setTab(3);
          }}
        >
          Des
        </p> */}
      </div>
      <hr style={{ backgroundColor: "black", height: 3 }} />
      <div>
        <div className="tab_content">
          {mytab === 0 ? (
            <div>
              <Description />
            </div>
          ) : (
            <div>
              <Information />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default DescriptionImage;
