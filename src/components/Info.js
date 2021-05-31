import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';

export default function Info({ pictoId, text }) {
    const [isActive, setIsActive] = useState(false);
    const { mapState } = useMapContext();

    useEffect(() => {
        console.log(mapState.pictoStates[pictoId].isActive);
        setIsActive(mapState.pictoStates[pictoId].isActive);
    }, [mapState]);

    return (
        // <div className={isActive ? 'info active' : 'info'}>
        <div className={isActive ? 'info active' : 'info'}>
            {/* <p>{text}</p> */}
            <p>Infotext, link, button?</p>
        </div>
    );
}
