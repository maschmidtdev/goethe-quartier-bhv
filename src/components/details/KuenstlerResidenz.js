import React from 'react';
import Video from '../../components/Video';
import { VideoKuenstlerResidenz } from '../../assets';

export default function KuenstlerResidenz() {
    return (
        <div className='details-content'>
            <div className='details-flex-col'>
                <Video src={VideoKuenstlerResidenz} auto={true} black={true} />
                <h2>Künstler-Residenz</h2>
                <p>
                    Das Gebäude an der Ecke Kistnerstraße/Körnerstraße fällt
                    derzeit auf durch seine verbaute und zugenagelte
                    Erdgeschosszone. Was auch immer man sich bei dem Umbau Ende
                    des 20. Jahrhunderts hierbei gedacht hat, die
                    unproportionalen Öffnungen und die schlecht ausgeführte
                    Riemchenfassade zeigen, wie achtlos man in Vergangenheit mit
                    der historischen Bausubstanz umgegangen ist. Die Lage des
                    Gebäudes flankiert den süd-westlichen Bereich des Quartiers,
                    dem wir mit der Überschrift Kunst/Kultur eine neue Bedeutung
                    und damit einen ersten Schritt zur Neuidentifikation
                    zuschreiben möchten. Neben dem neuen künstlerischen
                    Hochschulstandord Süd und dem vorhanden „Rockcenter“ mit
                    Konzertlocation und Proberäumen ergänzt dieses Konzept die
                    Bandweite des Angebotes. Das Konzept der Künstlerresidenz
                    ist keine Neuerfindung, darf aber in diesem Kontext neu
                    gedacht und adaptiert werden. Die Grundidee ist,
                    KünstlerInnen von überall in die Stadt zu holen und ihnen
                    hier einen attraktiven, temporären Wirkungsort zu bieten.
                    Das ist lukrativ für KünstlerInnen und ein vielfältiger,
                    kreativer Zugewinn für die Stadt und die künstlerische
                    Vernetzung. Die Künstler können im ersten Obergeschoss in
                    Ateliers kreativ arbeiten und in Wohnungen darüber finden
                    sie für den Zeitraum ihres Aufenthaltes Unterkunft. Die
                    Kreativschaffenden sind somit für die Zeit ihres
                    Aufenthaltes Teil des Quartiers, setzen neue Impulse und
                    verändern das Gesicht der Stadt aktiv mit. Das Erdgeschoss
                    wird zu einer Galerie umgebaut, in dem die Werke der
                    Wirkenden ausgestellt werden können. Das ganze Projekt ist
                    in freier Trägerschaft denkbar, etwa durch einen
                    Privatinvestor (z.B. Kunstliebhaber) oder im besten Falle
                    durch eine Stiftung oder einen Kunstverein.
                </p>
            </div>
        </div>
    );
}
