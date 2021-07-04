import React, { useState } from 'react';
import {
    CategoryStadtGruen,
    DetailsUrbanGardening,
    DetailsUrbanGardening_2,
} from '../../assets';

export default function UrbanGardening() {
    const [page, setPage] = useState(1);

    const setContent = (page) => {
        switch (page) {
            case 1:
                return (
                    <>
                        <div className='text-container'>
                            <img src={CategoryStadtGruen} alt='' />
                            <h3>Urban Gardening und Parken</h3>
                            <p>
                                „Städtisches Gärtnern“, so könnte man das
                                mittlerweile sehr verbreitete englische Wort
                                übersetzen. Es trifft den Kern der Sache sehr
                                gut und mit diesem Konzept lassen sich viele
                                positive Wirkungen in der Stadt erzielen und
                                kombinieren. Viele Menschen haben Parzellen in
                                Kleingartenanlagen am Rande der Stadt, um ihrem
                                Bedürfnis nach Gärtnern und einem grünen Umfeld
                                gerecht zu werden. Dabei kann die
                                innerstädtische Variante doch so viel bieten:
                                Gemeinschaftliches Arbeiten in Nachbarschaft,
                                frische Nahrungsmittel direkt vor der Tür,
                                Abkühlung im aufgeheizten Sommer,
                                Insektenschutz, Umweltbildung und vieles mehr!
                                Das klassische Gemüse kann in Hochbeeten und
                                einfachen Erdbeeten gezüchtet werden, während
                                Pergolen Schatten spenden und sogar den Anbau
                                von beispielsweise Weintrauben und Kiwis
                                ermöglichen.
                            </p>
                        </div>
                        <div className='pagination urban'>
                            <div
                                className='click '
                                onClick={() => handleClick(1)}
                            >
                                <span>Weiter</span>
                                <div className='circle'>
                                    <div className='line next'></div>
                                    <div className='line next'></div>
                                </div>
                            </div>
                        </div>
                        <img
                            class='urbanGarden-1'
                            src={DetailsUrbanGardening}
                            alt=''
                        />
                    </>
                );
            case 2:
                return (
                    <>
                        <div className='text-container'>
                            <img src={CategoryStadtGruen} alt='' />
                            <h3>Urban Gardening und Parken</h3>
                            <p>
                                Das aktuelle Grundstück (Hof eines halb
                                geschlossenen Blockrandes) ist alles andere als
                                attraktiv. Eine Aneinanderreihung von
                                Fertigteilgaragen und Park- sowie Wendeflächen
                                befriedigt nur das Bedürfnis nach
                                Abstellmöglichkeiten für das Auto. Zwar ist die
                                Reduzierung von individuellem PKW-Verkehr Teil
                                des Mobilitätskonzeptes, jedoch wird es noch
                                lange Parkmöglichkeiten geben müssen. Daher
                                stellen wir uns an dieser Stelle ein Parkhaus im
                                Norden des Grundstückes vor, das den Blockrand
                                weiter schließt und in kompakter Weise die Auto
                                stapelt. Hier können dann auch Besucher-PKW oder
                                die Fahrzeuge der Anwohner aus den autofreien
                                Zonen in direkter Nähe parken. Die Fassade wird
                                begrünt und auch das Flachdach birgt weitere
                                Flächen für Pflanz-Kästen und/oder
                                Photovoltaikanlagen.
                            </p>
                        </div>
                        <div className='pagination urban'>
                            <div
                                className='click'
                                onClick={() => handleClick(-1)}
                            >
                                <div className='circle'>
                                    <div className='line prev'></div>
                                    <div className='line prev'></div>
                                </div>
                                <span>Zurück</span>
                            </div>
                        </div>
                        <div className='urbanGarden-2'>
                            <img src={DetailsUrbanGardening_2} alt='' />
                            <img src={DetailsUrbanGardening_2} alt='' />
                        </div>
                    </>
                );

            default:
                break;
        }
    };

    const handleClick = (val) => {
        console.log('Click!');
        let newPage = page + val;
        if (newPage > 2) {
            newPage = 1;
        } else if (newPage < 1) {
            newPage = 2;
        }
        setPage(newPage);
    };

    return (
        <div className='details-content studentisches-wohnen'>
            {setContent(page)}
            {/* <div className='pagination'>
                <div className='click' onClick={() => handleClick(-1)}>
                    {page > 1 && (
                        <>
                            <div className='circle'></div>
                            <span>Zurück</span>
                        </>
                    )}
                </div>
                <div className='click' onClick={() => handleClick(1)}>
                    {page < 2 && (
                        <>
                            <span>Weiter</span>
                            <div className='circle'></div>
                        </>
                    )}
                </div>
            </div> */}
        </div>
    );
}
