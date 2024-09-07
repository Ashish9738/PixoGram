import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Home from "../src/ui/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./ui/Login";
import Register from "./ui/Register";
import PostDetails from "./ui/PostDetails";
import CreatePost from "./ui/CreatePost";
import EditPost from "./ui/EditPost";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/write" element={<CreatePost />} />
        <Route exact path="/posts/post/:id" element={<PostDetails />} />
        <Route exact path="/edit/:id" element={<EditPost />} />
      </Routes>
    </>
  );
}

export default App;
