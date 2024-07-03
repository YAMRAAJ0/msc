import React, { useState} from 'react';
import Img1 from './image/logo.png';
import { FaEnvelope, FaPhone, FaBlog, FaNewspaper } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = [
    { text: 'Home', href: '/' },
    { text: 'Courses', href: '/courses' },
    { text: 'Results', href: '/results' },
    { text: 'Blog', href: '/blog' },
    { text: 'About Us', href: '/about' }
  ];

  return (
    <>
      <div className="hidden lg:flex justify-between items-center bg-gradient-to-r from-[#3f3dcc] to-[#050e8b] text-white p-1">
        <div className="flex items-center space-x-4 pl-8">
          <a href="#" className="flex items-center">
            <FaEnvelope className="mr-2" />
            @gmail.com
          </a>
          <span>|</span>
          <a href="#" className="flex items-center">
            <FaPhone className="mr-2" />
            +91 12345678
          </a>
        </div>
        <div className="flex items-center space-x-4 pr-8">
          <a href="#" className="flex items-center">
            <FaBlog className="mr-2" />
            Blog
          </a>
          <span>|</span>
          <a href="#" className="flex items-center">
            <FaNewspaper className="mr-2" />
            News & Events
          </a>
        </div>
      </div>

      <header className=" w-full sticky top-0 shadow-sm bg-white">
      <div className="w-full flex justify-between items-center py-2 px-4">
        <div className="flex items-center">
          <a href="index.html">
            <img className="h-10 transition-transform transform hover:scale-110" src={Img1} alt="Icon" />
          </a>
        </div>
        <div className="lg:hidden">
          <button className="btn" type="button" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <div className="hidden lg:flex space-x">
          {links.map((link, index) => (
                       <Link
                       key={index}
                       to={link.href}
                     class="relative inline-flex items-center justify-center leading-normal no-underline pb-1 text-black font-sans font-bold text-sm uppercase hover:text-blue-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 transition group"
                   >  {link.text}
             <span
    class="absolute bottom-0 left-0 w-full h-0.5 bg-blue-900 origin-bottom-right transform transition duration-200 ease-out scale-x-0 group-hover:scale-x-100 group-hover:origin-bottom-left"
  ></span>
</Link>
          ))}
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white w-full">
          <nav className="flex flex-col p-4 space-y-4">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="flex text-gray-800 hover:text-blue-500 cursor-pointer transition-colors duration-300"
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
    </>
  );
};

export default Navbar;
