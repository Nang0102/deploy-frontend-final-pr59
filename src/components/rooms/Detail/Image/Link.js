import { Link } from "react-router-dom";
import { Description } from "./Description";
import { Information } from "./Information";

export const Links = () => {
  return (
    <div>
      <Link to="http://localhost:3000/Rooms/:id">Description</Link>
      <Link to="http://localhost:3000/Rooms/:id">Information</Link>
    </div>
  );
};
