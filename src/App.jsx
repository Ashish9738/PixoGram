import Home from "../src/ui/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./ui/Login";
import Register from "./ui/Register";
import PostDetails from "./ui/PostDetails";
import CreatePost from "./ui/CreatePost";
import EditPost from "./ui/EditPost";
import Profile from "./ui/Profile";
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/write" element={<CreatePost />} />
        <Route exact path="/edit/:id" element={<EditPost />} />
        <Route exact path="/profile/:id" element={<Profile />} />
        <Route exact path="/posts/post/:id" element={<PostDetails />} />
        <Route path="*" element={<div>404: Page not found</div>} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
