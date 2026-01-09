"use client"
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { Bricolage_Grotesque } from "next/font/google";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);
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


  const data = {
    labels: [
      'Creativity',
      'Communicatiopn',
      'Problem Solving',
      'Teamwork',
      'Project Management',
      'Collaboration',
      'Adaptability'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [ 95, 95, 90, 90 , 89, 85, 90 ],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    },]
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
         min: 0,
      max: 100,
        pointLabels: {
          font: {
            size: 18,   // 👈 Increase this number
            weight: "600",
          },
          color: "#ffffff", // label color
        },
        ticks: {
          backdropColor: "transparent",
          color: "#999",
          font: {
            size: 14,
          },
        },
        grid: {
          color: "rgba(255,255,255,0.1)",
        },
        angleLines: {
          color: "rgba(255,255,255,0.2)",
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <div className='my-10'>
        <h1 id={"Skills"} className={`${BricolageGrotesque.className} font-bold text-5xl text-white text-center py-10`}>Skills</h1>
      </div>
      <div ref={sectionRef} className={`${BricolageGrotesque.className} text-white text-center flex justify-evenly w-400 mx-auto`}>

        <div className={`w-1/2 transform transition-all duration-1000 ease-out
    ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-24"}
  `}>
          <h1 className={`${BricolageGrotesque.className} font-bold text-2xl text-white text-center`}>Technical Skills</h1>
          <div className='my-25 grid grid-cols-2 flex-col justify-center gap-10'>
            <div className='w-100 h-30 flex items-center justify-center gap-1 bg-[#282828] rounded-4xl  '>
              <img src="/img/skills/html5.png" alt="" width={100} height={100} />
              <div>
                <h1 className={`${BricolageGrotesque.className} font-semibold text-2xl`}>HTML</h1>
                <div>

                </div>
              </div>
            </div>
            <div className='w-100 h-30 flex items-center justify-center gap-1 bg-[#282828] rounded-4xl'>
              <img src="/img/skills/css3.png" alt="" width={100} height={100} />
              <div>
                <h1 className={`${BricolageGrotesque.className} font-semibold text-2xl`}>CSS</h1>
                <div>

                </div>
              </div>
            </div>
            <div className='w-100 h-30 flex items-center justify-center gap-1 bg-[#282828] rounded-4xl'>
              <img src="/img/skills/nodejs.png" alt="" width={100} height={100} />
              <div>
                <h1 className={`${BricolageGrotesque.className} font-semibold text-2xl`}>Node</h1>
                <div>

                </div>
              </div>
            </div>
            <div className='w-100 h-30 flex items-center justify-center gap-1 bg-[#282828] rounded-4xl'>
              <img src="/img/skills/javascript.png" alt="" width={100} height={100} />
              <div>
                <h1 className={`${BricolageGrotesque.className} font-semibold text-2xl`}>Javascript</h1>
                <div>

                </div>
              </div>
            </div>
            <div className='w-100 h-30 flex items-center justify-center gap-1 bg-[#282828] rounded-4xl'>
              <img src="/img/skills/python.png" alt="" width={100} height={100} />
              <div>
                <h1 className={`${BricolageGrotesque.className} font-semibold text-2xl`}>Python</h1>
                <div>

                </div>
              </div>
            </div>
            <div className='w-100 h-30 flex items-center justify-center gap-1 bg-[#282828] rounded-4xl'>
              <img src="/img/skills/react.png" alt="" width={100} height={100} />
              <div>
                <h1 className={`${BricolageGrotesque.className} font-semibold text-2xl`}>React</h1>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-1/2 transform transition-all duration-1000 ease-out delay-200
    ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-24"}
  `}>
          <h1 className={`${BricolageGrotesque.className} font-bold text-2xl text-white text-center`}>Professional Skills</h1>
          <div className='flex justify-center items-center float-parent'>
            <div className='w-150 h-150 float-child' >
              <Radar width={400} height={400} data={data} options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section6
