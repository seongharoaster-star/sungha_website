import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-black py-20 lg:py-40">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-100 mb-4">
            CONTACT
          </h2>
          <p className="text-gray-200 text-lg">
            궁금하신 점이 있으신가요? 언제든 문의해주세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              title: "전화 상담",
              info: "032-562-2689",
              subInfo: "평일 09:00 - 18:00",
            },
            {
              title: "방문 상담",
              info: "인천광역시 서구 보듬3로 11",
              subInfo: "(예약 필수)",
            },
            {
              title: "카톡 상담",
              info: "카톡플친: @성하로스타",
              subInfo: "",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-darkbg p-6 rounded-xl shadow hover:shadow-md transition-shadow duration-300 text-center"
            >
              <h3 className="text-orange text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-200">{item.info}</p>
              <p className="text-gray-300 text-sm">{item.subInfo}</p>
            </div>
          ))}
        </div>

        <div className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.2084327161947!2d126.6114536765005!3d37.597253272030756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c8074bc98bc5f%3A0x4f08a4bbac2d0e9!2z7J247LKc6rSR7Jet7IucIOyEnOq1rCDrs7Trk6wz66GcIDEx!5e0!3m2!1sko!2skr!4v1740374681249!5m2!1sko!2skr"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[400px] md:h-[600px] lg:h-[600px]"
            ></iframe>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="inline-block px-10 py-3 text-lg font-medium text-white bg-orange rounded-lg shadow hover:bg-orange-700 transition-all duration-300 ease-in-out hover:shadow-lg"
          >
            문의하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
