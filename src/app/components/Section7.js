"use client"
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { Bricolage_Grotesque } from "next/font/google";

const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});
const Section6 = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // trigger once
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className='pb-10'>
      <div className='my-2'>
        <h1 id={"blogs"} className={`${BricolageGrotesque.className} font-bold text-5xl text-white text-center py-10`}>Blogs</h1>
      </div>
      <div ref={sectionRef} className={`${BricolageGrotesque.className} text-white text-center flex justify-center w-fit md:w-400 mx-2 md:mx-auto`}>
        <div className={`transform transition-all duration-1000 ease-out ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}`}>
          <div className='grid grid-cols-1 md:grid-cols-2 flex-col justify-center gap-10 w-fit md:w-200 h-fit md:h-200'>
            <div className='group w-auto h-fit gap-1 bg-[#282828] rounded-4xl border-2 border-gray-500 transition-all duration-700 ease-in-out hover:border-white hover:scale-110'>
              <div className='p-10'>
                <div className='flex justify-between font-sans text-[#a8a8a8]'>
                  <h3 className=''>January 2025</h3>
                  <h1>10 min</h1>
                </div>
                <div className='flex flex-col justify-between gap-3 mt-5'>
                  <h1 className='text-start text-2xl group-hover:text-[#a8a8a8] transition-all duration-700 ease-in-out'>
                    Devops for developers: Smooth deployment workflows with</h1>
                  <p className='text-start'>Learn how Retrieval-Augmented Generation (RAG) combined with LangGraph and FastAPI helps you build...
                  </p>
                  <span className='text-start text-[#a8a8a8] group-hover:text-[#f8f8f8] transition-all duration-700 ease-in-out '>Read More </span>
                </div>
              </div>
            </div>
            <div className='group w-auto h-fit gap-1 bg-[#282828] rounded-4xl border-2 border-gray-500 transition-all duration-700 ease-in-out hover:border-white hover:scale-110'>
              <div className='p-10'>
                <div className='flex justify-between font-sans text-[#a8a8a8]'>
                  <h3 className=''>Febuary 2025</h3>
                  <h1>15 min</h1>
                </div>
                <div className='flex flex-col justify-between gap-3 mt-5'>
                  <h1 className='text-start text-2xl group-hover:text-[#a8a8a8] transition-all duration-700 ease-in-out'>
                    Devops for developers: Smooth deployment workflows with</h1>
                  <p className='text-start'> CI/CD using Github Actions
                    A practical guide for developers who want to build reliable CI/CD pipelines using GitHub Actions, automate deployments,...
                  </p>
                  <span className='text-start text-[#a8a8a8] group-hover:text-[#f8f8f8] transition-all duration-700 ease-in-out'>Read More </span>
                </div>
              </div>
            </div>
            <div className='group w-auto h-fit gap-1 bg-[#282828] rounded-4xl border-2 border-gray-500 transition-all duration-700 ease-in-out hover:border-white hover:scale-110'>
              <div className='p-10'>
                <div className='flex justify-between font-sans text-[#a8a8a8]'>
                  <h3 className=''>March 2025</h3>
                  <h1>12 min</h1>
                </div>
                <div className='flex flex-col justify-between gap-3 mt-5'>
                  <h1 className='text-start text-2xl group-hover:text-[#a8a8a8] transition-all duration-700 ease-in-out'>Real-Time Collaboration: Backend Communication POV...
                  </h1>
                  <p className='text-start'>A deep dive into how real-time collaboration systems work under the hood, how Redis-backed queues reduce...
                  </p>
                  <span className='text-start text-[#a8a8a8] group-hover:text-[#f8f8f8] transition-all duration-700 ease-in-out'>Read More </span>
                </div>
              </div>
            </div>
            <div className='group w-auto h-fit gap-1 bg-[#282828] rounded-4xl border-2 border-gray-500 transition-all duration-700 ease-in-out hover:border-white hover:scale-110'>
              <div className='p-10'>
                <div className='flex justify-between font-sans text-[#a8a8a8]'>
                  <h3 className=''>December 2025</h3>
                  <h1>16 min</h1>
                </div>
                <div className='flex flex-col justify-between gap-3 mt-5'>
                  <h1 className='text-start text-2xl group-hover:text-[#a8a8a8] transition-all duration-700 ease-in-out'>
                    JavaScript Event Loop Explained: How It Really Works Under the...</h1>
                  <p className='text-start'>A deep, beginner-friendly yet technically precise explanation of how JavaScript processes asynchronous operations using...
                  </p>
                  <span className='text-start text-[#a8a8a8] group-hover:text-[#f8f8f8] transition-all duration-700 ease-in-out'>Read More </span>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-[#282828] w-fit mx-auto py-2 px-4 rounded-2xl m-10 flex items-center gap-1 border-2 border-gray-500 transition-all duration-700 ease-in-out hover:border-white hover:scale-110'>More Blog <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right w-4 h-4"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg></span></div>
        </div>
      </div>
    </div>
  )
}

export default Section6
