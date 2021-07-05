import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';

export default function Info({ categoryId, infoId }) {
    const [isActive, setIsActive] = useState(false);
    const cat_id = categoryId;
    const info_id = infoId;
    const { mapState, setDetails } = useMapContext();

    const handleClick = () => {
        console.log('infoId:', infoId);
        setDetails(mapState.details === infoId ? null : infoId);
    };

    useEffect(() => {
        setIsActive(
            mapState.details === null && mapState.category === cat_id
                ? true
                : mapState.details === info_id
        );
    }, [mapState.category, mapState.details, cat_id, info_id]);

    return (
        <div
            className={isActive ? 'info active' : 'info'}
            onClick={handleClick}
        ></div>
    );
}
