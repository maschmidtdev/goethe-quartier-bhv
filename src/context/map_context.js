import React, { useContext, useState } from 'react';
import {
    MapDefault,
    OverlayGebaeude,
    OverlayAlteWege,
    OverlayStadtGruen,
    OverlayWirtschaft,
    OverlayStudentischesWohnen,
    OverlayKuenstlerResidenz,
    OverlayEinHof,
    OverlayNachbarschaftOhneAutos,
    OverlayRaumVsBaum,
    OverlayMehrGrueneDaecher,
    OverlayUrbanerWaldgarten,
    OverlayUrbanGardening,
    OverlayHochschulStandortNord,
    OverlayKlassikerFahrradladen,
    OverlayHochschulStandortSued,
} from '../assets';

const MapContext = React.createContext();

const initialMapState = {
    categoryStates: [
        { isActive: false },
        { isActive: false },
        { isActive: false },
        { isActive: false },
    ],
    mapImage: MapDefault,
    mapOverlay: null,
    isModalOpen: false,
    isDetailsOpen: false,
    modalText: 'Lorem Ipsum',
    category: null,
    details: null,
};
// const categoryOverlays = [MapGebaeude, MapTraffic, MapStadtGruen, MapWirtschaft];
const categoryOverlays = [
    OverlayGebaeude,
    OverlayAlteWege,
    OverlayStadtGruen,
    OverlayWirtschaft,
];
const detailsOverlays = [
    OverlayStudentischesWohnen,
    OverlayKuenstlerResidenz,
    OverlayEinHof,
    OverlayNachbarschaftOhneAutos,
    OverlayRaumVsBaum,
    OverlayMehrGrueneDaecher,
    OverlayUrbanerWaldgarten,
    OverlayUrbanGardening,
    OverlayHochschulStandortNord,
    OverlayKlassikerFahrradladen,
    OverlayHochschulStandortSued,
];

export const MapProvider = ({ children }) => {
    const [mapState, setMapState] = useState(initialMapState);

    const setCategory = (id) => {
        setMapState({
            ...mapState,
            category: id,
            mapOverlay: categoryOverlays[id],
        });
    };
    const setDetails = (infoId) => {
        setMapState({
            ...mapState,
            details: infoId,
            mapOverlay:
                infoId !== null
                    ? detailsOverlays[infoId]
                    : categoryOverlays[mapState.category],
        });
    };

    const pullDown = () => {
        setMapState({
            ...mapState,
            details: null,
            category: null,
            mapOverlay: null,
        });
    };

    return (
        <MapContext.Provider
            value={{
                mapState,
                // handleClick,
                // setModal,
                setDetails,
                setCategory,
                pullDown,
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
