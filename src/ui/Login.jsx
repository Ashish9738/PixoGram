import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
    } catch (error) {
      setError(true);
      console.log("Failed to Login", error);
    }
  };
  return (
    <>
      <div className=" h-screen w-full flex justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Login</h1>
          <input
            type="text"
            className="outline-none w-full px-4 py-2 border-black border-2"
            placeholder="Enter your email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            className="outline-none w-full px-4 py-2 border-black border-2"
            placeholder="Enter your password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className="w-full px-4 py-4 text-lg font-bold bg-black text-white rounded-lg hover:bg-gray-600"
            onClick={handleLogin}
          >
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
