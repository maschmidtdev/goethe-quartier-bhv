import React from 'react';
import Video from '../Video';
import { VideoRaumVsBaum } from '../../assets';

export default function RaumVsBaum() {
    return (
        <div className='details-content'>
            <div className='details-flex-col'>
                <Video src={VideoRaumVsBaum} auto={true} black={true} />
                <h2>Ein neues Straßenbild durch Ausbau der Alleen</h2>
                <p>
                    Es gibt sehr attraktive Straßen und – leider auch – weniger
                    beliebte Straßen im Goethequartier. Uns hat in unserer
                    Analysephase sehr beschäftigt, worin genau die Unterschiede
                    zwischen diesen Straßen liegen, was ihre Attraktivität
                    ausmacht. Schaut man in die Goethestraße, fallen ein paar
                    Besonderheiten auf: Eine verkehrsberuhigte Straße,
                    Parkbuchten statt einfach nur „Parken am Bordstein“,
                    Vorgärten mit viel Grün und Zierzäunen und vor allem: Bäume!
                    Zwar lassen sich aufgrund der geringeren Straßenbreite nicht
                    überall Vorgärten platzieren, allerdings sehen wir viel
                    ungenutztes Potential in vielen Bereichen wie hier
                    dargestellt in der Körnerstraße, der Blick gen Norden. Die
                    parkenden Auto müssen wiedereinmal weichen bzw. sie werden
                    unauffällig in Parkbuchten verlagert. Dadurch entsteht aber
                    neue Fläche, die für Bäume, öffentliche Aufenthaltsräume und
                    Radfahrer zur Verfügung steht. Das Motto: Mehr
                    Aufenthaltsqualität für ALLE! Die Bäume spenden Schatten im
                    Sommer, schaffen eine – wörtlich – natürliche Trennung
                    zwischen Straßen- und Wohnraum, geben dem Straßenraum
                    Struktur und fördern nicht zuletzt die Bildung von mehr Grün
                    im Stadtraum. Nebenan in der Kistnerstraße hat man man
                    bereits gezeigt, dass diese Potentiale erkannt wurden. Eine
                    neue, schmalere Einbahnstraße, Parkbuchten und neue Bäume.
                    Wir möchten jedoch weiter gehen. Fahrradfahrer erhalten eine
                    eigene Spur, mehr Bäume auf beiden Straßenseiten und weitere
                    Nutzungen der Zwischenräume sollen einen attraktiven
                    öffentlichen Verkehrsraum schaffen, der auch Verweilqualität
                    und Begegnungsflächen bietet.
                </p>
            </div>
        </div>
    );
}
