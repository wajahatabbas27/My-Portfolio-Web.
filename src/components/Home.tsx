import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      `Hi, Development Environment Created, Come On!`,
      "Let's Code Boy!",
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeHere/>",
      "Jack Of All Trades!!!",
      "Modern FullStack/Serverless Developer",
    ],
    loop: true,
    delaySpeed: 1800,
  });

  return (
    <div
      id='home'
      className='bg-[#0a192f] h-screen w-full  pt-32 xs:pt-0 pb-18 xs:pb-0 mb-0 '
    >
      {/* Container */}
      <div className='max-w-[1000px] h-full mx-auto px-8 flex flex-col justify-center '>
        <motion.p
          initial={{ y: -500, opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          className='text-pink-600'
        >
          Hi, my name is
        </motion.p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6] nameBackground animate-spin'>
          Wajahat Abbas
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0] skillBackground'>
          {text}
          <Cursor cursorColor='#FF1493' />
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <motion.button
            initial={{ x: -500, opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className='group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
          >
            View Work{" "}
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight size={20} className='ml-3' />
            </span>
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Home;
