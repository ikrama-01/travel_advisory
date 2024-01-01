import React , { useState, useRef, useEffect } from "react";
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { getPlacesData } from "../../api";
import useStyles from './styles'


const Map = ( {coords}) => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600)');
    

    return (
        <MapContainer
            classname={classes.mapContainer}
            center={coords}
            zoom={10}
            style={{ width: '100vh', height: '90vh', border: '0px white,', borderRadius: '30px', }}
            options={''}
            onChildClick={''}
        >
            <TileLayer
                url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=usYc6subE6vLZu6GXpKE"
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
            />

            {/* <Marker position={[51.505, -0.09]}></Marker> */}

        </MapContainer>
    );
}

export default Map;