import React, { useContext, useEffect, useState } from 'react';
import {
    MapDefault,
    MapGebaeude,
    MapTraffic,
    MapStadtGruen,
    MapWirtschaft,
} from '../assets';

const MapContext = React.createContext();

const initialMapState = {
    pictoStates: [
        { isActive: true },
        { isActive: true },
        { isActive: true },
        { isActive: true },
    ],
    mapImage: MapDefault,
};
const mapImages = [MapGebaeude, MapTraffic, MapStadtGruen, MapWirtschaft];

export const MapProvider = ({ children }) => {
    const [mapState, setMapState] = useState(initialMapState);

    const handleMouseEnter = (id) => {
        const newStates = mapState.pictoStates.map((state, pictoId) => {
            return pictoId === id ? { isActive: true } : { isActive: false };
        });
        setMapState({
            ...mapState,
            mapImage: mapImages[id],
            pictoStates: newStates,
        });
    };

    const handleMouseLeave = (e) => {
        console.log('leave', e.target);
    };

    return (
        <MapContext.Provider
            value={{ mapState, handleMouseEnter, handleMouseLeave }}
        >
            {children}
        </MapContext.Provider>
    );
};
// make sure use
export const useMapContext = () => {
    return useContext(MapContext);
};
