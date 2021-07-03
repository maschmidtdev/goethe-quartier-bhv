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
                return (
                    <div className='container'>
                        <div className='combine'>
                            <img src={StudentischesWohnen_2} alt='' />
                            <img src={StudentischesWohnen_4} alt='' />
                        </div>
                        <p>
                            Um Erdegschoss-Zonen vor allem gemeinschaftlich
                            und/oder gewerblich besser nutzen zu können, musste
                            in manchen Fällen das Treppenhaus von dem direkten
                            Zugang zum Straßenraum getrennt werden. Der direkte
                            Zugang ins Freie wird durch eine Hoferschließung
                            gewährleistet, der direkte Zugang in die
                            Treppenhäuser erfolgt dann also durch die Durchfahrt
                            in der Eupener Straße und einen attraktiven
                            Innenhof. Somit können ebenerdig zum öffentlichen
                            Raum eine Gastronomie im Eckgebäude und das
                            studentische Coworking von der Goethestraße aus
                            betreten werden. Rund um die Uhr zugängliche
                            studentische Arbeitsplätze entlasten die
                            Hochschulräumlichkeiten, bringen das Arbeiten und
                            Lernen näher an den Lebensmittelpunkt und schaffen
                            zusätzliche gemeinschaftliche Flächen. Die
                            Gastronomie kann man sich in diesem arbeitsreichen
                            Kontext als „Mensa für alle“ vorstellen, das ganze
                            Quartier soll von dem zusätzlichen kulinarischen
                            Angebot profitieren.
                        </p>
                    </div>
                );

            case 3:
                return (
                    <div className='container'>
                        <div className='combine'>
                            <img src={StudentischesWohnen_3} alt='' />
                            <img src={StudentischesWohnen_4} alt='' />
                        </div>
                        <div className='text'>
                            <p>
                                Normalerweise wird es ab dem 1. Obergeschoss
                                etwas ruhiger. Nicht so in diesem Fall. Im
                                Eckgebäude findet klassisches Co-Working für
                                jedermann statt, Startups und Jungunternehmer
                                sollen von gemeinsam genutzten Räumlichkeiten
                                und Einrichtungen profitieren. Teilen,
                                voneinander lernen, in der Gemeinschaftsküche
                                noch eben ein Schnack über die neuesten
                                Entwicklungen in der IT-Welt: Niemand ist hier
                                alleine. Ähnlich lebendig dürfte es im
                                Gebäudeteil an der Goethestraße zugehen, wo die
                                ehem. Einzelwohnungen zu größeren
                                Wohngemeinschaften für Studierende umgebaut
                                werden sollen. Das klassische Pendant hierzu
                                wird in dem kleineren Abschnitt in der Eupener
                                Straße anegboten, wo geschossübergreifend 2- bis
                                3-Zimmer-Wohnungen angeboten werden - möglichst
                                auch für Studierende vorbehalten. (Hinweis: Die
                                Erschließung über den Hof ist noch nicht
                                brandschutztechnisch überprüft)
                            </p>
                            <br />
                            <p>
                                (Hinweis: Die Erschließung über den Hof ist noch
                                nicht brandschutztechnisch überprüft)
                            </p>
                        </div>
                    </div>
                );

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
                <div className='click' onClick={() => handleClick(-1)}>
                    {page > 1 && (
                        <>
                            <div className='circle'></div>
                            <span>Zurück</span>
                        </>
                    )}
                </div>
                <div className='click' onClick={() => handleClick(1)}>
                    {page < 3 && (
                        <>
                            <span>Weiter</span>
                            <div className='circle'></div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
