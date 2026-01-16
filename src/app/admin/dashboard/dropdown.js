"use client";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut } from 'next-auth/react'

export default function ProfileDropdown() {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut({ redirect: false });
        router.replace("/admin/login");
    }

    // Close when clicking outside
    useEffect(() => {
        const handler = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    return (
        <div ref={dropdownRef} className="relative flex gap-2 justify-evenly items-center">

            {/* Button */}
            <button
                onClick={() => setOpen(!open)}
                className="inline-flex gap-3 items-center justify-center text-white bg-brand hover:bg-brand-strong shadow-xs font-medium rounded-base text-sm px-4 py-2.5"
                type="button"
            >
                <h1>Aman, Admin</h1>
                <img src="/svg/avtar.svg" alt="" className="w-5 h-5 rounded-full" />
                <svg
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path stroke="currentColor" strokeWidth="2" d="m19 9-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 top-12 z-10 bg-[#3d3d3d] rounded-4xl border border-default-medium rounded-base shadow-lg w-44">
                    <ul className="p-2 text-sm font-medium flex flex-col justify-center items-center">
                        <li>
                            <a className="block p-2 hover:bg-neutral-tertiary-medium rounded" href="#">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a className="block p-2 hover:bg-neutral-tertiary-medium rounded" href="#">
                                Settings
                            </a>
                        </li>
                        <li>
                            <a className="block p-2 hover:bg-neutral-tertiary-medium rounded" href="#">
                                Earnings
                            </a>
                        </li>
                        <li className="p-2 hover:bg-red-500 hover:text-white rounded cursor-pointer" onClick={handleSignOut}>
                            Sign out
                        </li>
                    </ul>
                </div>
            )}

        </div>
    );
}
