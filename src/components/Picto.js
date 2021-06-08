import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';

const texts = ['Gebäude', 'Verkehr & Wege', 'Stadt-GRÜN', 'Wirtschaft'];

export default function Picto({ image, id }) {
    const { mapState, handleClick } = useMapContext();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(mapState.pictoStates[id].isActive);
    }, [mapState]);

    return (
        <div className='picto-container'>
            <img
                src={image}
                alt='Pictogram image'
                onClick={() => handleClick(id)}
                onLoad={() => {
                    console.log('loaded', id);
                }}
                className={`${isActive ? 'active' : ''}`}
            />
            <h4>{texts[id]}</h4>
        </div>
    );
}
