import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Login from "./components/auth/login/Login";
import Booking from "./page/booking/Booking";
// import Room from "./components/rooms/Rooms";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        {/* <Route path="/" element={<Room />} /> */}
        <Route path="/auth" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
