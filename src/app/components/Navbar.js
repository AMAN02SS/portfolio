import Link from 'next/link'
import React from 'react'


const Navbar = () => {
  return (
    <div>
      <div className='bg-transparent text-white font-extrabold text-xl w-screen lg:w-400 mx-auto py-12 px-5'>
        <ul className='flex justify-between'>
          <div className='flex gap-12 items-center'>
            <li className='hover:cursor-pointer'>aman.dev</li>
          </div>
          <div className='flex gap-10 items-center'>
            <li className='flex items-center gap-1 hover:cursor-pointer hover:text-green-400 hover:rounded-full hover:bg-gray-500 p-2 hover:transition-all duration-800 ease-in-out'><span><img src="/svg/downloadResume.svg" alt="" /></span> Resume</li>
           <Link href={"#work"}><li className='hidden lg:block hover:cursor-pointer'>Work</li></Link>
           <Link href={"#"} disabled><li className='hidden lg:block hover:cursor-pointer'>Blogs</li></Link>
            <Link href={"#about"}><li className='hidden lg:block hover:cursor-pointer'>About Me</li></Link>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar


