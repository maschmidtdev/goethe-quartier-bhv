import React, { useState } from 'react';

export default function Video({ src }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = (target) => {
        if (!isClicked) {
            setIsClicked(true);
        }
        if (target.paused) {
            target.play();
        } else {
            target.pause();
        }
    };

    return (
        <div
            className={`${
                isClicked ? 'video-container clicked' : 'video-container'
            }`}
        >
            <h2>Klicken zum Abspielen</h2>
            <video onClick={(e) => handleClick(e.target)}>
                <source src={src} type='video/mp4' />
            </video>
        </div>
    );
}
