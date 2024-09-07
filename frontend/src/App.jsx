import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Home from "../src/ui/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./ui/Login";
import Register from "./ui/Register";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
