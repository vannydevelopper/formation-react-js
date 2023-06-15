import React, { useEffect, useRef, useState } from "react";
import mapboxgl from 'mapbox-gl';
import ReactMapGL, { Marker, Popup } from "react-map-gl"
import { FaBurn } from "react-icons/fa";
import axios from "axios"

// react-bootstrap components
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";
mapboxgl.accessToken = 'pk.eyJ1IjoibWFydGlubWVkaWFib3giLCJhIjoiY2s4OXc1NjAxMDRybzNobTE2dmo1a3ZndCJ9.W9Cm7Pjp25FQ00bII9Be6Q';

const TOKEN = 'pk.eyJ1IjoibWFydGlubWVkaWFib3giLCJhIjoiY2s4OXc1NjAxMDRybzNobTE2dmo1a3ZndCJ9.W9Cm7Pjp25FQ00bII9Be6Q'


function Maps() {
  const [provinces, setProvinces] = useState([])
  const [selectedPark, setSelectedPark]= useState(null)
  console.log(selectedPark)

  const [viewPort, setViewPort] = useState({
    latitude: -3.35,
    longitude: 29.9,
    zoom: 8,
    width: "100vw",
    height: "100vh"
  })

  const allProvince = async () => {
    const response = await axios.get("http://localhost:3000/personne/province");
    setProvinces(response.data)
  }

  useEffect(() => {
    allProvince()
  }, [])


  return (
    <>
      <div className="map-container">
        <div style={{ marginTop: 15 }}></div>
        <ReactMapGL
          {...viewPort}
          width="100%"
          height="100%"
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxAccessToken={TOKEN}
          onViewportChange={(viewPort) => setViewPort(viewPort)}
        // onDblClick={(e)=>handleClick(e)}
        >
          <>
          {provinces.map((province,index)=>{
            return(
              <Marker
                key={province.PROVINCE_ID}
                  latitude={province.PROVINCE_LATITUDE} longitude={province.PROVINCE_LONGITUDE}
                >
                  <Button className="marker-btn" onClick={(e)=>{
                    e.preventDefault()
                    setSelectedPark(province)
                  }}>
                    <FaBurn color="red" size={20} />
                  </Button>
              </Marker>
            )
          })}

          {selectedPark ? (
            <Popup
              key={selectedPark.PROVINCE_ID} 
              latitude={selectedPark.PROVINCE_LATITUDE} longitude={selectedPark.PROVINCE_LONGITUDE}
            >
                <div>
                    hello
                </div>
            </Popup>
          ) : null}
          </>
        </ReactMapGL>
      </div>
    </>
  );
}

export default Maps;
