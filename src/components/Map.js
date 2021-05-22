import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';
import Picto from '../components/Picto';
import {
    PictoGebaeude,
    PictoStadtGruen,
    PictoWirtschaft,
    PictoTraffic,
} from '../assets';

export default function Map() {
    const { mapState } = useMapContext();
    const [mapImage, setMapImage] = useState(mapState.mapImage);

    useEffect(() => {
        setMapImage(mapState.mapImage);
    }, [mapState]);

    return (
        <div id='map-container'>
            <img src={mapImage} alt='map' />
            <Picto image={PictoGebaeude} id={0} />
            <Picto image={PictoTraffic} id={1} />
            <Picto image={PictoStadtGruen} id={2} />
            <Picto image={PictoWirtschaft} id={3} />
        </div>
    );
}
