import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center px-4 py-6">
      <div className="max-w-3xl mx-auto text-center bg-white bg-opacity-90 rounded-lg shadow-xl p-8">
        <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-600 mb-6 animate-pulse">
          Welcome to Worldfiesta🌍
        </h2>
        <p className="text-xl text-gray-800 mb-8">
          Dive into a world of vibrant cultural festivals! Explore by month, region, or country, and discover celebrations with our interactive map and stunning festival cards.
        </p>
        <Link
          to="/festivals"
          className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-lg px-8 py-3 rounded-full hover:scale-105 transition-transform duration-300 shadow-lg"
        >
          Explore Festivals
        </Link>
      </div>
    </div>
  );
}