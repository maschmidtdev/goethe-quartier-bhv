import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';

const texts = ['Gebäude', 'Verkehr & Wege', 'Wirtschaft', 'Stadt-GRÜN'];

export default function Picto({ image, id }) {
    const { mapState, handleMouseEnter, handleMouseLeave } = useMapContext();
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        setIsActive(mapState.pictoStates[id].isActive);
    }, [mapState]);

    return (
        <div className='picto-container'>
            <img
                src={image}
                alt='Pictogram image'
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={() => handleMouseLeave(id)}
                className={`${isActive ? 'active' : ''}`}
            />
            <h4>{texts[id]}</h4>
        </div>
    );
}
