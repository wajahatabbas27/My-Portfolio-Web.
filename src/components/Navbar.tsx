import React, { useState } from "react";
import Logo from "../assets/logo.png";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  //setting it to false when ever the button is called to show the cross button
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
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
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

      {/* social icons are hidden will only show up when the screen greater than large */}
      <div className='hidden lg:flex flex-col fixed left-0 top-[35%]'>
        <ul>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              href='/'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              href='/'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              href='/'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-b from-[#405DE6] to-[#F77737] via-[#C13584]'>
            <a
              href='/'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Instagram <FaInstagram size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
