import React, { useState } from 'react';
import { useNavContext } from '../context/nav_context';

export default function Hamburger() {
    const { isActive, handleClick } = useNavContext();
    // const [isActive, setIsActive] = useState(false);

    // const handleClick = () => {
    //     console.log('toggle');
    //     setIsActive(!isActive);
    // };

    return (
        <div
            id='hamburger'
            className={`${isActive ? 'active' : ''}`}
            onClick={handleClick}
        >
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
            <div className='hamburger-line'></div>
        </div>
    );
}
