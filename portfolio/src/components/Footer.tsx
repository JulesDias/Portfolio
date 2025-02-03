import { FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo + Description */}
          <div>
            <h2 className="text-xl font-bold">Ludivine Rameaux</h2>
            <p className="text-sm mt-2">
              Designer passionnée, créant des expériences uniques et immersives.
            </p>
          </div>

          {/* Liens */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">À propos</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Portfolio</a></li>
                <li><a href="#" className="hover:underline">Contact</a></li>
                <li><a href="#" className="hover:underline">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Ressources</h3>
              <ul className="space-y-1">
                <li><a href="#" className="hover:underline">Projets</a></li>
                <li><a href="#" className="hover:underline">Mentions légales</a></li>
                <li><a href="#" className="hover:underline">CGU</a></li>
              </ul>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/ludivine-rameaux/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaYoutube size={24} />
            </a>
            <a href="https://www.instagram.com/ldv.rm/" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-4 text-center text-sm">
          © 2025 Ludivine Rameaux - Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
