import React from 'react';
import Video from '../Video';
import { VideoNachbarschaftOhneAutos } from '../../assets';

export default function Nachbarschaft() {
    return (
        <div className='details-content'>
            <div className='details-flex-col'>
                <Video src={VideoNachbarschaftOhneAutos} auto={true} />
                <h2>Autofreie Zonen</h2>
                <p>
                    <strong>
                        Mehr Qualität für eine lebenswerte Nachbarschaft
                    </strong>
                    <span> - </span>
                    unsere Annahme, dass eine heterogene, offene und
                    gemeinschaftlich geprägte Nachbarschaft einen großen Beitrag
                    zur Lebensqualität innerhalb eines Stadtquartiers beiträgt,
                    wird durch verschiedene Studien gestützt. So stellt eine
                    Arbeit der Universität Oldenburg beispielsweise klar, dass
                    Nachbarschaftskontakte – wenn auch locker – geschätzt und
                    gesucht werden, sie gehören im besten Falle zum Alltag.
                    Daher stellten wir uns der Aufgabe, den Menschen mehr
                    Begegnungsfläche im öffentlichen und halböffentlichen Raum
                    zu bieten. Unsere Ideen zu den Straßen Adolfstraße,
                    Uhlandstraße und Lutherstraße (jeweils Abschnitte zwischen
                    Goethestraße und Körnerstraße) zeigen eine gänzlich
                    autofreie Zone, in der Grenzen verschwimmen und der so neu
                    entstehende „Frei“-Raum sich von den Bewohnern zu eigen
                    gemacht werden kann. Gewachsene Barrieren wie Bordsteine und
                    Straßen weichen einem fahrradfreundlichen, entschleunigten
                    Raum, in dem Nachbarschaft ein neues Gesicht bekommen kann.
                    Hier schließen sich Gemeinschaftssinn und individuelle
                    Gestaltung keineswegs aus. Jedoch hängt dieses Konzept stark
                    von der Akzeptanz und auch von der Mitgestaltung der
                    Anwohner ab, wobei die eigene Identifikation mit dem
                    Quartier eine wichtige Rolle spielt. Hinweis: Ein Ausgleich
                    für Autoparker ist angedacht in Form eines Parkhauses an der
                    Ecke Körnerstr./Eupener Str., siehe Konzept „Urban Gardeing“
                </p>
            </div>
        </div>
    );
}
