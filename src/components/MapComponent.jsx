import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapComponent({ festivals }) {
  const defaultCenter = [20, 0]; // Centered on the world
  const defaultZoom = 2;

  return (
    <div className="h-96 rounded-lg shadow-md">
      <MapContainer
        center={defaultCenter}
        zoom={defaultZoom}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {festivals.map((festival) => (
          <Marker
            key={festival.id}
            position={[festival.coordinates.lat, festival.coordinates.lng]}
          >
            <Popup>
              <div>
                <h3 className="font-bold">{festival.name} {festival.flag}</h3>
                <p>{festival.location}, {festival.country}</p>
                <p>{festival.month} • {festival.region}</p>
                <p>{festival.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}