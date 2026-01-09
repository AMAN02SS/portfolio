import React from 'react'
import Link from 'next/link';

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className='w-400 mx-auto md:text-xl text-[#FFFFFF66] md:text-[#FFFFFF] font-semibold text-center md:w-auto mt-10 p-10 bg-black flex justify-evenly'>
      <div className='flex items-center'><h1>Aman Singh Sikarwar • Official Portfolio Website  •  ©{`${year}`}</h1></div>
      <div className='flex gap-10 items-center'>
        <h1 className='text-gray-500'><a href="mailto:aman.s.s.official@gmail.com">aman.s.s.official@gmail.com</a></h1>
        <Link href={"https://www.instagram.com/aman.__s__sikarwar/"}><img className='w-10' src="/svg/instagram.svg" alt="" /></Link>
        <Link href={"https://x.com/Aman_S_Sikarwar"}><img className='w-10' src="/svg/X.svg" alt="" /></Link>
        <Link href={"https://www.linkedin.com/in/aman-singh-sikarwar-02/"}><img className='w-10' src="/svg/linkedin.svg" alt="" /></Link>
      </div>


    </div>
  )
}

export default Footer
