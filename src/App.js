import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./page/home/Home";
import Login from "./components/auth/login/Login";
import Booking from "./page/booking/Booking";
// import Room from "./components/rooms/Rooms";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App"> 
     <Header/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        {/* <Route path="/" element={<Room />} /> */}
        <Route path="/auth" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
