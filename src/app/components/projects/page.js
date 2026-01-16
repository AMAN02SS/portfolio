"use client"
import React from 'react'
import { Lavishly_Yours, Bricolage_Grotesque } from "next/font/google";
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';


const LavishlyYours = Lavishly_Yours({
  subsets: ["latin"],
  weight: "400",
});
const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
});

const project = () => {

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/project")
      .then(res => res.json())
      .then(data => {
        console.log("Project from API", data);
        setProjects(data);
      }).catch(err => console.error(err));
  }, []);


  const [visibleItems, setVisibleItems] = useState({});

  const setRef = (index) => (el) => {
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisibleItems(prev => ({ ...prev, [index]: true }));
        observer.disconnect();
      }
    });

    observer.observe(el);
  };


  return (

    <div>
      <div>
        <h1 id={"work"} className={`${BricolageGrotesque.className} font-bold text-5xl text-white text-center py-15`}>Projects</h1>
        <div className='flex flex-col justify-center items-center gap-10'>
          {projects.map((project, index) => (
            <Link key={project._id} href={project.link}><div  ref={setRef(index)} className={`bg-[#282828] w-[90vw] md:w-[60vw] p-5 m-3 md:p-7 rounded-3xl hover:cursor-pointer float-parent hover:scale-95 hover:bg-[#1c1c1c] transition-all duration-1000 ease-out will-change-[opacity,filter,transform] ${visibleItems ? "opacity-100 blur-0 translate-y-0" : "opacity-0 blur-md translate-y-4 duration-1000"} delay-0 `}>
              <div className='flex flex-col md:flex-row md:justify-between justify-center gap-4 md:gap-5 group'>
                <div className='flex flex-col md:flex-row gap-4'>
                  <div className='flex justify-center'>
                    <img className='h-30 w-50 md:h-30 object-container drop-shadow-2xl flex justify-center items-center' src={project.image || "/img/project1.png"} alt="" />
                  </div>
                  <div className='flex flex-col gap-3 md:gap-5 w-full '>
                    <div className='flex flex-col gap-5 md:gap-5'>
                      <div>
                        <h1 className={`${BricolageGrotesque.className} text-white text-3xl md:text-3xl font-semibold w-fit md:w-200 md:leading-14`}><span className='text-green-400'>{project.heading} </span><span> : </span> {project.description}</h1>
                      </div>
                    </div>
                    <div className=''>
                      <div className="flex flex-wrap gap-2">
                        {project.skills?.map((skill, i) => (
                          <div
                            key={i}
                            className="px-3 py-1 text-xs rounded-full bg-[#282828] border border-dashed border-gray-500 text-green-400 hover:scale-110 transition"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex justify-center items-center w-10 flex-col '>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className=" group-hover:fill-green-900 transition-all duration-100 ease-in fill-green-400 icon icon-tabler icons-tabler-filled icon-tabler-arrow-big-right"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.586h-6.999a2 2 0 0 0 -2 2v4l.005 .15a2 2 0 0 0 1.995 1.85l6.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" /></svg></span>
                </div>
              </div>
            </div></Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default project