import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import main_logo from "../../assets/favicon.png";

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
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // 스크롤 검출
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    if (isHome) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // 🔥 네비 배경색 조건
  const navbarBg = isHome
    ? isScrolled
      ? "bg-black text-white"
      : "bg-transparent text-white"
    : "bg-white text-black";

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 shadow-lg z-50 transition-colors duration-300 ${navbarBg}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl lg:text-2xl lg:ml-12 lg:mr-8">
          <a href="/" className="flex items-center">
            <img src={main_logo} alt="성하R&F 로고" className="h-8 lg:h-10" />
            <span className="text-xl tracking-wide">
              SUNGHA R&F
            </span>
          </a>
        </h1>

        {/* 데스크탑 메뉴 */}
        <div className="hidden lg:flex justify-end">
          <ul className="flex gap-8 text-lg">
            {menuItems.map((item) => (
              <MenuItem key={item.path} {...item} />
            ))}
          </ul>
        </div>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="메뉴"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* 모바일 메뉴 */}
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
