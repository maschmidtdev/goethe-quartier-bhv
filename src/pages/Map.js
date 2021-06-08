import React from 'react';
import Map from '../components/Map';
import Modal from '../components/Modal';
import { MapProvider } from '../context/map_context';

export default function About() {
    return (
        <MapProvider>
            <Map />
            <Modal />
        </MapProvider>
    );
}
