import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import { URL } from "../utils/url";

function Menu() {
  const [error, setError] = useState(false);

  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/v1/auth/logout", {
        withCredentials: true,
      });
      setUser(null);
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
            Login
          </h3>
        )}
        {!user && (
          <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
            Register
          </h3>
        )}
        {user && (
          <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
            Profile
          </h3>
        )}
        {user && (
          <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
            Write
          </h3>
        )}

        {user && (
          <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
            My Blogs
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
