import React from 'react';
import { ImgMehrGrueneDaecher } from '../../assets';

export default function MehrGrueneDaecher() {
    return (
        <div className='details-content'>
            <div className='details-flex-col'>
                <div className='video-container'>
                    <img src={ImgMehrGrueneDaecher} alt='gruene daecher' />
                    <div className='copy-flex'>
                        <span></span>
                    </div>
                </div>
                <h2>Mehr grüne Dächer</h2>
                <p>
                    Der aktuelle Blick auf ein Luftbild vom Goethequartier ist
                    ernüchternd bis schockierend. Eine Karte voller schwarzer
                    Dächer. Meistens bituminöse Schweißbahnen. Fast jeder weiß,
                    wie sich das im Sommer aufheizt, Vorsicht
                    Verbrennungsgefahr! Wir haben es hier mit einem massiven
                    Klima-Erwärmer zu tun, dabei könnte das auch das Dach (die
                    „5. Fassade“) so viel mehr sein. Schon der weltberühmte
                    Architekt LeCorbusier schrieb 1923 in seinen 5 Punkten zu
                    einer neuen Architektur: „Der Dachgarten wird zum
                    bevorzugten Aufenthaltsort des Hauses und bedeutet außerdem
                    für eine Stadt den Wiedergewinn ihrer bebauten Fläche.“
                    Vielleicht kam dieser Impuls für die Gründerzeitbauten etwas
                    zu spät. Aber wir sollten die Chance nutzen, dies
                    nachzuholen! Immerhin verfügen die Gebäude aus der Zeit um
                    die Jahrhundertwende über so flach geneigte Dachaufbauten,
                    dass sie als Flachdach behandelt werden können und ein
                    grüner Aufbau – natürlich unter Berücksichtigung und
                    Ertüchtigung der Statik – recht simpel denkbar ist. Wie die
                    hier gezeigten Referenzbilder veranschaulichen, ist auch im
                    historisch urbanen Kontext von extensiver bis intensiver
                    Begrünung vieles denkbar. Wir würden diese noch um die
                    Nutzung von Photovoltaikanlagen ergänzen, um einen wichtigen
                    Anteil zur regenerativen Energiegewinnung beizutragen.
                    Hierbei sind Kleinstanlagen für Eigentümer genauso denkbar
                    wie die Gründung von Energie-Genossenschaften, die mehrere
                    Dachflächen bündeln und in Zusammenhang betreiben.
                </p>
            </div>
        </div>
    );
}
