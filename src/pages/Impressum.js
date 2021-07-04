import React from 'react';
import Map from '../components/Map';
import { MapProvider } from '../context/map_context';

export default function Impressum() {
    return (
        <MapProvider>
            <h1>Impressum</h1>
        </MapProvider>
    );
}
