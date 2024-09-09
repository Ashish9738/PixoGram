import React, { useContext, useState } from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [prompt, setPrompt] = useState("");

  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const showMenu = () => {
    setMenu(!menu);
  };

  // console.log("user data", user);
  // console.log("prompt data", prompt);
  return (
    <>
      <div className="flex justify-between items-center px-6 md:px-[200px] py-[17px]">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">PixoGram</Link>
        </h1>
        <div className="flex justify-center items-center space-x-0 mx-3">
          <input
            type="text"
            placeholder="seacrh for post..."
            className="outline-none px-3 py-1 w-2/3 md:w-full"
            onChange={(event) => setPrompt(event.target.value)}
          />
          <p>
            <FaSearch
              className="cursor-pointer"
              onClick={() =>
                navigate(prompt ? "?search=" + prompt : navigate("/"))
              }
            />
          </p>
        </div>
        <div className="hidden md:flex justify-center items-center space-x-2 md:space-x-8">
          {user ? (
            <h3>
              <Link to="/write">Write</Link>
            </h3>
          ) : (
            <h3>
              <Link to="/login">Login</Link>
            </h3>
          )}
          {user ? (
            <div onClick={() => showMenu()} className="md: text-lg  ">
              <p>
                <FaBars className="cursor-pointer relative" />
                {menu && <Menu />}
              </p>
            </div>
          ) : (
            <h3>
              <Link to="/register">Register</Link>
            </h3>
          )}
        </div>
        <div onClick={() => showMenu()} className="md:hidden text-lg">
          <p>
            <FaBars className="cursor-pointer relative" />
            {menu && <Menu />}
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
