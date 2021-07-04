import React from 'react';
import Video from '../Video';
import { VideoEinHof } from '../../assets';

export default function EinHof() {
    return (
        <div className='details-content'>
            <div className='details-flex-col'>
                <Video src={VideoEinHof} auto={true} black={true} />
                <h2>Ein Hof für alle</h2>
                <p>
                    Die für die Gründerzeit typische städtebauliche Form der
                    „Blockrandbebauung“ trennt den innenliegenden, großzügigen
                    Hof von dem öffentlichen (Straßen-) Raum. Grundsätzlich ist
                    dieser halböffentliche bis private Freiraum ein großes
                    Qualitätsmerkmal für das Wohnen in einem solchen Komplex.
                    Leider wurde in vergangenen Dekaden dieser wertvolle Raum
                    oft durch Parkplatzflächen, Garagen, Abstellflächen oder
                    unpassende - teilweise informelle - Anbauten stark
                    entwertet. Durch die Öffnung eines Hofes für die
                    Öffentlichkeit soll ein erhöhtes Bewusstsein für die
                    Qualität dieses innerstädtischen Freiraumes geschaffen
                    werden, der sonst fast ausschließlich im Verborgenen bleibt.
                    Identifikation mit dem Ort und Wertschätzung des erlebbaren
                    Stadtraumes. Zwei nicht zu unterschätzende Faktoren für eine
                    attraktive Nachbarschaft. Die Baulücke im nördlichen Bereich
                    der Goethestraße eignet sich hierbei wunderbar als „Tor“ zu
                    der neuen urbanen Idylle, die leicht abgesenkt in das Innere
                    eines Blockrandes einlädt. Eine gerüstartige Überbauung der
                    Eingangssituation ermöglicht neuen Freiraum für die
                    angrenzenden, oberen Geschosse, gleichzeitig bietet dieser
                    Rahmen neue Flächen für eine intensive Begrünung.
                </p>
            </div>
        </div>
    );
}
