import React from 'react';
import { useMediaQuery } from 'react-responsive';
import heroImage from "../../assets/images/akshay.png";

const UserInterface = () => {
  // Media Queries to enhance responsiveness for different devices
  const isMobile = useMediaQuery({ query: "(max-width: 479px)" });
  const isTablet = useMediaQuery({ query: "(min-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(min-width: 1024px)" });

  // Button and Link Components for Consistency and Reusability
  const CallToActionButton = ({ label, link, iconClass }) => (
    <a href={link} aria-label={label}>
      <button className="bg-yellow-500 text-white font-bold flex items-center gap-3 px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transform hover:scale-105 transition-all">
        {iconClass && <i className={iconClass} aria-hidden="true"></i>}
        {label}
      </button>
    </a>
  );

  const ContactLink = ({ label, link, iconClass }) => (
    <div className="text-yellow-300">
      <a href={link} className="font-semibold hover:text-yellow-400 flex items-center gap-2" aria-label={label}>
        <i className={iconClass} aria-hidden="true"></i> {label}
      </a>
    </div>
  );

  return (
    <section className="bg-gradient-to-r from-blue-500 via-purple-700 to-pink-500 text-white py-20 px-5" id="about" style={{ minHeight: '100vh' }}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start">
          <h5 className="text-indigo-200 font-semibold text-lg mb-3">Welcome to My Website</h5>
          <h1 className="font-extrabold text-4xl md:text-5xl leading-tight mb-6 text-white">
            I’m Akshay Balte <br />
             <span className="text-yellow-400 text-2xl md:text-3xl">Passionate  Full Stack  Developer</span>
          </h1>

          <p className="text-gray-100 text-lg md:text-xl leading-relaxed mb-6 px-4 sm:px-0">
          " I’m passionate about creating streamlined, full-stack web applications that offer both functionality and an outstanding user experience. With expertise in both frontend and backend development, I’m eager to help bring your project to life. Let’s collaborate and make your next project a success!"          </p>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <CallToActionButton label="Let’s Connect" link="#contact" iconClass="ri-mail-fill" />
            <a href="#skills" className="text-yellow-300 text-lg font-semibold border-b-2 border-yellow-300 hover:text-yellow-400">
              Explore My Skills
            </a>
          </div>

          <div className="space-y-4">
            <span className="text-yellow-300 font-semibold">Get in Touch:</span>
            <ContactLink label="Email Me" link="mailto:balteakshay1998@gmail.com" iconClass="ri-mail-line" />
            <ContactLink label="LinkedIn Profile" link="https://www.linkedin.com/in/akshay-balte-developer/" iconClass="ri-linkedin-box-fill" />
            <ContactLink label="Call Me" link="tel:7447686701" iconClass="ri-phone-line" />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={heroImage}
            alt="Akshay Balte"
            className="w-3/4 sm:w-2/3 md:w-1/2 rounded-full shadow-2xl border-4 border-yellow-300 transition-all transform hover:scale-105 hover:rotate-6"
            style={{
              maxWidth: isMobile ? '200px' : '250px',
              height: isMobile ? '300px' : '350px',
              objectFit: 'cover',
              borderRadius: '50%',
              boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',  // Added shadow for a depth effect
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default UserInterface;
