import React, { useState } from 'react';
import { Videosource } from '../assets/index';
import Video from '../components/Video';

export default function Home() {
    const [page, setPage] = useState(1);

    const getContent = (page) => {
        switch (page) {
            case 1:
                return (
                    <div className='home-flex'>
                        <p>
                            Was passiert, wenn sich zwei MasterstudentInnern der
                            Architektur mit dem
                        </p>
                        <h1>G O T H E Q U A R T I E R</h1>
                        <p>
                            in <em>Bremerhaven-Lehe</em> auseinandersetzen?...
                        </p>
                        <button onClick={(e) => setPage(2)}>klicke hier</button>
                    </div>
                );
            case 2:
                return (
                    <div className='home-flex'>
                        <p>
                            Wir wollen Lust machen auf einen{' '}
                            <strong>Lebensraum</strong> mit
                            <strong> attraktiven Zukunftsperspektiven</strong>
                            ...
                        </p>

                        <button
                            onClick={(e) => {
                                console.log(e.target);
                                setPage(3);
                            }}
                        >
                            okay dann zeig her!
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className='home-flex'>
                        <p>
                            Wir zeigen dir Projekte und Ideen, die das Quartier
                            in ihrer{' '}
                            <strong>nachhaltigen Entwicklung stärken</strong>{' '}
                            sollen...
                        </p>

                        <a href='/map'>Kann ich jetzt zu den Projekten?</a>
                    </div>
                );

            default:
                break;
        }
    };

    return (
        <div id='home'>
            {/* <h1>Home</h1> */}
            {/* <Video src={Videosource} auto={false} /> */}
            {getContent(page)}
        </div>
    );
}
