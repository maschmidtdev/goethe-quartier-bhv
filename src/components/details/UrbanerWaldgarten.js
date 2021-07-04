import React from 'react';
import Video from '../../components/Video';
import { VideoUrbanerWaldgarten } from '../../assets';

export default function UrbanerWaldgarten() {
    return (
        <div className='details-content'>
            <div className='details-flex-col'>
                <Video src={VideoUrbanerWaldgarten} auto={true} />
                <h2>Urbaner Waldgarten</h2>
                <p>
                    Auch „Mikro-Wald“ genannt beschreibt dieses Projekt neben
                    einem wichtigen Beitrag zum positiven Stadtklima und
                    wichtigen Lebensraum für fast vollständig vertriebene
                    Tierarten vor allem auch eine Methode der Umweltbildung: Wie
                    riecht Wald? Wir fühlt sich ein Laubboden an? Welche Tiere
                    verstecken sich in dem dichten Grün? Gerade in der
                    kindlichen Entwicklung fehlen oft wichtige Erfahrungen in
                    der Natur, die das Selbstverständnis unserer Umwelt prägen
                    und uns ihren Wert schätzen lehren. Urbaner Raum ist dicht
                    besiedelt und hart umkämpft. Wir müssen versuchen, uns
                    trotzdem oder gerade deswegen die Frei- und insbesondere
                    Grünräume zu erhalten und auszubauen. Der Freiraum auf dem
                    „Leher Pausenhof“ zwischen Uhlandstraße und Eupener Straße
                    ist bereits vorhanden und als Begegnungsraum angelegt. Wir
                    möchten jedoch einen Teil der versiegelten und weitestgehend
                    ungenutzten Fläche umnutzen und im Sinne einer
                    „Lernlandschaft“ zu einem natürlichen Erfahrungsraum
                    inmitten der gebauten Stadt entwickeln. Eine kleine Lichtung
                    als „Grünes Klassenzimmer“ angelegt soll Schulen aus der
                    Umgebung die Möglichkeit bieten, Unterricht auch einmal in
                    die Natur zu verlegen.
                </p>
            </div>
        </div>
    );
}
