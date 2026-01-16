"use client"
import React from 'react'
import { Lavishly_Yours, Bricolage_Grotesque } from "next/font/google";
import { useState, useEffect, useRef } from 'react';
import Carousel from './features/carousel';
import Link from 'next/link';


const LavishlyYours = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});
const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

const Section3 = () => {
  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible4, setVisible4] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(

      ([entry]) => {
        console.log("Intersecting:", entry.isIntersecting);
        if (entry.isIntersecting) {
          setVisible1(true);
          observer1.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    const observer2 = new IntersectionObserver(

      ([entry]) => {
        console.log("Intersecting:", entry.isIntersecting);
        if (entry.isIntersecting) {
          setVisible2(true);
          observer2.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    const observer3 = new IntersectionObserver(

      ([entry]) => {
        console.log("Intersecting:", entry.isIntersecting);
        if (entry.isIntersecting) {
          setVisible3(true);
          observer3.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    const observer4 = new IntersectionObserver(

      ([entry]) => {
        console.log("Intersecting:", entry.isIntersecting);
        if (entry.isIntersecting) {
          setVisible4(true);

          observer4.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (ref1.current) {
      observer1.observe(ref1.current);
    }
    if (ref2.current) {
      observer2.observe(ref2.current);
    }
    if (ref3.current) {
      observer3.observe(ref3.current);
    }
    if (ref4.current) {
      observer4.observe(ref4.current);
    }
    return () => { observer1.disconnect(), observer2.disconnect(), observer3.disconnect(), observer4.disconnect(); }

  }, []);


  return (
    <div>
      <div>
        <h1 id={"work"} className={`${BricolageGrotesque.className} font-bold text-5xl text-white text-center py-15`}>Work</h1>
        <div className='flex flex-col justify-center items-center gap-20'>

          <div ref={ref1} className={`bg-[#282828] p-5 m-3 md:p-14 rounded-3xl hover:cursor-pointer float-parent hover:scale-95 hover:bg-[#1c1c1c] transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible1 ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-y-4 duration-1000"} delay-0 `}>
            <div className='flex flex-col md:flex-row gap-4 md:gap-20'>
              <div className='flex flex-col gap-3 md:gap-10'>
                <div className='flex flex-col gap-5 md:gap-10'>
                  <div>
                    <h1 className={`${BricolageGrotesque.className} text-white text-3xl md:text-5xl w-fit md:w-200  md:leading-14`}>
                      Strengthen <span className='text-green-400 font-semibold'>BitGlim.com</span> to become the <span className='font-semibold'>one stop solution</span> for the <span className='font-semibold'>digital art streaming</span> platform.
                    </h1>
                  </div>
                  <div className='flex w-full gap-2'>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Role</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-xl  md:text-2xl font-semibold`}>
                        <p>Frontend Engineer,</p>
                        <p>API Developer,</p>
                        <p>System Designer,</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Timeline</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-xl md:text-2xl font-semibold`}>
                        <p>November'24-May'25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className={`${BricolageGrotesque.className} text-green-400 font-bold text-xl md:text-2xl flex gap-2 hover:cursor-pointer`}>
                    <Link className='flex' href={"https://www.bitglim.com/"}><h1>View Journey</h1><img className='' src="/svg/arrow.svg" alt="" /></Link>
                  </div>
                </div>
              </div>
              <div className='flex justify-center'>
                <img className='h-50 md:h-100 object-cover drop-shadow-2xl  float-child' src="/img/projectScreenWB.png" alt="" />
              </div>
            </div>
          </div>

          <div ref={ref2} className={`bg-[#282828] p-5 m-3 md:p-14 rounded-3xl hover:cursor-pointer float-parent hover:scale-95 hover:bg-[#1c1c1c] transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible2 ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-y-4"} delay-0`}>
            <div className='flex flex-col md:flex-row gap-2 md:gap-5 items-center '>
              <div className='w-50 h-50  md:w-80 md:h-80 flex justify-center items-center'>
                <img className='w-full h-full md:w-100 md:h-100 object-contain drop-shadow-2xl float-child' src="/img/project1.png" alt="" />
              </div>
              <div className='flex flex-col gap-5 md:gap-10'>
                <div className='flex flex-col gap-5 md:gap-10'>
                  <div>
                    <h1 className={`${BricolageGrotesque.className} text-white text-3xl md:text-5xl w-fit md:w-200 md:leading-14`}>
                      Built by Curiosity!
                    </h1>
                    <h1 className={`${BricolageGrotesque.className} text-white text-3xl md:text-5xl font-semibold w-fit md:w-200 md:leading-14`}><span className='text-green-400'>Linktree</span> clone : The Art of Continuous Experimentation</h1>.
                    <h1 className={`${BricolageGrotesque.className} text-white text-lg md:text-xl font-semibold w-fit md:w-200`}>Turning interaction data into better design decisions.</h1>
                  </div>
                  <div className='flex w-full gap-2'>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Role</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-xl md:text-2xl font-semibold`}>
                        <p>Frontend Engineer,</p>
                        <p>API Developer,</p>
                        <p>System Designer,</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Timeline</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-xl md:text-2xl font-semibold`}>
                        <p>November'25-December'25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className={`${BricolageGrotesque.className} text-green-400 font-bold text-xl md:text-2xl flex gap-2 hover:cursor-pointer`}>
                    <Link className='flex' href={"https://github.com/AMAN02SS/linktree-clone"}><h1>View Project</h1><img className='' src="/svg/arrow.svg" alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={ref3} className={`bg-[#282828] p-5 m-3 md:p-14 rounded-3xl hover:cursor-pointer float-parent hover:scale-95 hover:bg-[#1c1c1c] transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible3 ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-y-4 duration-1000"} delay-0 `}>
            <div className='flex flex-col md:flex-row gap-4 md:gap-5'>
              <div className='flex flex-col gap-3 md:gap-10'>
                <div className='flex flex-col gap-5 md:gap-10'>
                  <div>
                    <h1 className={`${BricolageGrotesque.className} text-white text-3xl md:text-5xl w-fit md:w-200 md:leading-14`}>
                      <span className='text-green-400 font-semibold'>Helping Hands Foundation</span> :
                    </h1>
                    <h1 className={`${BricolageGrotesque.className} text-white text-3xl md:text-5xl w-fit md:w-200 md:leading-14`}>Serving humanity with care</h1>.
                  </div>
                  <div className='flex w-full gap-2'>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Role</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-xl  md:text-2xl font-semibold`}>
                        <p>Frontend Engineer,</p>
                        <p>API Developer,</p>
                        <p>System Designer,</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Timeline</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-xl md:text-2xl font-semibold`}>
                        <p>November'24-May'25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className={`${BricolageGrotesque.className} text-green-400 font-bold text-xl md:text-2xl flex gap-2 hover:cursor-pointer`}>
                    <Link className='flex' href={"https://github.com/AMAN02SS/charitable-foundation"}><h1>View Journey</h1><img className='' src="/svg/arrow.svg" alt="" /></Link>
                  </div>
                </div>
              </div>
              <div className='flex justify-center items-center pt-4 relative w-80 float-child'>
                <img className='w-52 md:w-80 h-50 md:h-70 object-cover drop-shadow-2xl ' src="/img/moniterWB.png" alt="" />
                <Carousel />
              </div>
            </div>
          </div>

          <div ref={ref4} className={`bg-[#282828] px-5 py-10 m-3 md:p-14 rounded-3xl hover:cursor-pointer float-parent hover:scale-95 hover:bg-[#1c1c1c] transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visible4 ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-y-4"} delay-0`}>
            <div className='flex md:flex-row flex-col items-center gap-2 md:gap-10'>
              <div className='w-50 md:w-80 h-50 md:h-80 flex justify-center items-center'>
                <img className='rounded-full w-full md:w-100 h-full md:h-100 object-cover drop-shadow-2xl float-child' src="/img/spotify.png" alt="" />
              </div>
              <div className='flex flex-col gap-5 md:gap-10'>
                <div className='flex flex-col gap-5 md:gap-10'>
                  <div>
                    <h1 className={`${BricolageGrotesque.className} text-white text-3xl md:text-5xl w-fit md:w-200 md:leading-14`}>
                    </h1>
                    <h1 className={`${BricolageGrotesque.className} text-white text-3xl md:text-5xl font-semibold w-fit md:w-200 md:leading-14`}><span className='text-green-400'>Spotify</span> clone : Where Needs Inspire Creation</h1>.
                  </div>
                  <div className='flex w-full gap-2'>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Role</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-xl md:text-2xl font-semibold`}>
                        <p>Frontend Engineer,</p>
                        <p>API Developer,</p>
                        <p>System Designer,</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Timeline</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-xl md:text-2xl font-semibold`}>
                        <p>August'25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className={`${BricolageGrotesque.className} text-green-400 font-bold text-xl md:text-2xl flex gap-2 hover:cursor-pointer`}>
                  <Link className='flex' href={"https://github.com/AMAN02SS/Spotify_Music_Player"}><h1>View Project</h1><img className='' src="/svg/arrow.svg" alt="" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href={"/components/projects"} ><div className='bg-[#282828] w-fit mx-auto py-2 px-4 rounded-2xl m-10 flex items-center text-white gap-1 border-2 border-gray-500 transition-all duration-700 ease-in-out hover:border-white hover:scale-110'>All projects <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div></Link>

      </div>
    </div>
  )
}

export default Section3
