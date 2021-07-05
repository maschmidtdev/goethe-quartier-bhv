import React, { useState } from 'react';
import { Videosource } from '../assets/index';
import Video from '../components/Video';

export default function Home() {
    const [page, setPage] = useState(0);
    const [isShow, setIsShow] = useState(false);

    const getContent = (page, show) => {
        switch (page) {
            case 1:
                return (
                    <div className={`${show ? 'home-flex show' : 'home-flex'}`}>
                        <p>Was passiert,</p>
                        <p>
                            wenn sich zwei MasterstudentInnen der Architektur
                            mit dem
                        </p>
                        <h1>G O T H E Q U A R T I E R</h1>
                        <p>
                            in <em>Bremerhaven-Lehe</em>
                        </p>
                        <p>auseinandersetzen?...</p>
                        <button onClick={(e) => changePage(2)}>
                            klicke hier
                        </button>
                    </div>
                );
            case 2:
                return (
                    <div className={`${show ? 'home-flex show' : 'home-flex'}`}>
                        <p>Wir wollen Lust machen auf einen</p>
                        <br />
                        <p>
                            einen <strong>Lebensraum</strong> mit
                        </p>
                        <br />
                        <p>
                            <strong> attraktiven</strong>
                        </p>
                        <br />
                        <p>
                            <strong>Zukunftsperspektiven</strong>...
                        </p>
                        <br />

                        <button
                            onClick={(e) => {
                                console.log(e.target);
                                changePage(3);
                            }}
                        >
                            okay, dann zeig her!
                        </button>
                    </div>
                );
            case 3:
                return (
                    <div className={`${show ? 'home-flex show' : 'home-flex'}`}>
                        <p>Wir zeigen dir Projekte und Ideen,</p>
                        <br />
                        <p>die das Quartier in ihrer</p>
                        <br />
                        <p>
                            <strong>nachhaltigen Entwicklung stärken</strong>
                        </p>
                        <br />
                        <p>sollen...</p>
                        <br />

                        <a href='/map'>Kann ich jetzt zu den Projekten?</a>
                    </div>
                );

            default:
                break;
        }
    };

    const changePage = (page) => {
        console.log('[changePage]', page);
        setIsShow(false);
        setPage(page);
        setTimeout(() => {
            setIsShow(true);
        }, 1000);
    };

    return (
        <div id='home'>
            <div className='home-video'>
                <Video src={Videosource} auto={false} changePage={changePage} />
            </div>
            {page > 0 && getContent(page, isShow)}
        </div>
    );
}
