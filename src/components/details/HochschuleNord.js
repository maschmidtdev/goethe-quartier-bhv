import React from 'react';
import Video from '../../components/Video';
import { VideoKuenstlerResidenz } from '../../assets';

export default function HochSchulNord() {
    return (
        <div className='details-content'>
            <div className='details-flex-col'>
                {/* <Video src={VideoKuenstlerResidenz} auto={true} /> */}
                <h2>Hochschulstandort Nord</h2>
                <p>
                    Eine zentrale Erkenntnis unserer Analyse ist die Abwesenheit
                    einer ganz bestimmten Klientel, die wichtige soziale
                    Strukturen in der Stadt beeinflusst und mit gestaltet. Oft
                    sind es junge Menschen aus sozialen Bereichen, die sich
                    aktiv in der Politik, in Vereinen, Organisationen und
                    konkreten Aktionen und Events vor Ort einbringen und damit
                    massiv in die Gestaltung und Aktivität eines Lebensraumes
                    eingreifen. Meistens wirken sie dort auch als Bindeglied und
                    Kommunikationsbrücke zwischen hochrangigen
                    Entscheidungsträgern und den augenscheinlich unbeteiligten
                    Bürgern. Dabei treten sie oft in Kollektiven auf und bringen
                    indirekt neue Ideen und Bürgerbeteiligung mit auf den Weg.
                    Wichtige Bausteine in der Stadtentwicklung, die
                    bekanntermaßen niemals nur von einem Planungsgremium
                    bereitet werden können und sollten. Eine neue Fakultät der
                    Hochschule mit Fokus auf soziale Berufe (wie zum Beispiel
                    Soziale Arbeit, Erziehungswissenschaften, Psychologie,
                    Pädagogik, Sozialmanagement etc.) könnte Menschen mit
                    wichtigen Kompetenzen ausbilden, um Probleme vor Ort direkt
                    anzugehen. Zudem müssten junge Menschen mit Hang zu sozialen
                    Berufen nicht mehr die Stadt für eine Ausbildung verlassen
                    und wichtiges Potential wegtragen. Der Standort ist eine
                    recht großformatige Baulücke in der Lutherstraße mit
                    praktischer Nähe zur Atsrid-Lindgren-Schule und birgt
                    unserer Auffassung nach derzeit hohen Handlungsbedarf in
                    Bezug auf die Ausrichtung der Nachbarschaft hin zu mehr
                    Lebensqualität.
                </p>
            </div>
        </div>
    );
}
