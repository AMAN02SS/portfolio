"use client"
import React from 'react'
import { Bricolage_Grotesque } from "next/font/google";
import Link from 'next/link';
import { useState, useEffect } from 'react';

const BricolageGrotesque = Bricolage_Grotesque({
    subsets: ["latin"],
});

const page = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/api/blog")
            .then(res => res.json())
            .then(data => {
                console.log("Project from API", data);
                setBlogs(data);
            }).catch(err => console.error(err));
    }, []);


    return (
        <div className='pb-10'>
            <div className='my-2'>
                <h1 id={"blogs"} className={`${BricolageGrotesque.className} font-bold text-5xl text-white text-center py-10`}>Blogs</h1>
            </div>
                <div>
                    <div className={`${BricolageGrotesque.className} text-white text-center flex justify-center w-fit md:w-400 mx-2 md:mx-auto  `}>
                        <div className={`transform transition-all duration-1000 ease-out`}>
                            <div className='grid grid-cols-1 flex-col justify-center gap-10 w-fit md:w-300 h-fit'>
            {blogs.map((blog, index) => (
                                <Link href={"#"} key={blog._id} ><div className='group w-auto h-fit gap-1 bg-[#282828] rounded-4xl border-2 border-gray-500 transition-all duration-700 ease-in-out hover:border-white hover:scale-110'>
                                    <div className='p-10'>
                                        <div className='flex justify-between font-sans text-[#a8a8a8]'>
                                            <h3 className=''>{blog.date}</h3>
                                            <h1>{blog.readTime}</h1>
                                        </div>
                                        <div className='flex flex-col justify-between gap-3 mt-5'>
                                            <h1 className='text-start text-2xl group-hover:text-[#a8a8a8] transition-all duration-700 ease-in-out'>
                                                {blog.heading}</h1>
                                            <p className='text-start'>{blog.description}
                                            </p>
                                            <span className='text-start text-[#a8a8a8] group-hover:text-green-400 transition-all duration-700 ease-in-out '>Read More </span>
                                        </div>
                                    </div>
                                </div></Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default page
