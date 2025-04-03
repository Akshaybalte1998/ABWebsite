import React from 'react';
import { useMediaQuery } from 'react-responsive';
import heroImage from "../../assets/images/akshay.png";

const UserInterface = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 479px)" });

  return (
    <section 
      id="about"
      className="bg-gradient-to-r from-blue-500 via-teal-400 to-indigo-600 text-white py-16 px-6 min-h-screen"
      style={{ backgroundSize: 'cover' }}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h5 className="text-indigo-100 font-semibold text-lg mb-2">Welcome to My World!</h5>
          <h1 className="font-extrabold text-3xl md:text-4xl leading-tight mb-6 text-white">
            I'm Akshay Balte <br />
            <span className="text-yellow-400 text-2xl md:text-3xl">Passionate Software Developer</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-6 mb-8 w-full">
            <a href="#contact">
              <button 
                className="bg-yellow-500 text-white font-semibold flex items-center gap-2 px-6 py-2 rounded-xl shadow-2xl transition-transform duration-300 hover:bg-yellow-400 transform hover:scale-105"
                aria-label="Hire me"
              >
                <i className="ri-mail-fill" aria-hidden="true"></i> Let's Collaborate
              </button>
            </a>
            <a 
              href="#skills" 
              className="text-yellow-300 text-lg font-semibold border-b-2 border-yellow-300 hover:text-yellow-400"
              aria-label="View My Strengths"
            >
              Discover My Strengths
            </a>
          </div>

          <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-8 px-2 sm:px-0">
            <i className="ri-command-fill mr-2" aria-hidden="true"></i>
            As a Full Stack Developer, I craft innovative and user-centered applications. With expertise in both frontend and backend, I deliver solutions that combine creativity with functionality. I am driven by collaboration, always seeking new opportunities to push boundaries and create value. Let’s work together to bring ideas to life!
          </p>

          <div className="text-gray-100 text-base md:text-lg">
            <span className="text-yellow-300 font-semibold">Contact Me:</span>
            <div>
              <a href="mailto:balteakshay1998@gmail.com" className="text-yellow-300 font-semibold hover:text-yellow-400">
                <i className="ri-mail-line" aria-hidden="true"></i> balteakshay1998@gmail.com
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/akshay-balte-developer/" className="text-yellow-300 font-semibold hover:text-yellow-400">
                <i className="ri-linkedin-box-fill" aria-hidden="true"></i> LinkedIn Profile
              </a>
            </div>
            <div>
              <a href="tel:7447686701" className="text-yellow-300 font-semibold hover:text-yellow-400">
                <i className="ri-phone-line" aria-hidden="true"></i> 7447686701
              </a>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img 
            src={heroImage} 
            alt="Portrait of Akshay Balte" 
            className="w-3/4 sm:w-2/3 md:w-1/2 rounded-full shadow-2xl border-4 border-yellow-300 transition-transform duration-300 transform hover:scale-105 hover:rotate-2" 
            style={{ 
              maxWidth: isMobile ? '200px' : '250px', 
              height: isMobile ? '300px' : '350px', 
              objectFit: 'cover', 
              borderRadius: '50%' 
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default UserInterface;
