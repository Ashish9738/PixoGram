import React from 'react'
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

function Navbar() {
  const user = true;
  return (
    <>
      <div className='flex justify-between items-center px-6 md:px-[200px] py-6'>
        <h1 className='text-lg md:text-xl font-extrabold'><Link to='/'>PixoGram</Link></h1>
        <div className='flex justify-center items-center space-x-0 mx-3'>
          <input type="text" placeholder='seacrh for post...' className='outline-none px-3 py-1'/>
          <p><FaSearch /></p>
        </div>
        <div className='flex justify-center items-center space-x-2 md:space-x-4'>
          {user ? <h3><Link to="/write">Write</Link></h3> : <h3><Link to="/login">Login</Link></h3>}
          {user ? <h3><Link to="/profile">Profile</Link></h3> : <h3><Link to="/register">Register</Link></h3>}
        </div>
      </div>
    </>
  )
}

export default Navbar