import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';
import Picto from '../components/Picto';
import Info from '../components/Info';
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
            <Info pictoId={0} infoId={0} />
            <Info pictoId={0} infoId={1} />
            <Info pictoId={0} infoId={2} />
            <Info pictoId={1} infoId={3} />
            <Info pictoId={1} infoId={4} />
            <Info pictoId={1} infoId={5} />
            <Info pictoId={2} infoId={6} />
            <Info pictoId={2} infoId={7} />
            <Info pictoId={2} infoId={8} />
            <Info pictoId={3} infoId={9} />
            <Info pictoId={3} infoId={10} />
        </div>
    );
}
