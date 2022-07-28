import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";
import Room from "./components/rooms/Rooms";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Room />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
