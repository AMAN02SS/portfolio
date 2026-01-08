import React from 'react'

const Footer = () => {
    let year = new Date().getFullYear();

  return (
    <div className='w-400 mx-auto md:text-xl text-[#FFFFFF66] md:text-[#FFFFFF] font-semibold text-center md:w-auto mt-10 p-10 bg-black flex justify-evenly'>
        <h1>Aman Singh Sikarwar • Official Portfolio Website  •  ©{`${year}`}</h1>
        <h1 className='text-gray-500'><a href="mailto:aman.s.s.official@gmail.com">aman.s.s.official@gmail.com</a></h1>


      
    </div>
  )
}

export default Footer
