import React from "react";

const Contact = () => {
  return (
    <div
      id='contact'
      className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-32 xs:pt-0'
    >
      <form
        action='https://getform.io/f/975fd7f9-680c-418f-b7cb-00590368d1ea'
        method='POST'
        className='flex flex-col max-w-[600px] w-full'
      >
        <div className='pb-8'>
          <p className='text-4xl inline font-bold border-b-4 border-pink-600 text-gray-300'>
            Contact
          </p>
          <p className='text-gray-300 py-4'>
            &#047;&#047; Submit the form below or shoot me an email -
            wajahatabbas27@gmail.com
          </p>
        </div>
        <input
          type='text'
          placeholder='Name'
          name='name'
          className='bg-[#ccd6f6] p-2 focus:outline-0'
        />
        <input
          type='email'
          placeholder='Email'
          name='email'
          className='my-4 p-2 bg-[#ccd6f6] focus:outline-0'
        />
        <textarea
          name='message'
          placeholder='Message'
          rows={10}
          className='bg-[#ccd6f6] p-2 focus:outline-0'
        />
        <button className='text-white border-2 my-8 px-4 py-3 mx-auto flex items-center hover:bg-pink-600 hover:border-pink-600 '>
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
