import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skill" },
  { id: "experience", label: "Experience" },
  {id:"work", label:"Work"},
  { id: "education", label: "Education" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSelection, setActiveSelection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener to update isScrolled state
  useEffect(() => {
    const handlescroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  // Function to handle the selection of a menu item
  const handleItemClick = (sectionId) => {
    setActiveSelection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if(section){
      section.scrollIntoView({behavior:"smooth"});
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 px-5 md:px-10 lg:px-20 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-5 flex justify-between items-center">
        {/* Logo and Brand Name */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Puzan</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Shrestha</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Menu Items */}
        <ul className=" hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`hover:text-[#8245ec] transition-colors duration-300 ${
                activeSelection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button
                className="cursor-pointer"
                onClick={() => handleItemClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social media Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/puzanXtha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ramesh-shrestha-74b523399/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec] transition-colors duration-300"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {isOpen ? (
            <FiX
              size={24}
              className="text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              size={24}
              className="text-[#8245ec] cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414]/50 backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`hover:text-[#8245ec] transition-colors duration-300 ${
                    activeSelection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button onClick={() => handleItemClick(item.id)}>
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex space-x-4">
                <a
                  href="https://github.com/puzanXtha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ramesh-shrestha-74b523399/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
