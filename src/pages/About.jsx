import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-500 to-magenta-600 flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white bg-opacity-95 rounded-2xl shadow-2xl p-8 animate-fade-in-up">
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-6 text-center animate-slide-up">
          About Culturo 🎉
        </h2>
        <p className="text-xl text-gray-700 mb-6 text-center animate-slide-up delay-100">
          Worldfiesta is a platform dedicated to celebrating the diversity of cultural festivals worldwide. Our mission is to connect people with vibrant traditions, from the colorful parades of Rio Carnival to the serene rituals of Timkat in Ethiopia.
        </p>
        <p className="text-xl text-gray-700 mb-8 text-center animate-slide-up delay-200">
          Use our interactive map and filters to explore festivals by month, region, or country, and immerse yourself in the beauty of global cultures.
        </p>
        <div className="text-center">
          <Link
            to="/festivals"
            className="inline-block bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-lg font-semibold px-8 py-4 rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 animate-bounce-slow"
          >
            Explore Festivals
          </Link>
        </div>
      </div>
    </div>
  );
}