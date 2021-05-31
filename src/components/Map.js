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
            <Info pictoId={0} text='studentisches Wohnen' />
            <Info pictoId={0} text='altersgerechtes Wohnen' />
            <Info pictoId={0} text='Gastronomie Erdgeschossnutzung' />
            <Info pictoId={1} text='sudentisches Wohnen' />
            <Info pictoId={1} text='sudentisches Wohnen' />
            <Info pictoId={1} text='sudentisches Wohnen' />
            <Info pictoId={2} text='sudentisches Wohnen' />
            <Info pictoId={2} text='sudentisches Wohnen' />
            <Info pictoId={2} text='sudentisches Wohnen' />
            <Info pictoId={3} text='sudentisches Wohnen' />
            <Info pictoId={3} text='sudentisches Wohnen' />
        </div>
    );
}
