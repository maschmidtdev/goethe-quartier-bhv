import React, { useEffect } from 'react';
import { useMapContext } from '../context/map_context';

export default function MapPulldown() {
    const { mapState, setCategory, pullDown } = useMapContext();

    useEffect(() => {
        setCategory(mapState.category);
    }, [mapState.category]);

    const handleClick = () => {
        pullDown();
    };

    return (
        <div
            className={`${
                mapState.category !== null
                    ? 'map-pulldown show'
                    : 'map-pulldown'
            }`}
            onClick={handleClick}
        >
            <div className='pulldown-line'></div>
            <div className='pulldown-line'></div>
        </div>
    );
}
