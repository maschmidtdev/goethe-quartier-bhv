import React from 'react';
import nahversorgung from '../assets/nahversorgung.JPG';
// import magniGlass from '../assets/magnifying-glass.png';
import magniGlass from '../assets/transparent.png';

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <div id='images-container'>
                <img id='nahversorgung' src={nahversorgung} alt='' />
                <img className='layer-image' src={magniGlass} alt='' />
                <img className='layer-image' src={magniGlass} alt='' />
            </div>
        </div>
    );
}
