"use client"
import React from 'react'
import { Lavishly_Yours, Bricolage_Grotesque } from "next/font/google";
import { useState, useEffect, useRef } from 'react';
import Carousel from './features/carousel';

const LavishlyYours = Lavishly_Yours({
    subsets: ["latin"],
    weight: "400",
});
const BricolageGrotesque = Bricolage_Grotesque({
    subsets: ["latin"],
});

const Section5 = () => {
    const ref = useRef(null)
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log("Intersecting:", entry.isIntersecting);
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.25 }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <div className='pb-10'>
                <h1 id={"about"} className={`${BricolageGrotesque.className} font-bold text-5xl text-white text-center pb-15`}>About me</h1>
                <div className='flex flex-col justify-center items-center mx-3'>
                    <div ref={ref} className={`flex flex-col gap-5 leading-14 md:gap-10 text-3xl md:text-[40px] text-[#a9a9a9] text-center w-fit md:w-300 transition-all duration-2000 ease-out will-change-[opacity,filter,transform] ${visible ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-y-4 duration-1000"} delay-0`}>
                        <h1>
                            Hi, I’m Aman Singh Sikarwar, <span className={`${BricolageGrotesque.className} font-bold text-[white]`}>born and based in Gwalior, Madhya Pradesh</span> — "a city that keeps me close to history, culture, and quiet everyday inspiration".
                        </h1>
                        <h1>
                            When I’m not building things on the web, you’ll usually find me <span className={`${BricolageGrotesque.className} font-bold text-[white]`}>exploring new places</span> locally, learning something new, or simply enjoying moments that slow life down a bit. I value <span className={`${BricolageGrotesque.className} font-bold text-[white]`}>consistency, curiosity, and growth</span> — both in <span className={`${BricolageGrotesque.className} font-bold text-[white]`}>code and in life.</span>
                        </h1>
                        <h1>
                            I believe progress comes from <span className={`${BricolageGrotesque.className} font-bold text-[white]`}>staying observant</span>, <span className={`${BricolageGrotesque.className} font-bold text-[white]`}>staying humble</span>, and always <span className={`${BricolageGrotesque.className} font-bold text-[white]`}>staying open to learning</span>.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section5
