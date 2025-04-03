import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-[#1c1f2b] to-[#252a38] py-12'>
      {/* Top section with quote and call to action */}
      <div className="container mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between space-y-10 sm:space-y-0 sm:space-x-10">
          
          {/* Left: Quote and Button */}
          <div className="text-center sm:text-left w-full sm:w-1/2">
            <h4 className='text-3xl sm:text-4xl lg:text-5xl text-pink-300 font-bold italic tracking-wide leading-snug mb-6'>
              ॥ अंतः अस्ति प्रारंभ ॥
            </h4>
            <a href="#contact">
              <button className='bg-gradient-to-r from-pink-500 to-orange-500 text-white font-semibold flex items-center justify-center gap-2 hover:scale-105 transform transition-all duration-300 py-3 px-8 rounded-lg shadow-lg'>
                <i className="ri-mail-fill"></i> Let's Talk
              </button>
            </a>
          </div>

          {/* Right: Social Links */}
          <div className='text-center sm:text-right w-full sm:w-1/2'>
            <div className='flex justify-center sm:justify-end gap-5 mt-6'>
              <span className='text-gray-300 text-sm font-medium'>
                Follow Me:
              </span>
              {/* LinkedIn Icon */}
              <a href="https://www.linkedin.com/in/akshay-balte-developer/" className='w-14 h-14 text-2xl bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full flex items-center justify-center transition-all duration-300'>
                <i className="ri-linkedin-fill"></i>
              </a>
              {/* GitHub Icon */}
              <a href="https://github.com/Akshaybalte1998" className='w-14 h-14 text-2xl bg-gray-700 hover:bg-gray-900 text-white p-3 rounded-full flex items-center justify-center transition-all duration-300'>
                <i className="ri-github-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Links as Blocks with Background Colors */}
        <div className='mt-12'>
          <ul className='flex flex-col sm:flex-row justify-center gap-4 sm:gap-8'>
            <li>   
              <a href="#about" className='block bg-pink-500 text-white py-2 px-4 rounded-lg text-center text-sm sm:text-base hover:bg-pink-600 transition-all duration-300'>
                Home Page
              </a>
            </li>
            <li>
              <a href="#services" className='block bg-yellow-500 text-white py-2 px-4 rounded-lg text-center text-sm sm:text-base hover:bg-yellow-600 transition-all duration-300'>
                Educational Journey
              </a>
            </li>
            
            <li>
              <a href="#skills" className='block bg-green-500 text-white py-2 px-4 rounded-lg text-center text-sm sm:text-base hover:bg-green-600 transition-all duration-300'>
                Skills & Expertise
              </a>
            </li>
            <li>
              <a href="#Project" className='block bg-blue-500 text-white py-2 px-4 rounded-lg text-center text-sm sm:text-base hover:bg-blue-600 transition-all duration-300'>
                Project Showcase
              </a>
            </li>
            <li>
              <a href="#portfolio" className='block bg-purple-500 text-white py-2 px-4 rounded-lg text-center text-sm sm:text-base hover:bg-purple-600 transition-all duration-300'>
                Certification
              </a>
            </li>
            <li>
              <a href="#contact" className='block bg-indigo-500 text-white py-2 px-4 rounded-lg text-center text-sm sm:text-base hover:bg-indigo-600 transition-all duration-300'>
                Let's Talk
              </a>
            </li>
          </ul>
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm sm:text-base text-center mt-6">
            © 2024 Akshay Balte. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
