import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';
// import Picto from '../components/Picto';
import MapMenu from '../components/MapMenu';
import MapPulldown from '../components/MapPulldown';
import Info from '../components/Info';
import Details from '../components/Details';
import { OverlayStadtGruenMap } from '../assets';

export default function Map() {
    const { mapState, setDetails } = useMapContext();
    // const [mapImage, setMapImage] = useState(mapState.mapImage);
    const [mapOverlay, setMapOverlay] = useState(mapState.mapOverlay);

    useEffect(() => {
        setMapOverlay(mapState.mapOverlay);
    }, [mapState]);

    const mapClick = () => {
        setDetails(null); // remove details window;
    };

    return (
        <div id='map-container'>
            <MapMenu></MapMenu>
            <img src={mapState.mapImage} alt='map' />
            <img src={mapOverlay} alt='overlay' onClick={mapClick} />
            {/* <div className='picto-flex'>
                <Picto image={PictoGebaeude} id={0} />
                <Picto image={PictoTraffic} id={1} />
                <Picto image={PictoStadtGruen} id={2} />
                <Picto image={PictoWirtschaft} id={3} />
            </div> */}
            <Info categoryId={0} infoId={0} />
            <Info categoryId={0} infoId={1} />
            <Info categoryId={1} infoId={2} />
            <Info categoryId={1} infoId={3} />
            <Info categoryId={1} infoId={4} />
            <Info categoryId={2} infoId={5} />
            <Info categoryId={2} infoId={6} />
            <Info categoryId={2} infoId={7} />
            <Info categoryId={3} infoId={8} />
            <Info categoryId={3} infoId={9} />
            <Info categoryId={3} infoId={10} />
            <Details />
            <MapPulldown />
            {mapState.details === 5 && (
                <img src={OverlayStadtGruenMap} alt='' onClick={mapClick} />
            )}
        </div>
    );
}
