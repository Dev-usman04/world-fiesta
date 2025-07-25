import React from "react";

export default function SearchBar({ setSearchQuery }) {
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Search festivals by name..."
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}