import React, { useEffect, useState } from "react";
import festivals from "../data/festivals.json";
import FestivalCard from "../components/FestivalCard";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";
import MapComponent from "../components/MapComponent";

export default function Festivals() {
  const [filteredFestivals, setFilteredFestivals] = useState(festivals);
  const [monthFilter, setMonthFilter] = useState("");
  const [regionFilter, setRegionFilter] = useState("");
  const [countryFilter, setCountryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    let result = festivals;

    if (monthFilter) {
      result = result.filter((f) => f.month === monthFilter);
    }

    if (regionFilter) {
      result = result.filter((f) => f.region === regionFilter);
    }

    if (countryFilter) {
      result = result.filter((f) => f.country === countryFilter);
    }

    if (searchQuery) {
      result = result.filter((f) =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredFestivals(result);
  }, [monthFilter, regionFilter, countryFilter, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-700 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center animate-bounce">
          Explore Global Festivals 🌟
        </h1>
        <div className="animate-slide-up">
          <SearchBar setSearchQuery={setSearchQuery} />
          <FilterBar
            monthFilter={monthFilter}
            setMonthFilter={setMonthFilter}
            regionFilter={regionFilter}
            setRegionFilter={setRegionFilter}
            countryFilter={countryFilter}
            setCountryFilter={setCountryFilter}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            {filteredFestivals.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {filteredFestivals.map((festival) => (
                  <FestivalCard key={festival.id} festival={festival} />
                ))}
              </div>
            ) : (
              <p className="text-white text-center">No festivals match your filters.</p>
            )}
          </div>
          <div className="lg:col-span-1 animate-slide-right">
            <MapComponent festivals={filteredFestivals} />
          </div>
        </div>
      </div>
    </div>
  );
}