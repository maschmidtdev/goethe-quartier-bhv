import React from 'react';
import Map from '../components/Map';
import { MapProvider } from '../context/map_context';

export default function About() {
    return (
        <MapProvider>
            <h1>About</h1>
            <Map />
        </MapProvider>
    );
}
