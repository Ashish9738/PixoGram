import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfilePosts from "../components/ProfilePosts";

export default function Profile() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow  px-6 md:space-x-10 md:px-[200px] flex mt-8 md:flex-row flex-col-reverse">
          {/* left div  */}
          <div className="flex flex-col md:w-[70%] w-full">
            <h1 className="text-xl font-extrabold mb-4 ">Your posts</h1>
            <ProfilePosts />
            <ProfilePosts />
            <ProfilePosts />
            <ProfilePosts />
          </div>
          {/* Right div  */}
          <div className="flex flex-col space-y-4 md:w-[30%] w-full md:items-start mb-8">
            <h1 className="text-xl font-extrabold mb-4 ">Profile</h1>
            <input
              type="text"
              className="outline-none px-4 py-2  hover:border-black border-2"
              placeholder="Your username"
            />
            <input
              type="email"
              className="outline-none px-4 py-2  hover:border-black border-2"
              placeholder="Your email"
            />
            <input
              type="password"
              className="outline-none px-4 py-2  hover:border-black border-2"
              placeholder="Your Password"
            />
            <div className="flex items-center space-x-4 mt-10">
              <button className="text-white font-semibold bg-black px-4 py-2 rounded-sm hover:bg-gray-400 hover:text-black">
                Update
              </button>
              <button className="text-white font-semibold bg-black px-4 py-2 rounded-sm hover:bg-gray-400 hover:text-black">
                Delete
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
