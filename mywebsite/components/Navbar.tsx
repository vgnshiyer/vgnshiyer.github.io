"use client";

import Link from 'next/link'
import React, { useState, ReactNode, useEffect } from 'react'
import ThemeToggle from './ThemeToggle';
import { FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

interface NavBarLinkProps {
  href: string;
  children: ReactNode;
}

const Navbar = () => {

  const [isNavBarToggled, setIsNavBarToggled] = useState(false);

  const toggleNavbar = () : void => {
    setIsNavBarToggled(!isNavBarToggled);
  }

  const NavBarLink = ({href, children}: NavBarLinkProps) => {
    const handleClick = () => {
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          setIsNavBarToggled(false);
        }, 100);
      }
    };

    return (
      <Link href={href}
        className={`group text-black dark:text-white ${isNavBarToggled ? 'block' : ''} rounded-2xl p-2 tracking-[1px]`}
        onClick={handleClick}
      >
        {children}
        <span className="block relative max-w-0 group-hover:max-w-full left-1/2 -translate-x-1/2 duration-500 h-0.5 bg-secondary"></span>
      </Link>
    )
  };

  const CloseIcon = () => {
    return (
      <svg className="h-6 w-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  };

  const MenuIcon = () => {
    return (
      <svg className="h-6 w-6 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    )
  };

  const links = [
    {href: "/", text: "Posts"},
    {href: "/about", text: "Readme"},
  ];

  return (
    <>
      <nav className="w-full md:px-6">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4 bg-light dark:bg-semi-dark rounded-3xl px-8 py-1 ">
              {links.map(link => <NavBarLink key={link.href} href={link.href}>{link.text}</NavBarLink>)}
            </div>
          </div>
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <div className="md:hidden flex items-center">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isNavBarToggled ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {isNavBarToggled && (
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-light dark:bg-dark">
            {links.map(link => <NavBarLink href={link.href}>{link.text}</NavBarLink>)}
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar