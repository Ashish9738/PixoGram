import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePosts from "../components/ProfilePosts";
import { useParams } from "react-router-dom";
import axios from "axios";
import { URL } from "../utils/url";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function Profile() {
  // const { id } = useParams();
  const { user, setUser } = useContext(UserContext);
  const id = user?.data?.id;
  const [posts, setPosts] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);

  console.log("here in profile", user);

  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();

  const fetchUserDetails = async () => {
    try {
      const res = await axios.get(`${URL}/api/v1/user/${id}`, {
        withCredentials: true,
      });
      setUsername(res?.data?.username);
      setEmail(res?.data?.email);
    } catch (error) {
      console.log("Failed to fetch user details", error);
    }
  };

  const fetchPost = async () => {
    try {
      const res = await axios.get(`${URL}/api/v1/posts/users/${id}`);
      console.log("fetched posts", res.data);
      setPosts(res?.data);
      // setPost()
    } catch (error) {
      console.log("Failed to fetch user post:", error);
    }
  };

  const handleUpdateUserDetails = async () => {
    setIsUpdated(false);
    try {
      const data = {
        username,
        email,
      };
      const res = await axios.put(`${URL}/api/v1/user/update/${id}`, data, {
        withCredentials: true,
      });
      console.log(res.data);
      setIsUpdated(true);
    } catch (error) {
      setIsUpdated(false);
      console.log("Failed to update user details", error);
    }
  };

  const handleDeleteUser = async () => {
    try {
      const res = await axios.delete(`${URL}/api/v1/user/delete/${id}`, {
        withCredentials: true,
      });
      setUser(null);
      navigate("/");
      console.log("User has been delete successfully!");
    } catch (error) {
      console.log("Failed to delete user", error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
    fetchPost();
  }, [id]);

  // console.log("userid ", id);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow  px-6 md:space-x-10 md:px-[200px] flex mt-8 md:flex-row flex-col-reverse">
          {/* left div  */}
          <div className="flex flex-col md:w-[70%] w-full">
            <h1 className="text-xl font-extrabold mb-4 ">Your posts</h1>
            <ProfilePosts posts={posts} />
          </div>
          {/* Right div  */}
          <div className="flex flex-col space-y-4 md:w-[30%] w-full md:items-start mb-8">
            <h1 className="text-xl font-extrabold mb-4 ">Profile</h1>
            <input
              type="text"
              className="outline-none px-4 py-2  hover:border-black border-2"
              placeholder="Your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <input
              type="email"
              className="outline-none px-4 py-2  hover:border-black border-2"
              placeholder="Your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <div className="flex items-center space-x-4 mt-10">
              <button
                className="text-white font-semibold bg-black px-4 py-2 rounded-sm hover:bg-gray-400 hover:text-black"
                onClick={handleUpdateUserDetails}
              >
                Update
              </button>
              <button
                className="text-white font-semibold bg-black px-4 py-2 rounded-sm hover:bg-gray-400 hover:text-black"
                onClick={handleDeleteUser}
              >
                Delete
              </button>
            </div>
            {isUpdated && (
              <h3 className="text-md text-green-600">
                Profile has been successfully updated!
              </h3>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
