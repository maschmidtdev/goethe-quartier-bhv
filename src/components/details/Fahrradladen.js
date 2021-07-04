import React from 'react';
import Video from '../../components/Video';
import { VideoKuenstlerResidenz } from '../../assets';

export default function Fahrradladen() {
    return (
        <div className='details-content'>
            <div className='details-flex-col'>
                {/* <Video src={VideoKuenstlerResidenz} auto={true} /> */}
                <h2>Revitalisierung durch Gewerbe im Erdgeschoss</h2>
                <h3> – der Fahrradladen</h3>
                <p>
                    Dunkel, vom öffentlichen Raum leicht einsehbar, daher oft
                    mit Gardinen oder Rollläden zwanghaft geschützt vor der
                    Außenwelt, zudem trotz „Erdgeschoss-Lage“ meist nicht
                    barrierefrei: Die gründerzeitlichen Erdgeschosszonen sind
                    zum Wohnen oftmals gar nicht geeignet. Sie sind aber auch
                    gar nicht so gedacht! Die Erdgeschosszone war schon damals
                    meistens mit Flächen für Einzelhandel und Nahversorgung im
                    weitesten Sinne versehen und brachte so einen fast natürlich
                    Mix aus Wohnen und Arbeiten ins Quartier. Laufkundschaft
                    belebt das Treiben in den Straßen und fördert lebensnahes
                    Arbeiten. Die Bewohner in den oberen Etagen profitieren von
                    den nahen Arbeitsplätzen, der Versorgung „vor der Tür“ und
                    der attraktiven Lage direkt in der Stadt. Politische
                    Entscheidungen, der Fokus auf eine Innenstadtentwicklung in
                    „Mitte“ und der bekannte Weggang des kleinteiligen
                    Einzelhandels führten zu einer monostrukturellen Nutzung im
                    Quartier – dem Wohnen. Im Sinne einer starken Belebung und
                    Weiterentwicklung des Quartiers ist es unserer Auffassung
                    nach unbedingt nötig, einen Teil der Erdgeschosszonen wieder
                    für den Einzelhandel umzunutzen. An diesem Beispiel in der
                    Uhlandstraße zeigen wir, wie eine unattraktive
                    Erdgeschosswohnung wieder einem Gewerbe zugeführt werden
                    kann und somit ein Mehrwert für das Quartier entstehen
                    könnte. In diesem Beispiel könnte ein Fahrradgeschäft dort
                    Platz finden – natürlich passend zu unserem
                    Mobilitätskonzept, das sich mehr auf Fußgänger und Radler
                    konzentriert als auf individuellen PKW-Verkehr.
                </p>
            </div>
        </div>
    );
}
