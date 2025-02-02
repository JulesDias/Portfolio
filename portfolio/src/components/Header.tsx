"use client";

import Link from "next/link";
import { useDarkMode } from "@/components/DarkModeContext";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

export default function Header() {
  return (
    <header className="w-full p-6 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md">
      <div className="flex items-center space-x-4">
        <Link href="/">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            Mon Portfolio
          </h1>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/about" className="text-gray-900 dark:text-white">
            Qui suis-je ?
          </Link>
        </nav>
      </div>
      <DarkModeToggle />
    </header>
  );
}
