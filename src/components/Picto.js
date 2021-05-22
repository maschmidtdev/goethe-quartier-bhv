import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';

export default function Picto({ image, id }) {
    const { mapState, handleMouseEnter, handleMouseLeave } = useMapContext();
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        setIsActive(mapState.pictoStates[id].isActive);
    }, [mapState]);

    return (
        <img
            src={image}
            alt='Pictogram image'
            onMouseEnter={() => handleMouseEnter(id)}
            onMouseLeave={() => handleMouseLeave(id)}
            className={`${isActive ? 'active' : ''}`}
        />
    );
}
