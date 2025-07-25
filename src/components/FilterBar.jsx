import React from "react";
import festivals from "../data/festivals.json";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const regions = [...new Set(festivals.map((f) => f.region))].sort();
const countries = [...new Set(festivals.map((f) => f.country))].sort();

export default function FilterBar({
  monthFilter,
  setMonthFilter,
  regionFilter,
  setRegionFilter,
  countryFilter,
  setCountryFilter,
}) {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <select
        value={monthFilter}
        onChange={(e) => setMonthFilter(e.target.value)}
        className="p-2 border rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Months</option>
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
      <select
        value={regionFilter}
        onChange={(e) => setRegionFilter(e.target.value)}
        className="p-2 border rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>{region}</option>
        ))}
      </select>
      <select
        value={countryFilter}
        onChange={(e) => setCountryFilter(e.target.value)}
        className="p-2 border rounded w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">All Countries</option>
        {countries.map((country) => (
          <option key={country} value={country}>{country}</option>
        ))}
      </select>
    </div>
  );
}