import React, { useRef, useEffect, useState, useCallback } from 'react';
import logoImage from "../Header/developer.png";

const Header = () => {
  const headerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('');
  const [isSticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Sticky header functionality
  const stickyHeaderFunc = useCallback(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setSticky(scrollY > 80);

      // Sections you want to track
      const sections = ['home', 'about', 'services', 'Project', 'portfolio', 'skills', 'contact'];
      const scrollPosition = scrollY + 100;

      // Iterate over each section to determine if it should be active
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.clientHeight) > scrollPosition) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect hook to set up the scroll listener
  useEffect(() => {
    const cleanup = stickyHeaderFunc();
    return cleanup;
  }, [stickyHeaderFunc]);

  // Handle smooth scroll on link click
  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.closest('a').getAttribute('href');
    const targetElement = document.querySelector(targetAttr);

    // Debugging: log the target element and scroll position
    console.log('Scrolling to:', targetElement);

    if (targetElement) {
      const headerHeight = headerRef.current.offsetHeight;
      console.log('Header height:', headerHeight);

      window.scrollTo({
        top: targetElement.offsetTop - headerHeight,
        left: 0,
        behavior: 'smooth',
      });
    }
    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isSticky ? 'bg-gray-800 shadow-lg' : 'bg-gray-900'}`}
    >
      <div className="flex items-center justify-between px-6 py-4 md:py-3">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logoImage} alt="Logo" className="w-12 h-12 rounded-full object-cover" />
          <div>
            <h2 className="text-white text-xl font-bold uppercase">Akshay Balte</h2>
            <span className="text-gray-300 text-sm">Innovative Full Stack Developer </span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ${
            menuOpen ? 'block' : 'hidden md:block'
          }`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-6 items-center py-4 md:py-0">
            {[{
              href: "#home", label: "Home",
            }, {
              href: "#services", label: "Education",
            }, {
              href: "#skills", label: "Skills",
            }, {
              href: "#Project", label: "Projects",
            }, {
              href: "#portfolio", label: "Certifications",
            }, {
              href: "#contact", label: "Contact",
            }].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={handleClick}
                  className={`text-white px-3 py-2 rounded-md text-sm uppercase font-medium transition-all duration-300 ${
                    activeSection === href.substring(1) ? 'bg-blue-800 text-white' : 'hover:bg-blue-800 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
