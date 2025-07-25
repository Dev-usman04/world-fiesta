import React from "react";
import { Link } from "react-router-dom";

export default function FestivalCard({ festival }) {
  return (
    <Link
      to={`/festivals/${festival.id}`}
      className="block bg-gradient-to-br from-indigo-100 to-pink-100 rounded-xl shadow-lg p-4 transform hover:scale-105 hover:shadow-2xl hover:-rotate-2 transition-all duration-300 animate-fade-in"
    >
      <img
        src={festival.image}
        alt={festival.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-3">
        <h2 className="text-xl font-bold text-indigo-800 flex items-center">
          {festival.name} <span className="ml-2">{festival.flag}</span>
        </h2>
        <p className="text-sm text-gray-700">{festival.location}, {festival.country}</p>
        <p className="text-sm text-gray-600">{festival.month} • {festival.region}</p>
        <p className="mt-2 text-sm text-gray-800 line-clamp-2">{festival.description}</p>
      </div>
    </Link>
  );
}