import React from "react";

import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import NODE from "../assets/node.png";
import AWS from "../assets/aws.png";
import GITHUB from "../assets/github.png";
import MONGO from "../assets/mongo.png";

const Skills = () => {
  return (
    <div
      id='skills'
      className='w-full h-screen bg-[#0a192f] text-gray-300  pt-32 xs:pt-0'
    >
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-pink-600 inline  '>
            Skills
          </p>
          <p className='py-4'>
            &#047;&#047; These are the technologies I've worked with
          </p>
        </div>

        {/* images div */}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={HTML} alt='html icon' className='w-20 mx-auto' />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={CSS} alt='css icon' className='w-20 mx-auto' />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img
              src={JAVASCRIPT}
              alt='javascript icon'
              className='w-20 mx-auto'
            />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={REACT} alt='react icon' className='w-20 mx-auto' />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={GITHUB} alt='github icon' className='w-20 mx-auto' />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={NODE} alt='node icon' className='w-20 mx-auto' />
            <p className='my-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={MONGO} alt='mongodb icon' className='w-20 mx-auto' />
            <p className='my-4'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img src={AWS} alt='aws icon' className='w-20 mx-auto' />
            <p className='my-4'>AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
