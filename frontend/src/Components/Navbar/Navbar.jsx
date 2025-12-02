import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import main_logo from "../../assets/main_logo.png";


const menuItems = [
  { path: "/about", label: "회사소개" },
  { path: "/portpolio", label: "시공매장" },
  { path: "/products", label: "제작안내" },
  { path: "/request", label: "견적문의" },
  { path: "/contact", label: "상담하기" },
];

const MenuItem = ({ path, label, onClick }) => (
  <li>
    <Link
      to={path}
      className="hover:text-blue-600 transition duration-300"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (onClick) onClick();
      }}
    >
      {label}
    </Link>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState("ko");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full text-white p-4 shadow-lg z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black" : "bg-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center bg-transparent">
        <h1 className="text-xl lg:text-2xl font-bold lg:ml-12 lg:mr-8">
          <a href="/">
            <img src={main_logo} alt="성하R&F 로고" className="h-8 lg:h-10" />
          </a>
        </h1>
        <div className="hidden lg:flex justify-end">
          <ul className="flex gap-8 text-lg">
            {menuItems.map((item) => (
              <MenuItem key={item.path} {...item} />
            ))}
          </ul>
        </div>

        {/* 
        <select
          vlaue={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="hidden lg:block px-3 ml-8 border rounded-md bg-white hover:border-blue-500 transition duration-300"
        >
          <option value="ko">한국어</option>
          <option value="en">영어</option>
        </select> */}

        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="메뉴"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white text-black transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4">
          <button
            className="text-2xl mb-8 float-right"
            onClick={toggleMenu}
            aria-label="닫기"
          >
            <HiX />
          </button>
          <ul className="clear-both space-y-4 pt-8 text-lg">
            {menuItems.map((item) => (
              <MenuItem
                key={item.path}
                {...item}
                onClick={() => {
                  setIsOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            ))}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
