import React, { useState } from 'react';

export default function VideoFlex({ src }) {
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
            {/* <h1>Klicken zum Abspielen</h1> */}
            <video onClick={(e) => handleClick(e.target)}>
                <source src={src} type='video/mp4' />
            </video>
        </div>
    );
}
