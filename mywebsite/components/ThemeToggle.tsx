"use client";

import React, { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

  return (
    <div
        className="relative w-16 h-8 flex items-center dark:bg-semi-dark bg-light rounded-full p-1 cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
    >
        <FaMoon className="text-light" size={20} />
        <div 
            className="absolute bg-light dark:bg-dark w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
            style={{
                left: darkMode ? 'calc(100% - 1.5rem)' : '0.1rem'
            }}
        >
        </div>
        <BsSunFill className="ml-auto text-secondary" size={20} />
    </div>
  )
}

export default ThemeToggle