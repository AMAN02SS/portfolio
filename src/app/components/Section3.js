import React from 'react'
import { Lavishly_Yours, Bricolage_Grotesque } from "next/font/google";
// import { useState, useEffect, useRef } from 'react';

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
        <div>
          <div></div>
        
        </div>
      </div>
      
    </div>
  )
}

export default Section3
