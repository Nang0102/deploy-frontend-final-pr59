import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Login from "./components/auth/login/Login";

function App() {
  return (
<<<<<<< HEAD
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Login />} />
      </Routes>
=======
    <div>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
>>>>>>> develop
    </div>
  );
}

export default App;
