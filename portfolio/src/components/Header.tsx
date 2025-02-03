"use client";

import Link from "next/link";
import DarkModeToggle from "@/components/ui/DarkModeToggle";

export default function Header() {
  return (
    <header className="w-full p-6 flex justify-between items-center bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
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
          <Link href="/Creation" className="text-gray-900 dark:text-white">
            Mes Créations
          </Link>
        </nav>
      </div>
      <DarkModeToggle />
    </header>
  );
}
