import React, { useState } from "react";
import Logo from "../assets/main-logo.gif";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  //setting it to false when ever the button is called to show the cross button
  const handleclick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[100px] bg-[#0a192f] flex items-center justify-between px-4 text-gray-300 z-50 '>
      {/* Logo */}
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Link to='home' smooth={true} duration={500}>
          <img
            src={Logo}
            alt='logo of the portfolio'
            className='w-[80px] cursor-pointer '
          />
        </Link>
      </motion.div>

      {/* Menu */}

      <motion.ul
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className='hidden md:flex'
      >
        <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </motion.ul>

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
            : "absolute bg-[#0a192f]  top-0 left-0 w-full h-screen flex flex-col justify-center items-center "
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleclick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleclick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleclick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleclick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleclick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* social icons are hidden will only show up when the screen greater than large */}
      <div className='hidden lg:flex flex-col fixed left-0 top-[35%]'>
        <ul>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              href='https://www.linkedin.com/in/wajahat-abbas-084352194/'
              target='_blank'
              rel='noreferrer'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              href='https://github.com/wajahatabbas27'
              target='_blank'
              rel='noreferrer'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a
              href='https://mail.google.com/mail/u/0/#inbox'
              target='_blank'
              rel='noreferrer'
              className='flex items-center w-full justify-between text-gray-300'
            >
              Mail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gradient-to-b from-[#405DE6] to-[#F77737] via-[#C13584]'>
            <a
              href='https://www.instagram.com/wajahatabbas_/'
              target='_blank'
              rel='noreferrer'
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
