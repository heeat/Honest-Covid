import React from "react";
import "./Map.css";
import { Map as HCMap, TileLayer } from "react-leaflet";
import { hcDataOnMap } from "./utility";

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="HC_map">
      <HCMap center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {hcDataOnMap(countries, casesType)}
      </HCMap>
    </div>
  );
}

export default Map;
