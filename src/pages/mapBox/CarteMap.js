import React, { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import "./CrateMap.css"


mapboxgl.accessToken = 'pk.eyJ1IjoibWFydGlubWVkaWFib3giLCJhIjoiY2s4OXc1NjAxMDRybzNobTE2dmo1a3ZndCJ9.W9Cm7Pjp25FQ00bII9Be6Q';

export default function CarteMap() {
        const mapContainer = useRef(null);
        const map = useRef(null);
        const [lng, setLng] = useState(29.9);
        const [lat, setLat] = useState(-3.35);
        const [zoom, setZoom] = useState(9);

        useEffect(() => {
                if (map.current) return; // initialize map only once
                map.current = new mapboxgl.Map({
                        container: mapContainer.current,
                        style: 'mapbox://styles/mapbox/streets-v12',
                        center: [lng, lat],
                        zoom: zoom
                });
        });

        useEffect(() => {
                if (!map.current) return; // wait for map to initialize
                map.current.on('move', () => {
                        setLng(map.current.getCenter().lng.toFixed(4));
                        setLat(map.current.getCenter().lat.toFixed(4));
                        setZoom(map.current.getZoom().toFixed(2));
                });
        });


        return (
                <div>
                        <div>
                                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                        </div>
                        <div ref={mapContainer} className="map-container" />
                </div>
        )
}