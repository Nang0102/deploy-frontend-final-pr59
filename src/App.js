import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";


function App() {
  return (
    <div className="App"> 
     <Header/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
