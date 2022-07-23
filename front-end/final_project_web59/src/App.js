import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
