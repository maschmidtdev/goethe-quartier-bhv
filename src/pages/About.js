import React from 'react';
import { MapProvider } from '../context/map_context';
import { PhotoMaurice, PhotoAfrooz } from '../assets';

export default function About() {
    return (
        <MapProvider>
            <section className='about'>
                <h1>Über Uns</h1>
                <div className='about-flex'>
                    <article>
                        <img src={PhotoMaurice} alt='' />
                        <h2>
                            <strong>Maurice Schmidt</strong>
                        </h2>
                        <p>
                            <strong>Geboren:</strong> 06.07.1993 in Bremen
                        </p>
                        <p>
                            <strong>Bachelorausbildung:</strong> BA Architektur,
                            Jade Hochschule Oldenburg, 2015-2019
                        </p>
                        <p>
                            <strong>Lieblingsarchitekt/In:</strong> Mies van der
                            Rohe
                        </p>
                        <p>
                            <strong>Skizzenrolle oder CAD-Programm?:</strong>{' '}
                            Laut meiner Dozenten lieber das CAD-Programm...
                            Freihandzeichnen soll mir angeblich nicht so liegen.
                        </p>
                        <p>
                            <strong>Entwurfsplanung oder Bauleitung?:</strong>{' '}
                            Bauleitung! Mit Klemmbrett und Helm :-)
                        </p>
                        <p>
                            <strong>Bezug zum Goethequartier:</strong> Ich war
                            schon immer fasziniert von den Gründerzeitfassaden
                            in meiner Heimatstadt. Auch meine erste Band hatte
                            ihren Proberaum im RockCenter im Quartier. Die
                            tatsächlichen Potentiale dieses eher verrufenen
                            Stadtteils waren mir als Jugendlicher jedoch
                            definitiv nicht bewusst. Ich bin froh darüber, dass
                            sich mit der letzten Arbeit in meinem Studium der
                            Kreis zu meinen Wurzeln wieder schließt.
                        </p>
                        <p>
                            <strong>Lieblingsplatz im Goethequartier:</strong>{' '}
                            Ich kann mich nicht entscheiden: Goethestraße oder
                            der Zolli? Ich nehme beide!
                        </p>
                        <p>
                            <strong>
                                Persönliches Lieblingsprojekt dieser Arbeit:
                            </strong>{' '}
                            Urbaner Waldgarten! Ich bin und bleibe Utopist :-)
                        </p>
                        <p>
                            <strong>In 10 Jahren:</strong> Hoffentlich endlich
                            in der Architektenkammer. Selbständig und gut
                            vernetzt...
                        </p>
                    </article>
                    <article>
                        <img src={PhotoAfrooz} alt='' />
                        <h2>
                            <strong>Afrooz Khodakaram Nezhad</strong>
                        </h2>
                        <p>
                            <strong>Geboren:</strong> 02.09.1994 in Isfahan,
                            Iran
                        </p>
                        <p>
                            <strong>Bachelorausbildung:</strong> BA Architektur,
                            Isfahan, 2012-2017
                        </p>
                        <p>
                            <strong>Lieblingsarchitekt/In:</strong> Peter
                            Zumthor
                        </p>
                        <p>
                            <strong>Skizzenrolle oder CAD-Programm?:</strong>{' '}
                            beides :-)
                        </p>
                        <p>
                            <strong>Entwurfsplanung oder Bauleitung?:</strong>{' '}
                            Beides kann Spaß machen. Aber ich muss sagen,
                            Entwurfsplanung und die Zeit für Kreativität machen
                            mir richtig Spaß!
                        </p>
                        <p>
                            <strong>Bezug zum Goethequartier:</strong> Als ich
                            das erste Mal eine Dokumentation über das
                            Goethequartier gesehen habe, hat mich das Thema
                            direkt angesprochen. Mich beeindruckt in diesem
                            Zusammenhang die Größe und Vielfältigkeit von
                            Architektur, zudem sah ich gleich große Potentiale
                            im Goethequartier. Ich wusste direkt, es könnte eine
                            spannende Aufgabe für die Masterarbeit sein.
                        </p>
                        <p>
                            <strong>Lieblingsplatz im Goethequartier:</strong>{' '}
                            die Goethestraße mit den vielen Bäumen und Vorgärten
                            auf jeden Fall.
                        </p>
                        <p>
                            <strong>
                                Persönliches Lieblingsprojekt dieser Arbeit:
                            </strong>{' '}
                            Autofreie Zone! Das Leben ist viel schöner mit
                            weniger Autos.
                        </p>
                        <p>
                            <strong>In 10 Jahren:</strong> Ich hoffe, meine
                            geplanten Projekte realisieren zu können und freue
                            mich auf Fortschritte in meiner Stelle beim
                            Schulverwaltungsamt Düsseldorf. Ich möchte spannende
                            Projekte von Anfang bis Ende begleiten...
                        </p>
                    </article>
                </div>
            </section>
        </MapProvider>
    );
}
