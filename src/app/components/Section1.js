"use client"
import { Bebas_Neue } from "next/font/google";
import Navbar from "./Navbar";
import { useEffect, useState, useRef } from "react";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
});



const Section1 = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-screen h-[70vh] md:h-screen ">
      <Navbar />
      <div className="flex flex-col justify-center items-center relative">
        <div className={`${bebasNeue.className} text-[6.75rem] md:text-[20.75rem] text-center text-[#3d3d3d] absolute z-1 top-1 leading-50 md:leading-90 transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-100`}>
          <span>HI!</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>I'M</span>
        </div>
        <div className={`w-50 md:h-10 md:w-90 absolute z-2 top-20 md:top:150 transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-200`}>
          <img className="rounded-full h-70 md:h-140 object-cover" src="/img/section1Pic3.jpg" alt="" />
        </div>
        <div className={`${bebasNeue.className} text-[6.75rem] md:text-[20.75rem] text-center text-[#ffffff] absolute z-3 top-35 md:top-95 leading-100 transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-300`}>
          <span>AMAN SINGH</span>
        </div>
        <h1 className={`absolute top-100 md:top-180 md:text-3xl text-[#FFFFFF66] md:text-[#FFFFFF] font-medium z-10 w-50 text-center md:w-auto transition-all duration-700 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} delay-400`}>A Full Stack Developer, who loves to travel!</h1>
      </div>
    </div>

  );
};

export default Section1;
