"use client";

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
    { name: "Home", link: "#features" },
    { name: "Chat Resume", link: "#pricing" },
    { name: "ATS Score", link: "#ats" },
    { name: "Contact", link: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 border-b border-white/10 shadow-lg">
            <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center justify-center text-2xl font-bold cursor-pointer gap-2">
                    <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
                    <span>ResumeMate</span>
                </div>


                {/* Desktop Nav Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            className="text-gray-700 hover:text-primary  transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Desktop Buttons */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="w-full px-4 py-2 border border-indigo-500 rounded bg-indigo-500 text-white transition">
                        Login
                    </button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes className="text-white text-2xl" /> : <FaBars className="text-white text-2xl" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 h-full w-full bg-black/95 backdrop-blur-md text-gray-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:hidden`}
            >
                <div className="flex justify-between items-center px-6 py-3 border-b border-white/10">
                    <img src="/favicon.svg" alt="Logo" className="w-8 h-8" />
                    <div className="text-2xl font-bold text-indigo-500">ResumeMate</div>
                    <button onClick={() => setIsOpen(false)}>
                        <FaTimes className="text-white text-2xl" />
                    </button>
                </div>
                <div className="flex flex-col px-6 py-6 gap-4">
                    {navItems.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link}
                            onClick={() => setIsOpen(false)}
                            className="py-2 px-4 rounded hover:bg-white/100 hover:text-white transition"
                        >
                            {item.name}
                        </a>
                    ))}

                    <button className="w-full px-4 py-2 border border-indigo-500 rounded bg-indigo-500 text-white transition">
                        Login
                    </button>

                </div>
            </div>
        </nav>
    );
}
