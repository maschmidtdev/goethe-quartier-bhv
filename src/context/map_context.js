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
        { isActive: false },
        { isActive: false },
        { isActive: false },
        { isActive: false },
    ],
    mapImage: MapDefault,
    isModalOpen: false,
    modalText: 'Lorem Ipsum',
};
const mapImages = [MapGebaeude, MapTraffic, MapStadtGruen, MapWirtschaft];

export const MapProvider = ({ children }) => {
    const [mapState, setMapState] = useState(initialMapState);

    const handleClick = (id) => {
        const newStates = mapState.pictoStates.map((state, pictoId) => {
            return pictoId === id ? { isActive: true } : { isActive: false };
        });
        setMapState({
            ...mapState,
            mapImage: mapImages[id],
            pictoStates: newStates,
        });
    };

    const setModal = (state, text) => {
        setMapState({
            ...mapState,
            isModalOpen: state,
            modalText: text,
        });
    };

    return (
        <MapContext.Provider
            value={{
                mapState,
                handleClick,
                setModal,
            }}
        >
            {children}
        </MapContext.Provider>
    );
};
// make sure use
export const useMapContext = () => {
    return useContext(MapContext);
};
