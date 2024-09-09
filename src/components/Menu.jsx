import React from "react";

function Menu() {
  const user = false;
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
          <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">
            Logout
          </h3>
        )}
      </div>
    </>
  );
}

export default Menu;
