import useStore from '@/app/zustand/store';
import React, { useEffect, useState, useCallback } from 'react';
import { FaBars } from "react-icons/fa";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

export default function NavSettings() {
    const navbarOpened = useStore((state) => state.navBarOpened);
    const setNavBarOpened = useStore((state) => state.setNavBarOpened);
    const [theme, setTheme] = useState(() => typeof window !== 'undefined' ? localStorage.getItem("theme") || 'light' : "light");

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = useCallback(() => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    }, []);

    return (
        <div className='flex items-center gap-5'>
            <span
                className='cursor-pointer dark:text-white'
                onClick={toggleTheme}
            >
                {theme === "dark" ? <MdOutlineLightMode size={25} /> : <MdOutlineDarkMode size={25} />}
            </span>
            <span
                className='cursor-pointer dark:text-white md:hidden smNav'
                onClick={() => setNavBarOpened(!navbarOpened)}
            >
                <FaBars size={20} />
            </span>
        </div>
    );
}
