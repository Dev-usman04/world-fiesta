import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-lg fixed top-0 w-full animate-fade-in-down">
      <div className="flex justify-between items-center px-4 py-6">
        <h1 className="text-4xl font-bold text-indigo-600 pl-2">
          🌍WorldFiesta
        </h1>
        <nav className="pr-2">
          <ul className="flex space-x-8">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold text-gray-700 relative nav-underline hover:text-indigo-600 transition-colors duration-300 hover:scale-110 hover:bg-indigo-100 rounded px-3 py-2"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/festivals"
                className="text-lg font-semibold text-gray-700 relative nav-underline hover:text-indigo-600 transition-colors duration-300 hover:scale-110 hover:bg-indigo-100 rounded px-3 py-2"
              >
                Festivals
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-semibold text-gray-700 relative nav-underline hover:text-indigo-600 transition-colors duration-300 hover:scale-110 hover:bg-indigo-100 rounded px-3 py-2"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}