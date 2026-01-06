"use client"
import React from 'react'
import { Lavishly_Yours, Bricolage_Grotesque } from "next/font/google";
import { useState, useEffect, useRef } from 'react';

const LavishlyYours = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});
const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  
});

const Section2 = () => {
const ref = useRef(null)
const [visible, setVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry])=>{
        if(entry.isIntersecting){
            setVisible(true);
            observer.disconnect();
        }
    },
    {threshold: 0.4}
  );

  if(ref.current) observer.observe(ref.current);
  return () => observer.disconnect();
}, []);

    return (
        <div>
                <div className='text-center text-white py-15 my-10' ref={ref}>
                    <div className={`${BricolageGrotesque.className} text-5xl leading-15`}>
                        <p className={`font-extrabold transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-0`}><span>Full-stack</span> <span>by</span> <span>skill,</span></p>
                        <p className={`transition-all duration-1000 ease-out will-change-[opacity,filter,transform] font-extralight ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-500`}><span>problem-solver</span> <span>by</span> <span>nature.</span></p>
                        <p className={`transition-all duration-1000 ease-out will-change-[opacity,filter,transform] font-extralight ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-1000`}><span>I</span> <span>build</span> <span>software</span> <span>that</span> <span>scales,</span></p>
                        <p className={`font-extrabold transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-1500`}><span>and</span> <span>makes</span> <span>sense.</span></p>
                    </div>
                    <h1 className={`${LavishlyYours.className} text-[#45ff8f] text-6xl transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-3000`}>in the everyday</h1>
                </div>
        </div>
    )
}

export default Section2
