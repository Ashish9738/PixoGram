import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className=" h-screen w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Login</h1>
          <input
            type="text"
            className="outline-none w-full px-4 py-2 border-black border-2"
            placeholder="Enter your email"
          />
          <input
            type="password"
            className="outline-none w-full px-4 py-2 border-black border-2"
            placeholder="Enter your password"
          />
          <button className="w-full px-4 py-4 text-lg font-bold bg-black text-white rounded-lg hover:bg-gray-600">
            login
          </button>
          <div className="flex justify-center items-center space-x-4">
            <p>New here?</p>
            <p className="text-gray-400 hover:text-black">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
