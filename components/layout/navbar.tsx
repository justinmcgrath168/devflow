import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "../theme/mode-toggle";

const Navbar = () => {
  return (
    <nav className="z-50 flex-between background-light900_dark200 w-full p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/images/site-logo.svg"
          alt="Dev Overflow"
          width={24}
          height={24}
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev<span className="text-primary-500">Flow</span>
        </p>
      </Link>
      Global Search
      <div className="flex-between gap-2">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
