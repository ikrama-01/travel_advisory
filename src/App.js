import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

const App = () => {
    const coordinates = [10.77, 106.69];
    return (
        <>
            <CssBaseline />
            <Header />
            <Grid container spacing={3} style={{ width: '100%' }}>
                <Grid item sx={12} md={5}>
                    <List />
                </Grid>
                <Grid item sx={12} md={7}>
                    <Map/>
                </Grid>
            </Grid>
        </>
    );
};

export default App;