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

const Section3 = () => {
  return (
    <div>
      <div>
        <h1 className={`${BricolageGrotesque.className} font-bold text-5xl text-white text-center py-15`}>Work</h1>
        <div className='flex flex-col justify-center items-center gap-20'>
          <div className='bg-[#282828] p-14 rounded-3xl hover:cursor-pointer float-parent hover:transition-all duration-800 hover:scale-95 hover:bg-[#1c1c1c]'>
            <div className='flex gap-20'>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-10'>
                  <div>
                    <h1 className={`${BricolageGrotesque.className} text-white text-5xl w-200 leading-14`}>
                      Strengthen <span className='text-green-400 font-semibold'>BitGlim.com</span> to become the <span className='font-semibold'>one stop solution</span> for the <span className='font-semibold'>digital art streaming</span> platform.
                    </h1>
                  </div>
                  <div className='flex w-full'>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Role</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-2xl font-semibold`}>
                        <p>Frontend Engineer,</p>
                        <p>API Developer,</p>
                        <p>System Designer,</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Timeline</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-2xl font-semibold`}>
                        <p>November'24-May'25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className={`${BricolageGrotesque.className} text-green-400 font-bold text-2xl flex gap-2 hover:cursor-pointer`}>
                    <h1>View Journey</h1><img className='' src="/svg/arrow.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className=''>
                <img className='h-100 object-cover drop-shadow-2xl float-child' src="/img/projectScreenWB.png" alt="" />
              </div>
            </div>
          </div>

          <div className='bg-[#282828] p-14 rounded-3xl hover:cursor-pointer float-parent hover:transition-all duration-800 hover:scale-95 hover:bg-[#1c1c1c]'>
            <div className='flex gap-5 items-center '>
              <div className='w-80 h-80 flex justify-center items-center'>
                <img className=' w-100 h-100 object-contain drop-shadow-2xl float-child' src="/img/project1.png" alt="" />
              </div>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-10'>
                  <div>
                    <h1 className={`${BricolageGrotesque.className} text-white text-5xl w-200 leading-14`}>
                      Built by Curiosity!
                    </h1>
                    <h1 className={`${BricolageGrotesque.className} text-white text-5xl font-semibold w-200 leading-14`}><span className='text-green-400'>Linktree</span> clone : The Art of Continuous Experimentation</h1>.
                    <h1 className={`${BricolageGrotesque.className} text-white text-xl font-semibold w-200`}>Turning interaction data into better design decisions.</h1>
                  </div>
                  <div className='flex w-full'>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Role</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-2xl font-semibold`}>
                        <p>Frontend Engineer,</p>
                        <p>API Developer,</p>
                        <p>System Designer,</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Timeline</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-2xl font-semibold`}>
                        <p>November'25-December'25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className={`${BricolageGrotesque.className} text-green-400 font-bold text-2xl flex gap-2 hover:cursor-pointer`}>
                    <h1>View Project</h1><img className='' src="/svg/arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-[#282828] p-14 rounded-3xl hover:cursor-pointer float-parent hover:transition-all duration-800 hover:scale-95 hover:bg-[#1c1c1c]'>
            <div className='flex gap-5 items-center w-full'>
              <div className='flex flex-col gap-10 w-1/2'>
                <div className='flex flex-col gap-10'>
                  <div>
                    <h1 className={`${BricolageGrotesque.className} text-white text-5xl w-200 leading-14`}>
                      <span className='text-green-400 font-semibold'>Helping Hands Foundation</span> :
                    </h1>
                    <h1 className={`${BricolageGrotesque.className} text-white text-5xl w-200 leading-14`}>Serving humanity with care</h1>.
                  </div>
                  <div className='flex w-lg'>
                    <div className='flex flex-col gap-2 w-1/2 '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Role</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-2xl font-semibold`}>
                        <p>Frontend Engineer,</p>
                        <p>API Developer,</p>
                        <p>System Designer,</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 w-1/2 '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Timeline</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-2xl font-semibold`}>
                        <p>November'25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className={`${BricolageGrotesque.className} text-green-400 font-bold text-2xl flex gap-2 hover:cursor-pointer`}>
                    <h1>View Project</h1><img className='' src="/svg/arrow.svg" alt="" />
                  </div>
                </div>
              </div>
              <div className='w-1/2 relative'>
                <img className='absolute top-10 left-10 float-child' src="/img/moniterWB.png" alt="" />
                <div className=' w-80 h-100 object-cover drop-shadow-2xl float-child z-20'>

                  <div className='absolute top-[75px] left-[120px] z-100'>
                    <Carousel />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-[#282828] p-14 rounded-3xl hover:cursor-pointer float-parent hover:transition-all duration-800 hover:scale-95 hover:bg-[#1c1c1c]'>
            <div className='flex items-center gap-10'>
              <div className='w-80 h-80 flex justify-center items-center'>
                <img className='rounded-full w-100 h-100 object-cover drop-shadow-2xl float-child' src="/img/spotify.png" alt="" />
              </div>
              <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-10'>
                  <div>
                    <h1 className={`${BricolageGrotesque.className} text-white text-5xl w-200 leading-14`}>

                    </h1>
                    <h1 className={`${BricolageGrotesque.className} text-white text-5xl font-semibold w-200 leading-14`}><span className='text-green-400'>Spotify</span> clone : Where Needs Inspire Creation</h1>.
                  </div>
                  <div className='flex w-full'>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Role</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-2xl font-semibold`}>
                        <p>Frontend Engineer,</p>
                        <p>API Developer,</p>
                        <p>System Designer,</p>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full '>
                      <h1 className={`${BricolageGrotesque.className} text-white font-bold text-2xl`}>Timeline</h1>
                      <div className={`${BricolageGrotesque.className} text-[#8b8b8b] text-2xl font-semibold`}>
                        <p>August'25</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=''>
                  <div className={`${BricolageGrotesque.className} text-green-400 font-bold text-2xl flex gap-2 hover:cursor-pointer`}>
                    <h1>View Project</h1><img className='' src="/svg/arrow.svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3
