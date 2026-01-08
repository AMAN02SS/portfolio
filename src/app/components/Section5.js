import React from 'react'
import { Lavishly_Yours, Bricolage_Grotesque } from "next/font/google";
// import { useState, useEffect, useRef } from 'react';
import Carousel from './features/carousel';

const LavishlyYours = Lavishly_Yours({
    subsets: ["latin"],
    weight: "400",
});
const BricolageGrotesque = Bricolage_Grotesque({
    subsets: ["latin"],
});

const Section5 = () => {
    return (
        <div>
            <div className='pb-10'>
                <h1 className={`${BricolageGrotesque.className} font-bold text-5xl text-white text-center pb-15`}>About me</h1>
                <div className='flex flex-col justify-center items-center gap-20'>
                    <div className='flex flex-col gap-10 text-[40px] text-[#a9a9a9] text-center w-300'>
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
