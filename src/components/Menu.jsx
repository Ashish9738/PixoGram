import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../utils/url";
import { useNavigate, Link } from "react-router-dom";

function Menu() {
  const [error, setError] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // console.log("here", user.data.id);

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/v1/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
      navigate("/");
    } catch (error) {
      setError(true);
      console.log("Failed to logout", error);
    }
  };
  return (
    <>
      <div className="bg-black w-[200px] flex flex-col items-start absolute top-14 right-6 space-y-4 rounded-md p-4 md:right-48">
        {!user && (
          <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
            <Link to={"/login"}>Login</Link>
          </h3>
        )}
        {!user && (
          <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
            <Link to={"/Register"}>Register</Link>
          </h3>
        )}
        {user && (
          <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
            <Link to={`/profile/${user?.data?.id}`}>Profile</Link>
          </h3>
        )}

        {user && (
          <h3
            className="text-white text-sm hover:text-gray-500 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </h3>
        )}
      </div>
    </>
  );
}

export default Menu;
