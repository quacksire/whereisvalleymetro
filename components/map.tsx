"use client";
// components/Map.jsx

import React, { useState } from "react";

import Map, {AttributionControl, FillLayer, Layer, NavigationControl, Source} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";


import * as valley_metro_line from '@/public/geojson/valleymetro-rail-line.json'
import * as valley_metro_stops from '@/public/geojson/valleymetro-rail-stops.json'
import CatenarySVG from "@/components/icons/catenary";
import { useTheme } from "next-themes";
import VehicleLayer from "@/components/vehiclelayer";
export default function MainMap() {

    const { theme } = useTheme()

    const parkLayer: FillLayer = {
        id: 'landuse_park',
        type: 'fill',
        source: 'mapbox',
        'source-layer': 'landuse',
        filter: ['==', 'class', 'park'],
        paint: {
            'fill-color': '#4E3FC8'
        }
    };

    //@ts-ignore
    return (
        <div>
            <Map
                // make sure to set the width and height to full screen
                // setting both to 100% will not work
                style={{position: 'relative', width: '100vw', height: '93.75vh', zIndex: 1}}
                initialViewState={{
                    longitude: -112.00698852539064,
                    latitude: 33.43478194772795,
                    zoom: 10
                }}
                attributionControl={false}

                mapboxAccessToken={"pk.eyJ1IjoiY2hpbGRxdWFjayIsImEiOiJjbHM2a2s2dXQwdmVzMmxxaHN0dXEzaGRsIn0.RVy7AMo3FChS0lsSkJcyPg"}
                mapStyle={theme == 'dark' ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/light-v10"}
            >
                <NavigationControl/>

                {/* @ts-ignore */}
                <Source id="my-data" type="geojson" data={valley_metro_line}>
                    <Layer type={'line'} layout={{'line-join': 'round', 'line-cap': 'round'}}
                           paint={{'line-color': theme == 'dark' ? '#0ea5e9' : '#0ea5e9', 'line-width': 2}}/>
                </Source>

                <VehicleLayer />

                <AttributionControl compact={true} position="bottom-right" customAttribution={'<CatenarySVG />'} />
            </Map>
        </div>
    )
}
