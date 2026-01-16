"use client"

import React from 'react'
import { Bricolage_Grotesque } from 'next/font/google';
import {signIn} from "next-auth/react"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BricolageGrotesque = Bricolage_Grotesque({
    subsets: ["latin"],

});
const page = () => {
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) =>{
        e.preventDefault()
        setLoading(true);
        setError("")

        const res = await signIn("credentials", {email,password,redirect:false,})
        if(res?.error){
            setError("Invalid email or password")
            setLoading(false)
        }
        else{
            router.push("/admin/dashboard")
            setLoading(false);
        }
    }
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='w-120 h-auto mx-auto border-white border bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]   rounded-4xl flex flex-col p-10 gap-10'>
                <div className='flex justify-center items-center'>
                    <div className='text-center'>
                        <h1 className='text-4xl'><span className={`${BricolageGrotesque.className} font-bold`}>Welcome</span> to Login</h1>
                        <p className='text-xl font-semibold'>Sign in to your account <span>(Administrator)</span></p>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleLogin}>
                        {error && (<p className='text-center pb-5 text-red-500'>{error}</p>)}
                        <div className='w-full flex flex-col gap-10 justify-center'>

                            <div className='relative '>
                                <label className='absolute -top-3 left-5 backdrop-blur-3xl rounded-full px-1' htmlFor="">Username</label>
                                <input onChange={(e)=>setEmail(e.target.value)} className='px-5 w-full border-2 rounded-full h-15 font-semibold' type="email" value={email} required/>
                            </div>
                            <div className='relative '>
                                <label className='absolute -top-3 left-5 backdrop-blur-3xl rounded-full px-1' htmlFor="">Password</label>
                                <input onChange={(e)=>setPassword(e.target.value)} className='px-5 w-full border-2 rounded-full h-15 font-semibold' type="password" value={password} required />
                            </div>
                            <div className='flex justify-center items-center h-10'>
                                <button disabled={loading} className='hover:w-18 hover:h-18 hover:transition-all duration-500 ease-in-out rounded-full border-white border bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]   w-15 h-15 flex justify-center items-center'>{loading ? <img src="/svg/logging.svg" alt="" /> : <img src="/svg/rightarrow.svg" className='fill-black' alt="" />}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page
