import React from "react";
import { useParams, Link } from "react-router-dom";
import festivals from "../data/festivals.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function FestivalDetail() {
  const { id } = useParams();
  const festival = festivals.find((f) => f.id === parseInt(id));

  if (!festival) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-700 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Festival Not Found</h2>
          <Link
            to="/festivals"
            className="inline-block bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors"
          >
          ← Back
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-600 to-purple-700 py-12">
      <div className="max-w-4xl mx-auto px-4 bg-white bg-opacity-90 rounded-xl shadow-2xl p-8 animate-fade-in-up">
        <Link
          to="/festivals"
          className="inline-block text-indigo-600 hover:text-indigo-800 mb-4 transition-colors"
        >
          ← Back
        </Link>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <img
              src={festival.image}
              alt={festival.name}
              className="w-full h-64 object-cover rounded-lg shadow-md transform hover:scale-110 transition-transform duration-500"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-extrabold text-indigo-800 flex items-center mb-4">
              {festival.name} {festival.flag}
            </h2>
            <p className="text-lg text-gray-800 mb-2">
              <span className="font-semibold">Location:</span> {festival.location}, {festival.country}
            </p>
            <p className="text-lg text-gray-800 mb-2">
              <span className="font-semibold">Month:</span> {festival.month}
            </p>
            <p className="text-lg text-gray-800 mb-2">
              <span className="font-semibold">Region:</span> {festival.region}
            </p>
            <p className="text-lg text-gray-800 mb-4">{festival.description}</p>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">Location on Map</h3>
          <div className="h-64 rounded-lg shadow-md animate-slide-up">
            <MapContainer
              center={[festival.coordinates.lat, festival.coordinates.lng]}
              zoom={10}
              style={{ height: "100%", width: "100%" }}
              className="rounded-lg"
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[festival.coordinates.lat, festival.coordinates.lng]}>
                <Popup>
                  <div>
                    <h3 className="font-semibold">{festival.name}</h3>
                    <p>{festival.location}, {festival.country}</p>
                  </div>
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
}