import React from "react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { MapContainer, TileLayer,Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import useStyles from './styles'
const Map = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600)');
    const coordinates = [51.505, -0.09];
    return (
        <MapContainer
            classname={classes.mapContainer}
            center={coordinates}
            zoom={10}
            style={{ width: '100vh', height: '100vh',border:'0px white,', borderRadius:'30px', }}
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