"use client";

import Link from 'next/link'
import React, { useState, ReactNode } from 'react'

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
    return (
      <Link href={href}
        className={`text-white ${isNavBarToggled ? 'block' : ''} hover:bg-white hover:text-black rounded-lg p-2`}
      >
        {children}
      </Link>
    )
  };

  const CloseIcon = () => {
    return (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    )
  };

  const MenuIcon = () => {
    return (
      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white">
              <Link href="/">
                <img className="w-64" src="/images/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              {links.map(link => <NavBarLink href={link.href}>{link.text}</NavBarLink>)}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNavbar}
            >
              {isNavBarToggled ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {isNavBarToggled && (
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(link => <NavBarLink href={link.href}>{link.text}</NavBarLink>)}
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar