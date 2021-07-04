import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';
import {
    StudentischesWohnen,
    KuenstlerResidenz,
    EinHof,
    Nachbarschaft,
    RaumVsBaum,
    UrbanGardening,
} from './details';

export default function Details() {
    const { mapState } = useMapContext();
    const [isOpen, setIsOpen] = useState(mapState.isDetailsOpen);

    useEffect(() => {
        console.log('USEEFFECT');
        setIsOpen(mapState.details !== null);
    }, [mapState.details]);

    const renderDetails = () => {
        // return details[mapState.details];
        // return <h1>mapState.details: {mapState.details}</h1>;
        switch (mapState.details) {
            case 0:
                return <StudentischesWohnen />;
            case 1:
                return <KuenstlerResidenz />;
            case 2:
                return <EinHof />;
            case 3:
                return <Nachbarschaft />;
            case 4:
                return <RaumVsBaum />;
            case 7:
                return <UrbanGardening />;

            default:
                break;
        }
    };

    return (
        <div className={`${isOpen ? 'details open' : 'details'}`}>
            {renderDetails()}
        </div>
    );
}
