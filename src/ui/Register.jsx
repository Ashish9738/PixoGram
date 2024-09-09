import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { URL } from "../utils/url";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  // console.log(username);
  // console.log(email);
  // console.log(password);

  const handleRegister = async () => {
    try {
      const data = { username, email, password };
      const resp = await axios.post(URL + "/api/v1/auth/register", data);
      // console.log("Register data", resp.data);
      setUsername(resp.data.username);
      setEmail(resp.data.email);
      setPassword(resp.data.password);
      setError(false);
      navigate("/login");
    } catch (error) {
      setError(true);
      console.log("Failed to register", error);
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Create an account</h1>
          <input
            type="text"
            className="outline-none w-full px-4 py-2 border-black border-2"
            placeholder="Enter your username"
            onChange={(event) => setUsername(event.target.value)}
          />
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
          {/* {(username || email || password) === "" ? (
            <h3 className="text-red-500 tex-sm">
              Make sure you fill all the fields
            </h3>
          ) : null} */}
          {error && <h3 className="text-red-500 tex-sm">Failed to register</h3>}
          <button
            className="w-full px-4 py-4 text-lg font-bold bg-black text-white rounded-lg hover:bg-gray-600"
            onClick={() => handleRegister()}
          >
            Register
          </button>
          <div className="flex justify-center items-center space-x-4">
            <p>Already have an account?</p>
            <p className="text-gray-400 hover:text-black">
              <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
