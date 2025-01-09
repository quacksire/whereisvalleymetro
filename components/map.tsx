"use client";
// components/Map.jsx

import React, { useState, useCallback } from "react";

import Map, {AttributionControl, FillLayer, Layer, NavigationControl, Source} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";



import CatenarySVG from "@/components/icons/catenary";
import { useTheme } from "next-themes";

export default function MainMap() {

    const { theme } = useTheme()

    const layers = [
        'ca_bounds',
        'ca_evacs',
        'la_evacs',
        'wfigs_bounds',
        'modis',
    ]



    const LayerLoader = (layer: string) => {
        // a react component that loads the layer from the  `/fire/${layer}` endpoint


        const [data, setData] = useState(null);

        const fetchLayer = useCallback(() => {
            // @ts-ignore
            fetch(`/fire/${layer}`)
                .then((res) => res.json())
                .then((data) => setData(data));
        }, []);

        fetchLayer();

        // @ts-ignore
        return (<Source id={layer} type="geojson" data={data}>
            <Layer
                id={layer}
                type="fill"
                source={layer}
                paint={{
                    "fill-color": "#EF3841",
                    "fill-opacity": 0.5
                }} />
            </Source>
        );
    }


    //@ts-ignore
    return (
        <div>
            <Map
                // make sure to set the width and height to full screen
                // setting both to 100% will not work
                style={{position: 'relative', width: '100vw', height: '93.75vh', zIndex: 1}}
                initialViewState={{
                    // LA area
                    latitude: 34.0522,
                    longitude: -118.2437,
                    zoom: 8
                }}
                attributionControl={false}

                mapboxAccessToken={"pk.eyJ1IjoiY2hpbGRxdWFjayIsImEiOiJjbHM2a2s2dXQwdmVzMmxxaHN0dXEzaGRsIn0.RVy7AMo3FChS0lsSkJcyPg"}
                mapStyle={theme == 'dark' ? "mapbox://styles/mapbox/navigation-night-v1" : "mapbox://styles/mapbox/navigation-day-v1"}
            >
                <NavigationControl/>

                {layers.map((layer) => LayerLoader(layer))}



                <AttributionControl compact={true} position="bottom-right" customAttribution={'<CatenarySVG />'} />
            </Map>
        </div>
    )
}
