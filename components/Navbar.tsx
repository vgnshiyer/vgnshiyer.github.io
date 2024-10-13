"use client";

import Link from "next/link";
import React, { useState, ReactNode } from "react";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";

interface NavBarLinkProps {
  href: string;
  children: ReactNode;
}

const Navbar = () => {
  const [isNavBarToggled, setIsNavBarToggled] = useState(false);

  const toggleNavbar = (): void => {
    setIsNavBarToggled(!isNavBarToggled);
  };

  const NavBarLink = ({ href, children }: NavBarLinkProps) => {
    const handleClick = () => {
      if (window.innerWidth <= 768) {
        setTimeout(() => {
          setIsNavBarToggled(false);
        }, 100);
      }
    };

    return (
      <Link
        href={href}
        className={`text-tertiary-light group dark:text-white ${isNavBarToggled ? "block" : ""} rounded-2xl p-2 font-semibold tracking-[1px]`}
        onClick={handleClick}
      >
        {children}
        <span className="bg-contrast-light dark:bg-contrast-dark relative left-1/2 block h-0.5 max-w-0 -translate-x-1/2 duration-500 group-hover:max-w-full"></span>
      </Link>
    );
  };

  const CloseIcon = () => {
    return (
      <svg
        className="text-contrast-light dark:text-contrast-dark h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  };

  const MenuIcon = () => {
    return (
      <svg
        className="text-contrast-light dark:text-contrast-dark h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    );
  };

  const links = [
    { href: "/posts", text: "Posts" },
    { href: "/about", text: "Readme" },
    { href: "/inspiration", text: "Inspiration" },
  ];

  return (
    <>
      <nav className="w-full md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          <div className="hidden md:block">
            <div className="bg-semi-light dark:bg-semi-dark ml-4 flex items-center space-x-4 rounded-3xl px-8 py-1 ">
              {links.map((link) => (
                <NavBarLink key={link.href} href={link.href}>
                  {link.text}
                </NavBarLink>
              ))}
            </div>
          </div>
          <div className="ml-auto md:ml-0">
            <ThemeToggle />
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:text-white"
              onClick={toggleNavbar}
            >
              {isNavBarToggled ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {isNavBarToggled && (
          <div className="bg-light dark:bg-dark flex flex-col items-center space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {links.map((link) => (
              <NavBarLink key={link.href} href={link.href}>
                {link.text}
              </NavBarLink>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
