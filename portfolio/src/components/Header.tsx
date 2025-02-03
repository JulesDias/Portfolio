"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-6 flex justify-center items-center bg-white sticky top-0 z-50">
      <div className="flex items-end space-x-4">
        <Link href="/">
          <p className="text-4xl text-greenCustom font-kiera leading-none">
            home
          </p>
        </Link>
        <nav className="flex items-end space-x-4 font-Montserrata text-lg font-bold leading-2">
          <Link href="/about" className="text-gray-900">
            Qui suis-je ?
          </Link>
          <Link href="/Creation" className="text-gray-900">
            Mes Créations
          </Link>
        </nav>
      </div>
    </header>
  );
}
