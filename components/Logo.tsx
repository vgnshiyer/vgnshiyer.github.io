import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Link href="/">
        <span className="text-contrast-light dark:text-contrast-dark font-poppins text-2xl font-bold">
          vgnshiyer.
        </span>
      </Link>
    </div>
  );
};

export default Logo;
