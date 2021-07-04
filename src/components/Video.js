import React, { useState } from 'react';

export default function Video({ src, auto, changePage, black }) {
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

    const getVideo = (auto) => {
        if (auto) {
            console.log('[auto]', auto);
            return (
                <video autoPlay onClick={(e) => handleClick(e.target)}>
                    <source src={src} type='video/mp4' />
                </video>
            );
        }

        return (
            <>
                <h2>Klicken zum Abspielen</h2>
                <video
                    onClick={(e) => handleClick(e.target)}
                    onEnded={() => changePage(1)}
                >
                    <source src={src} type='video/mp4' />
                </video>
            </>
        );
    };

    if (black) {
        return (
            <div
                className={`${
                    isClicked
                        ? 'video-container black clicked'
                        : 'video-container black'
                }`}
            >
                {getVideo(auto)}
            </div>
        );
    } else {
        return (
            <div
                className={`${
                    isClicked ? 'video-container clicked' : 'video-container'
                }`}
            >
                {getVideo(auto)}
            </div>
        );
    }
}
