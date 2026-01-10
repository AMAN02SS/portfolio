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

const Section4 = () => {
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
                <div className='text-center text-white py-10 md:py-20 my-5 mx-3 md:my-10 float-parent' ref={ref}>
                    <div className={`${BricolageGrotesque.className} text-3xl md:text-5xl md:leading-15 my-10`}>
                        <p className={`font-extrabold transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-0`}><span>I don’t just write code. I build experiences.</span></p>
                        <p className={`transition-all duration-1000 ease-out will-change-[opacity,filter,transform] font-extralight ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-500`}><span>From the way someone scrolls,</span></p>
                        <p className={`transition-all duration-1000 ease-out will-change-[opacity,filter,transform] font-extralight ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-1000`}><span>to the moment they smile when something finally works.</span></p>
                        <p className={`font-extrabold transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-1500`}><span>Every click leaves a clue.</span></p>
                        <p className={`font-extrabold transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-2000`}><span>Every bug teaches a lesson.</span></p>
                        <p className={`font-extrabold transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-2500`}><span>That’s where real engineering</span></p>
                    </div>
                    <h1 className={`${LavishlyYours.className} float-child text-[#45ff8f] text-6xl md:text-[100px] transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-x-4"} delay-4000`}>Begins</h1>
                </div>
        </div>
    )
}

export default Section4
