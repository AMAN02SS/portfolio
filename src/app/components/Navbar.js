"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const container = document.getElementById("scroll-container")
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > 150) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const container = document.getElementById("scroll-container");
    container.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (

    <div>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 right-10 z-50 w-14 h-14 rounded-full 
          bg-gray-700 flex items-center justify-center
          transition-all duration-500
          ${showGoTop
            ? "opacity-100 scale-100"
            : "opacity-10 scale-75 pointer-events-none"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 15l6 -6l6 6" />
        </svg>
      </button>
      <div className='bg-transparent text-white font-extrabold text-xl w-screen lg:w-400 mx-auto py-12 px-5'>
        <ul className='flex justify-between'>
          <div className='flex gap-12 items-center'>
            <li className='hover:cursor-pointer'>aman.dev</li>
          </div>
          <div className='flex md:gap-10 items-center'>
            <Link href={"https://drive.google.com/file/d/1y4t1DKVdOHZ8iQvsDSKcbDA63lAVfCUn/view?usp=sharing"}><li className='flex items-center gap-1 hover:cursor-pointer hover:text-green-400 hover:rounded-full hover:bg-gray-500 p-2 hover:transition-all duration-800 ease-in-out'><span><img src="/svg/downloadResume.svg" alt="" /></span> Resume</li></Link>
            <Link href={"#work"}><li className='hidden lg:block hover:cursor-pointer'>Work</li></Link>
            <Link href={"#blogs"} disabled><li className='hidden lg:block hover:cursor-pointer'>Blogs</li></Link>
            <Link href={"#about"}><li className='hidden lg:block hover:cursor-pointer'>About Me</li></Link>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar


// "use client"
// import Link from "next/link";
// import { useEffect, useState } from "react";

// const Navbar = () => {
//   const [showGoTop, setShowGoTop] = useState(false);

//   useEffect(() => {
//     const container = document.getElementById("scroll-container")
//     if (!container) return;

//     const handleScroll = () => {
//       if (container.scrollTop > 150) {
//         setShowGoTop(true);
//       } else {
//         setShowGoTop(false);
//       }
//     };
//     container.addEventListener("scroll", handleScroll);
//     return () => container.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     const container = document.getElementById("scroll-container");
//     container.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       {/* Go To Top Button */}
//       <button
//         onClick={scrollToTop}
//         className={`fixed bottom-10 right-10 z-50 w-14 h-14 rounded-full
//           bg-gray-700 flex items-center justify-center
//           transition-all duration-500
//           ${showGoTop
//             ? "opacity-100 scale-100"
//             : "opacity-10 scale-75 pointer-events-none"
//           }`}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="36"
//           height="36"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="white"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         >
//           <path d="M6 15l6 -6l6 6" />
//         </svg>
//       </button>

//       {/* Navbar */}
//       <div className="bg-transparent text-white font-extrabold text-xl w-screen lg:w-400 mx-auto py-12 px-5">
//         <ul className="flex justify-between">
//           <div className="flex gap-12 items-center">
//             <li className="hover:cursor-pointer">aman.dev</li>
//           </div>

//           <div className="flex gap-10 items-center">
//             <li className="flex items-center gap-1 hover:cursor-pointer hover:text-green-400 hover:rounded-full hover:bg-gray-500 p-2 transition-all duration-300">
//               <span>
//                 <img src="/svg/downloadResume.svg" alt="" />
//               </span>
//               Resume
//             </li>

//             <Link href="#work">
//               <li className="hidden lg:block hover:cursor-pointer">Work</li>
//             </Link>

//             <Link href="#">
//               <li className="hidden lg:block hover:cursor-pointer">Blogs</li>
//             </Link>

//             <Link href="#about">
//               <li className="hidden lg:block hover:cursor-pointer">
//                 About Me
//               </li>
//             </Link>
//           </div>
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;
