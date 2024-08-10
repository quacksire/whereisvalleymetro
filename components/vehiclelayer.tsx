'use client'

import {useEffect, useState } from "react"
import Image from "next/image"
import { useToast } from "@/components/ui/use-toast"

import { Marker } from "react-map-gl"
import { Navigation2 } from "lucide-react"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";


export default function VehicleLayer() {
    let STATIC = {"vehicle_route_cache":{"RAIL":{"route_short_name":"RAIL","route_long_name":"Valley Metro Rail","route_colour":"#0ea5e9","route_text_colour":"#000000","route_type":0,"route_desc":null}},"vehicle_positions":{"RTVP:T:20128880":{"trip":{"trip_id":"20128880","trip_headsign":"Gilbert Rd/Main St","route_id":"RAIL","trip_short_name":null,"direction_id":0,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"133","label":"Gilbert Rd/Main St","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.441673,"longitude":-111.95587,"bearing":144.70084,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":27,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null},"RTVP:T:20128877":{"trip":{"trip_id":"20128877","trip_headsign":"Metro Pkwy","route_id":"RAIL","trip_short_name":null,"direction_id":1,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"138","label":"Metro Pkwy","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.52059,"longitude":-112.09968,"bearing":0.32274085,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":36,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null},"RTVP:T:20128891":{"trip":{"trip_id":"20128891","trip_headsign":"Metro Pkwy","route_id":"RAIL","trip_short_name":null,"direction_id":1,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"119","label":"Metro Pkwy","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.414875,"longitude":-111.87419,"bearing":269.5546,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":8,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null},"RTVP:T:20128875":{"trip":{"trip_id":"20128875","trip_headsign":"Metro Pkwy","route_id":"RAIL","trip_short_name":null,"direction_id":1,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"208","label":"Metro Pkwy","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.573055,"longitude":-112.111946,"bearing":0.0,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":40,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null},"RTVP:T:20128893":{"trip":{"trip_id":"20128893","trip_headsign":"Metro Pkwy","route_id":"RAIL","trip_short_name":null,"direction_id":1,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"111","label":"Metro Pkwy","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.427536,"longitude":-111.941376,"bearing":269.49536,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":15,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null},"RTVP:T:20128889":{"trip":{"trip_id":"20128889","trip_headsign":"Gilbert Rd/Main St","route_id":"RAIL","trip_short_name":null,"direction_id":0,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"149","label":"Gilbert Rd/Main St","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.447174,"longitude":-112.06162,"bearing":89.890686,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":21,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null},"RTVP:T:20128878":{"trip":{"trip_id":"20128878","trip_headsign":"Gilbert Rd/Main St","route_id":"RAIL","trip_short_name":null,"direction_id":0,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"104","label":"Gilbert Rd/Main St","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.417027,"longitude":-111.922775,"bearing":136.94856,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":31,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null},"RTVP:T:20128894":{"trip":{"trip_id":"20128894","trip_headsign":"Gilbert Rd/Main St","route_id":"RAIL","trip_short_name":null,"direction_id":0,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"144","label":"Gilbert Rd/Main St","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.499172,"longitude":-112.07382,"bearing":180.0,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":12,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null},"RTVP:T:20128876":{"trip":{"trip_id":"20128876","trip_headsign":"Gilbert Rd/Main St","route_id":"RAIL","trip_short_name":null,"direction_id":0,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"207","label":"Gilbert Rd/Main St","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.415,"longitude":-111.81528,"bearing":89.5146,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":40,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null},"RTVP:T:20128892":{"trip":{"trip_id":"20128892","trip_headsign":"Gilbert Rd/Main St","route_id":"RAIL","trip_short_name":null,"direction_id":0,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"140","label":"Gilbert Rd/Main St","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.564644,"longitude":-112.09964,"bearing":181.36383,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":5,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null},"RTVP:T:20128890":{"trip":{"trip_id":"20128890","trip_headsign":"Metro Pkwy","route_id":"RAIL","trip_short_name":null,"direction_id":1,"start_time":null,"start_date":null,"schedule_relationship":null},"vehicle":{"id":"137","label":"Metro Pkwy","license_plate":null,"wheelchair_accessible":null},"position":{"latitude":33.44825,"longitude":-112.032906,"bearing":270.10504,"odometer":null,"speed":null},"timestamp":1723266119,"route_type":0,"current_stop_sequence":21,"current_status":null,"congestion_level":null,"occupancy_status":null,"occupancy_percentage":null}},"hash_of_routes":10538147748481095871,"last_updated_time_ms":1723266141331}

    const { toast } = useToast()

    const [vehicles, setVehicles] = useState([])
    useEffect(() => {
        async function fetchVehicles() {
            const res = await fetch("/birch")
            const vehicles = await res.json()
            setVehicles(vehicles.vehicle_positions)
        }
        fetchVehicles()
        setInterval(fetchVehicles, 5000)

    }, []);

    useEffect(() => {
        console.log(vehicles)
    }, [vehicles]);

    return (
        <>
            {Object.keys(vehicles).map((vehicle) => {

                // @ts-ignore
                return (<Marker key={vehicle} onClick={(e)=> toast({title: "Vehicle #"+vehicles[vehicle].vehicle.id + " - " + vehicles[vehicle].vehicle.label, description: "At stop sequence " + vehicles[vehicle].current_stop_sequence+ ", going " + (vehicles[vehicle].trip.direction_id == 1 ? "Northbound" : "Southbound"),})} latitude={vehicles[vehicle].position.latitude} longitude={vehicles[vehicle].position.longitude}>
                        <div>
                            {/* @ts-ignore */}
                            <Navigation2 size={24} style={{transform: `rotate(${vehicles[vehicle].position.bearing}deg)` }} />
                        </div>
                    </Marker>

                )
            })}
            </>
    )
}
