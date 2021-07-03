import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';

const infoTexts = [
    ``,
    ``,
    ``,
    `<h1>Ein neues Straßenbild durch Ausbau der Alleen</h1>

    <p>Es gibt sehr attraktive Straßen und – leider auch – weniger beliebte Straßen im Goethequartier.
    Uns hat in unserer Analysephase sehr beschäftigt, worin genau die Unterschiede zwischen diesen Straßen liegen, was ihre Attraktivität ausmacht.
    Schaut man in die Goethestraße, fallen ein paar Besonderheiten auf: Eine verkehrsberuhigte Straße, Parkbuchten statt einfach nur „Parken am Bordstein“, Vorgärten mit viel Grün und Zierzäunen und vor allem: Bäume!
    Zwar lassen sich aufgrund der geringeren Straßenbreite nicht überall Vorgärten platzieren, allerdings sehen wir viel ungenutztes Potential in vielen Bereichen wie hier dargestellt in der Körnerstraße, der Blick gen Norden.
    Die parkenden Auto müssen wiedereinmal weichen bzw. sie werden unauffällig in Parkbuchten verlagert. Dadurch entsteht aber neue Fläche, die für Bäume, öffentliche Aufenthaltsräume und Radfahrer zur Verfügung steht. Das Motto: Mehr Aufenthaltsqualität für ALLE!
    Die Bäume spenden Schatten im Sommer, schaffen eine – wörtlich – natürliche Trennung zwischen Straßen- und Wohnraum, geben dem Straßenraum Struktur und fördern nicht zuletzt die Bildung von mehr Grün im Stadtraum.
    Nebenan in der Kistnerstraße hat man man bereits gezeigt, dass diese Potentiale erkannt wurden. Eine neue, schmalere Einbahnstraße, Parkbuchten und neue Bäume.
    Wir möchten jedoch weiter gehen. Fahrradfahrer erhalten eine eigene Spur, mehr Bäume auf beiden Straßenseiten und weitere Nutzungen der Zwischenräume sollen einen attraktiven öffentlichen Verkehrsraum schaffen, der auch Verweilqualität und Begegnungsflächen bietet.</p>
    `,
    `<h1>Autofreie Zonen – mehr Qualität für eine lebenswerte Nachbarschaft</h1>

    <p>Unsere Annahme, dass eine heterogene, offene und gemeinschaftlich geprägte Nachbarschaft einen großen Beitrag zur Lebensqualität innerhalb eines Stadtquartiers beiträgt, wird durch verschiedene Studien gestützt. So stellt eine Arbeit der Universität Oldenburg beispielsweise klar, dass Nachbarschaftskontakte – wenn auch locker – geschätzt und gesucht werden, sie gehören im besten Falle zum Alltag.
    Daher stellten wir uns der Aufgabe, den Menschen mehr Begegnungsfläche im öffentlichen und halböffentlichen Raum zu bieten.
    Unsere Ideen zu den Straßen Adolfstraße, Uhlandstraße und Lutherstraße (jeweils Abschnitte zwischen Goethestraße und Körnerstraße) zeigen eine gänzlich autofreie Zone, in der Grenzen verschwimmen und der so neu entstehende „Frei“-Raum sich von den Bewohnern zu eigen gemacht werden kann. Gewachsene Barrieren wie Bordsteine und Straßen weichen einem fahrradfreundlichen, entschleunigten Raum, in dem Nachbarschaft ein neues Gesicht bekommen kann.
    Hier schließen sich Gemeinschaftssinn und individuelle Gestaltung keineswegs aus.
    Jedoch hängt dieses Konzept stark von der Akzeptanz und auch von der Mitgestaltung der Anwohner ab, wobei die eigene Identifikation mit dem Quartier eine wichtige Rolle spielt.</p>

    Hinweis: Ein Ausgleich für Autoparker ist angedacht in Form eines Parkhauses an der Ecke Körnerstr./Eupener Str., siehe Konzept „Urban Gardeing“
    `,
    ``,
    ``,
    ``,
    ``,
    `Revitalisierung durch Gewerbe im Erdgeschoss

    Dunkel, vom öffentlichen Raum leicht einsehbar, daher oft mit Gardinen oder Rollläden zwanghaft geschützt vor der Außenwelt, zudem trotz „Erdgeschoss-Lage“ meist nicht barrierefrei:
    Die gründerzeitlichen Erdgeschosszonen sind zum Wohnen oftmals gar nicht geeignet.
    Sie sind aber auch gar nicht so gedacht! Die Erdgeschosszone war schon damals meistens mit Flächen für Einzelhandel und Nahversorgung im weitesten Sinne versehen und brachte so einen fast natürlich Mix aus Wohnen und Arbeiten ins Quartier. Laufkundschaft belebt das Treiben in den Straßen und fördert lebensnahes Arbeiten. Die Bewohner in den oberen Etagen profitieren von den nahen Arbeitsplätzen, der Versorgung „vor der Tür“ und der attraktiven Lage direkt in der Stadt.
    Politische Entscheidungen, der Fokus auf eine Innenstadtentwicklung in „Mitte“ und der bekannte Weggang des kleinteiligen Einzelhandels führten zu einer monostrukturellen Nutzung im Quartier – dem Wohnen.
    Im Sinne einer starken Belebung und Weiterentwicklung des Quartiers ist es unserer Auffassung nach unbedingt nötig, einen Teil der Erdgeschosszonen wieder für den Einzelhandel umzunutzen.
    An diesem Beispiel in der Uhlandstraße zeigen wir, wie eine unattraktive Erdgeschosswohnung wieder einem Gewerbe zugeführt werden kann und somit ein Mehrwert für das Quartier entstehen könnte. In diesem Beispiel könnte ein Fahrradgeschäft dort Platz finden – natürlich passend zu unserem Mobilitätskonzept, das sich mehr auf Fußgänger und Radler konzentriert und dem Auto nicht mehr so viel Bedeutung schenken möchte, wie es in der Vergangenheit üblich schien.
    `,
];

export default function Info({ categoryId, infoId }) {
    const [isActive, setIsActive] = useState(false);
    const cat_id = categoryId;
    const info_id = infoId;
    const { mapState, setDetails } = useMapContext();
    // const { mapState, setModal } = useMapContext();

    // const handleClick = () => {
    //     console.log('infoId:', infoId);
    //     setModal(true, infoTexts[infoId] || 'Lorem Ipsum, infoId = ' + infoId);
    // };
    const handleClick = () => {
        console.log('infoId:', infoId);
        setDetails(mapState.details === infoId ? null : infoId);
    };

    useEffect(() => {
        setIsActive(
            mapState.details === null && mapState.category === cat_id
                ? true
                : mapState.details === info_id
        );
    }, [mapState.category, mapState.details]);
    // }, [mapState.categoryStates[categoryId].isActive]);

    return (
        <div
            className={isActive ? 'info active' : 'info'}
            onClick={handleClick}
        ></div>
    );
}
