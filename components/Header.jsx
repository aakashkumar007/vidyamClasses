import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to handle click on mobile menu toggle
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="text-lg font-bold">Vidyam</div>
        <nav className="hidden md:flex flex-grow justify-center items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/programs">Programs</NavLink>
          <NavLink href="#contact">Contact Us / Demo Class</NavLink>
        </nav>
        <div className="md:hidden">
          <button
            id="mobile-menu-button"
            className="text-gray-600 focus:outline-none"
            onClick={handleMobileMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <nav id="mobile-menu" className={`md:hidden ${isMobileMenuOpen ? '' : 'hidden'}`}>
          <NavLinkMobile to="/" onClick={handleMobileMenuToggle}>Home</NavLinkMobile>
          <NavLinkMobile to="/programs" onClick={handleMobileMenuToggle}>Programs</NavLinkMobile>
          <NavLinkMobile href="#contact" onClick={handleMobileMenuToggle}>Contact Us / Demo Class</NavLinkMobile>
        </nav>
      </div>
    </header>
  );
};

// NavLink component for desktop navigation
const NavLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeClassName = isActive ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900';
  return (
    <Link to={to} className={`transition-colors duration-300 ${activeClassName} px-4 py-2`}>
      {children}
    </Link>
  );
};

// NavLinkMobile component for mobile navigation
const NavLinkMobile = ({ to, href, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const activeClassName = isActive ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-gray-900';
  return (
    <Link to={to} href={href} className={`block px-4 py-2 ${activeClassName}`} onClick={onClick}>
      {children}
    </Link>
  );
};

export default Header;
