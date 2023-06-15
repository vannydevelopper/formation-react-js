import React, {useState} from 'react'
import ReactMapGL from "react-map-gl"

const accessToken = 'pk.eyJ1IjoibWFydGlubWVkaWFib3giLCJhIjoiY2s4OXc1NjAxMDRybzNobTE2dmo1a3ZndCJ9.W9Cm7Pjp25FQ00bII9Be6Q';

export default function CarteMapPro(){
        const [viewPort, setViewPort] = useState({
                latitude: -3.35,
                longitude: 29.9,
                zoom: 8,
                width: "100vw",
                height: "100vh" 
              })
        return(
                <div>
                        <ReactMapGL
                                {...viewPort}
                                mapboxApiAccessToken={accessToken}
                        >

                        </ReactMapGL>
                        <h1>CarteMapPro</h1>
                </div>
        )
}