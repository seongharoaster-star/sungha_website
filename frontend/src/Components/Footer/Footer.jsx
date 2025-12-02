import React from "react";
import { Link } from "react-router-dom";
import { FaBlogger, FaShoppingBasket } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { GrInstagram } from "react-icons/gr";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",GrInstagram
  });
};

const Footer = () => {
  return (
    <footer onClick={scrollToTop} className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">회사 소개</h3>
            <p className="text-gray-400">로스타 불판 테이블 제작 전문</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">빠른 링크</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  회사소개
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  시공매장
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  제작안내
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  견적문의
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className="hover:text-white transition-colors"
                >
                  상담하기
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">회사 정보</h3>
            <ul className="space-y-2 text-gray-400">
              <li>대표이사: 김학원</li>
              <li>사업자번호: 834-81-03302</li>
              <li>주소: 인천시 서구 보듬3로 11</li>
              <li>이메일: seongha1002@naver.com</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">소셜미디어</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaBlogger />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <IoLogoYoutube />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaShoppingBasket />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
              <GrInstagram />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 (주)성하R&F. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
