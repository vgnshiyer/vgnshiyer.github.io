"use client";

import React, { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

const ThemeToggle = () => {
  const [hasMounted, setHasMounted] = useState(false);

  let selectedTheme;
  if (typeof window !== "undefined") {
    selectedTheme = localStorage.getItem("theme");
  }
  const [darkMode, setDarkMode] = useState(selectedTheme === "dark");

  useEffect(() => {
    setHasMounted(true);
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  if (!hasMounted) {
    return null;
  }

  return (
    <div
      className="relative w-16 h-8 flex items-center dark:bg-semi-dark bg-semi-light rounded-full p-1 cursor-pointer shadow-inner"
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon
        className="text-tertiary-light dark:text-tertiary-dark"
        size={20}
      />
      <div
        className="absolute bg-white  w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out"
        style={{
          left: darkMode ? "calc(100% - 1.5rem)" : "0.1rem",
        }}
      ></div>
      <BsSunFill
        className="ml-auto text-contrast-light dark:text-contrast-dark"
        size={20}
      />
    </div>
  );
};

export default ThemeToggle;
