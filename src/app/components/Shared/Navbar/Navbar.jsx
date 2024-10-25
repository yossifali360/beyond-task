'use client';
import React, { useEffect } from 'react'
import NavLinks from './children/NavLinks/NavLinks'
import styles from './Navbar.module.css'
import useStore from '@/app/zustand/store';
import NavSettings from './children/NavSettings/NavSettings';
import { IoClose } from "react-icons/io5";

export default function Navbar() {
    const navbarOpened = useStore((state) => state.navBarOpened);
    const setNavBarOpened = useStore((state) => state.setNavBarOpened);

    const links = [
        { name: 'Home', route: '/' },
        { name: 'Blogs', route: '/blogs' },
        { name: 'About', route: '/about' },
        { name: 'Services', route: '/services' },
    ]
    function closeSideBar(e) {
        if (!e.target.closest(".links") && !e.target.closest(".smNav")) {
            setNavBarOpened(false);
        }
    }

    useEffect(() => {
        document.addEventListener("click", closeSideBar);
    }, []);

    return (
        <div className='w-full z-50 shadow-md'>
            <div className='flex items-center justify-between p-5 bg-white dark:bg-gray-800 relative'>
                <h3 className='uppercase font-bold text-3xl dark:text-white'>Review</h3>
                <div className={`${styles.links} links bg-white dark:bg-slate-700 md:bg-white md:dark:bg-transparent  ${navbarOpened ? "right-0" : "right-[-100%] md:right-0"} `}>
                    <span className='md:hidden dark:text-white  mr-auto pl-11 cursor-pointer duration-1000 opacity-55 hover:opacity-100' onClick={() => setNavBarOpened(false)}><IoClose size={25} /></span>
                    <NavLinks links={links} />
                </div>
                <NavSettings />
            </div>
        </div>
    )
}
