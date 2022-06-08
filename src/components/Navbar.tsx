import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[100px] bg-[#0a192f] flex items-center justify-between px-4 text-gray-300'>
      {/* Logo */}
      <div>
        <img src={Logo} alt='logo of the portfolio' className='w-[50px]' />
      </div>

      {/* Menu */}

      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* responsive bars icon button for smaller screens like mobile */}
      <div onClick={handleclick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      {/* absolute bg-[#0a192f] top-0 left-0 w-full h-screen flex flex-col justify-center items-center */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute bg-[#0a192f] top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
        }
      >
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* social icons */}
      <div className='hidden'></div>
    </div>
  );
};

export default Navbar;
