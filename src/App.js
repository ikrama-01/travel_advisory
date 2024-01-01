import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import { getPlacesData } from './api';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {

    const [places, setPlaces] = useState([]);
    const [coords, setCoords] = useState({ lat: 0, lng: 0 });
    // const [bounds, setBounds] = useState({sw: '',ne:''});
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            ({ coords: { latitude, longitude } }) => {
                setCoords({ lat: latitude, lng: longitude });
                setLoading(false); // Set loading to false after getting coords
            },
            (error) => {
                console.error('Error getting geolocation:', error);
                setLoading(false); // Set loading to false even on error
            }
        );
    }, []);

    const bounds = coords
    ? {
        sw: { lat: coords.lat - 0.1, lng: coords.lng - 0.1 },
        ne: { lat: coords.lat + 0.1, lng: coords.lng + 0.1 },
      }
    : null;
    useEffect(() => {
        if (coords && bounds) { // Check if both coords and bounds are not null
            console.log(coords, bounds);
            getPlacesData(bounds.sw, bounds.ne)
                .then((data) => {
                    console.log(data);
                    setPlaces(data);
                })
                .catch((error) => {
                    console.error('Error fetching places data:', error);
                });
        }
    }, [coords, bounds]);

    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item sx={12} md={5}>
                    <List places={places}  />
                </Grid>
                <Grid item sx={12} md={7}>
                    {loading ? ( // Display a loader while geolocation is in progress
                        <div>Loading...</div>
                    ) : (
                        <Map
                            setCoords={setCoords}
                            coords={coords}
                        />
                    )}
                </Grid>
            </Grid>
        </>
    );
};

export default App;