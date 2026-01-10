import React from 'react'
import Link from 'next/link';

const Footer = () => {
  let year = new Date().getFullYear();

  return (
    <div className='w-fit md:w-screen mx-auto md:text-xl text-[#FFFFFF66] md:text-[#FFFFFF] grid grid-cols-1 font-semibold text-center mt-2 md:mt-10 p-2 md:p-10 bg-black md:flex justify-evenly'>
      <div className='flex items-center'><h1>Aman Singh Sikarwar • Official Portfolio Website  •  ©{`${year}`}</h1></div>
      <div className='flex flex-col gap-10 items-center'>
        <h1 className='text-gray-500 hover:text-[#a8a8a8] transition-all duration-700 '><a href="mailto:aman.s.s.official@gmail.com">aman.s.s.official@gmail.com</a></h1>
        <div className='grid grid-cols-5 gap-5'>
          <Link href={"https://api.whatsapp.com/qr/533YN7YV2OXLA1"}><img className='w-10' src="/svg/whatsapp.svg" alt="" /></Link>
          <Link href={"https://www.linkedin.com/in/aman-singh-sikarwar-02/"}><img className='w-10' src="/svg/linkedin.svg" alt="" /></Link>
          <Link href={"https://github.com/AMAN02SS/"}><img className='w-10' src="/svg/github.svg" alt="" /></Link>
          <Link href={"https://www.instagram.com/aman.__s__sikarwar/"}><img className='w-10' src="/svg/instagram.svg" alt="" /></Link>
          <Link href={"https://x.com/Aman_S_Sikarwar"}><img className='w-10' src="/svg/X.svg" alt="" /></Link>
        </div>
      </div>


    </div>
  )
}

export default Footer
