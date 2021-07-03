import React, { useState, useEffect } from 'react';
import { useMapContext } from '../../context/map_context';
import {
    StudentischesWohnen_1,
    StudentischesWohnen_2,
    StudentischesWohnen_3,
    StudentischesWohnen_4,
} from '../../assets';

export default function StudentischesWohnen() {
    // const { mapState, setModal } = useMapContext();
    // const [isOpen, setIsOpen] = useState(mapState.isModalOpen);
    // const [text, setText] = useState(mapState.modalText);
    const [page, setPage] = useState(1);

    const setContent = (page) => {
        switch (page) {
            case 1:
                return (
                    <>
                        <img
                            className='dachaufsicht'
                            src={StudentischesWohnen_1}
                            alt=''
                        />
                        <p>
                            Das Gründerzeit-Eckgebäude steht an der Ecke
                            Goethestraße/Eupener Straße und fällt neben seiner
                            Fassade mit diversen Anstrichen aus dem grünen
                            Farbspektrum auch durch seinen offensichtlichen
                            Leerstand und begonnen Verfall auf. Dieses recht
                            große Objekt, das aus 3 Einheiten besteht, wurde
                            bereits von der Stäwog Bremerhaven gesichert und
                            wartet nun auf eine neue Belebung. Dieser Umstand
                            und die attraktive Lage direkt in der Goethestraße
                            bestärken den Bedarf an einer neuen Idee für das
                            Gebäude. Die angedachten neuen Hochschulstandorte
                            sind weitere Katalysatoren für die Nachfrage nach
                            studentischem Wohnraum im Quartier. Als junger
                            Mensch im Goethequartier leben, arbeiten und lernen,
                            das soll alles möglich sein und gefördert werden.
                        </p>
                    </>
                );

            case 2:
                return <h1>Page 2</h1>;

            case 3:
                return <h1>Page 3</h1>;

            default:
                break;
        }
    };

    const handleClick = (val) => {
        console.log('Click!');
        let newPage = page + val;
        if (newPage > 3) {
            newPage = 1;
        } else if (newPage < 1) {
            newPage = 3;
        }
        setPage(newPage);
    };

    // useEffect(() => {
    //     setText(mapState.modalText);
    //     setIsOpen(mapState.isModalOpen);
    // }, [mapState.isModalOpen, mapState.modalText]);

    return (
        <div className='details-content studentisches-wohnen'>
            {setContent(page)}
            <div className='pagination'>
                <div
                    className='click prev'
                    onClick={() => handleClick(-1)}
                ></div>
                <div
                    className='click next'
                    onClick={() => handleClick(1)}
                ></div>
            </div>
        </div>
    );
}
