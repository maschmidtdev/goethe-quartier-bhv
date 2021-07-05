import React from 'react';
import {
    AnalyseVerortung,
    AnalyseZahlenFakten,
    AnalyseVerortungStadt,
    AnalyseWasWoIst,
    AnalyseBestandsfotos,
    AnalyseHandlungsbedarfe_1,
    AnalyseHandlungsbedarfe_2,
    AnalyseHandlungsbedarfe_3,
    AnalyseHandlungsbedarfe_4,
    AnalyseSwot,
    AnalyseThemenfelder_1,
    AnalyseThemenfelder_2,
    AnalyseFlaechennutzung,
    AnalyseLuftbild,
    AnalyseLuftbildCollage,
} from '../assets';

export default function Analyse() {
    return (
        <section className='analyse'>
            {/* EINLEITUNG */}
            <article className='einleitung'>
                <h1>Analyse</h1>
                <p>
                    Eine umfassende Darstellung aller Analyse-Bestandteile
                    unserer Arbeit zum Goethequartier würde den Rahmen dieses
                    schnelllebigen Onlineformates vermutlich sprengen. Dennoch
                    möchten wir auf dieser Seite ein paar Auszüge aus unserer
                    intensiven Vorarbeit und Auseinandersetzung mit dem Leher
                    Quartier offenlegen.
                </p>
            </article>
            {/* VERORTUNG */}
            <article className='verortung'>
                <img src={AnalyseVerortung} alt='' />
                <p>
                    Für Beteiligte wie selbstverständlich – für außenstehende
                    ersteinmal irritierend: Auch wenn Bremerhavener gerne mal
                    etwas anderes behaupten würden – Bremerhaven gehört zu
                    Bremen. Trotz der räumlichen Trennung ist Bremerhaven in
                    vielen behördlichen und verwaltungstechnischen Belangen
                    abhängig von Bremen, so wird beispielsweise der
                    wirtschaftlich wichtige Umschlaghafen von Bremen betrieben,
                    nicht von der Stadt Bremerhaven selbst. Das steht in
                    Zusammenhang mit vielen sozialen und wirtschaftlichen
                    Schwierigkeiten und Herausforderungen der Stadt. Wichtige
                    Aspekte, um auch Lehe und das Goethequartier besser zu
                    verstehen.
                </p>
            </article>
            <hr />
            {/* ZAHLEN UND FAKTEN */}
            <article>
                <img src={AnalyseZahlenFakten} alt='' />
                <p>
                    Bei den Betrachtungen zu räumlichen und demografischen
                    Entwicklungen fällt besonders der stetige Rückgang der
                    Einwohnerzahlen auf. Diese statistischen Werte bestätigen
                    uns auch das, was wir in sozialen Untersuchungen und
                    Gesprächen zusätzlich erfahren durften: Offensichtlich
                    bietet die Stadt den jungen, neugierigen Menschen nicht
                    ausreichend Attraktivität, um zu bleiben. Sie wandern ab und
                    bleiben oft in den nächsten großen Städten wie Bremen und
                    Hamburg hängen. Zwar gab es 2015 – entsprechend der größten
                    Flüchtlings-Zuwanderung jüngster Zeit – einen kurzen Anstieg
                    der Einwohnerzahlen, dieser verschärfte allerdings die
                    prekären sozialen Zustände der ehemaligen Arbeiterstadt eher
                    noch weiter, da Bremerhaven aufgrund der geringen Wohnpreise
                    vor allem auch alle weniger zahlungskräftige Menschen
                    anlockt.
                </p>
            </article>
            <hr />
            {/* BESTANDSFOTOS */}
            <article>
                <img src={AnalyseBestandsfotos} alt='' />
                <p>
                    Gründerzeit ist nicht gleich Gründerzeit! Die Fotos aus dem
                    Quartier zeigen es: Mal aufwändige Stuckfassaden, mal etwas
                    schmucklosere Gebäudehüllen. Mal 5-geschossige
                    Mehrparteienhäuser, mal die alleinstehende Stadtvilla. Ist
                    erkennbar, wo sich der Neubau zwischengeschummelt hat.
                </p>
            </article>
            <hr />
            {/* VERORTUNG DER STADT */}
            <article>
                <img src={AnalyseVerortungStadt} alt='' />
            </article>
            <hr />
            {/* LUFTBILD & LUFTBILD COLLAGE */}
            <article>
                <img src={AnalyseLuftbild} alt='' />
                <img src={AnalyseLuftbildCollage} alt='' />
                <p>
                    Ein Blick von oben auf das Quartier leistet ebenso wichtige
                    Informationen. Ziemlich früh wurde uns so klar, dass die
                    meisten Grünflächen auf kurzgehaltene Rasenflächen
                    beschränkt sind. Zudem sind die etlichen schwarzen, flachen
                    Dachflächen für uns geradezu ein Alarmsignal gewesen.
                </p>
            </article>
            {/* FLÄCHENNUTZUNGSPLAN */}
            <article>
                <img src={AnalyseFlaechennutzung} alt='' />
                <p>
                    Im <strong>Flächennutzungsplan</strong> wird festgelegt,
                    welche Nutzungen in bestimmten Arealen zulässig sein sollen.
                    Auffällig ist, dass das Goethequartier fast ausschließlich
                    von Wohnbebauung geprägt ist. Lediglich der Rand an der
                    Hafenstraße sowie ein großer Streifen an der Rickmersstraße
                    beherbergen vielfältige Einzelhandelsgeschäfte. Wir dürfen
                    an dieser Stelle der Analyse schon einmal vorwegnehmen, dass
                    genau hier eine der Schwächen des Quartiers sichtbar wird...
                </p>
            </article>
            <hr />
            {/* WAS WO IST */}
            <article>
                <img src={AnalyseWasWoIst} alt='' />
                <p>
                    Auch ein Blick auf die örtliche Nahversorgung zeigt: Dafür,
                    dass wir uns hier im innerstädtischen Raum befinden, ist die
                    Angebotsvielfalt stark eingeschränkt. Ein paar vereinzelte
                    Dienstleister und Restaurants, ein einziger kleiner
                    Supermarkt und wenige Übernachtungsmöglichkeiten spiegeln
                    die Alltagsrealität im Quartier. Besonders im Verhältnis zur
                    Einwohnerdichte fragt man sich schnell, ob hier nicht etwas
                    nicht stimmt. Möchte man einmal frühstücken gehen oder auch
                    nur einen kaffee kaufen, muss man sich in einen anderen Teil
                    der Stadt begeben. Die Rickmersstraße bietet ein paar
                    Lokale, wird jedoch aufgrund der Nähe zum Rotlichtmilieu von
                    vielen Menschen eher gemieden. Ähnlich steht es um die stark
                    befahrene Hafenstraße, die von Familien eher als
                    potentieller Gefahrenort wahrgenommen wird. Eine attraktive
                    Nahversorgung direkt inmitten des Quartiers ist aktuell
                    jedenfalls als sehr schwach bis fehlend zu bewerten. Eine
                    Anpassung des Flächennutzungsplanes haben wir inhaltlich
                    nicht weiter ausgearbeitet, muss aber im Hintergrund mit
                    bedacht werden.
                </p>
            </article>
            <hr />
            {/* HANDLUNGSBEDARFE */}
            <article>
                <img src={AnalyseHandlungsbedarfe_1} alt='' />
                <img src={AnalyseHandlungsbedarfe_2} alt='' />
                <img src={AnalyseHandlungsbedarfe_3} alt='' />
                <img src={AnalyseHandlungsbedarfe_4} alt='' />
                <p>
                    Der Verfall der historischen Gründerzeitbebauung ist schon
                    seit vielen Jahren Thema, weswegen man sich vor ein paar
                    Jahren mit dem Stadtplanungsamt auf eine sogenannte
                    Handlungsbedarfskarte geeinigt hat, die der Dringlichkeit
                    nach Gebäude und ihre Handlungsbedarfe kategorisiert. Das
                    Vorkaufsortsgesetz erweiterte die rechtliche Handhabe, um
                    verfallende „Schrottimmobilien“ zu retten und in die
                    richtigen Hände zu geben. Uns ist in unserer Analysephase
                    Anfang 2021 aufgefallen, dass glücklicherweise bereits ein
                    großer Teil dieser Gebäude gerettet und saniert worden ist.
                    Offensichtlich hat man den Wert und das Potential der Bauten
                    erkannt, darauf kann man aufbauen!
                </p>
            </article>
            <hr />
            {/* SWOT ANALYSE */}
            <article>
                <img src={AnalyseSwot} alt='' />
                <p>
                    Stärken – Schwächen – Potentiale – Risiken In diesen
                    Kategorien lässt sich strukturieren und ordnen, was die
                    Entwicklung des Quartiers ausmacht und ausmachen könnte.
                    Dabei entscheidet die Quantität nie über die Qualität von
                    Faktoren. Die Menge an Potentialen gibt bereits einen
                    Hinweis darauf, was alles möglich wäre...
                </p>
            </article>
            <hr />
            {/* THEMENFELDER */}
            <article>
                <img src={AnalyseThemenfelder_1} alt='' />
                <img src={AnalyseThemenfelder_2} alt='' />
                <p>
                    Stadt- bzw. Quartiersentwicklung ist dermaßen vielfältig,
                    komplex und individuell, dass wir erst einmal Ordnung in die
                    Menge der möglichen Themen für das Goethequartier gebracht
                    haben. Zunächst gab es eine Sammlung von prinzipiell
                    möglichen Themenfeldern für eine Quartiersentwicklung. Durch
                    verschiedene Analyse-Verfahren wie Bewohner-Befragungen,
                    eine Bestandsaufnahme vor Ort oder Interviews mit Akteuren
                    aus dem Quartier filterten wir die relevanten Themen für
                    unsere Schwerpunktsetzung. Durch Recherche und
                    anschließendes Brainstorming gewannen wir eine Übersicht von
                    Themen und konkreten Ideen, die das Quartier in der
                    Entwicklung stärken könnten. Nicht alle Ideen konnten im
                    zeitlich beschränkten Rahmen der Masterthesis umgesetzt bzw.
                    visualisiert werden. Wir sehen diese Übersicht auch als eine
                    Anregung für das Weitermachen. Für Menschen, die sich
                    ebenfalls für das Quartier begeistern. Ebenso kann diese
                    Liste immer weiter fortgeschrieben werden
                </p>
            </article>
            <hr />
        </section>
    );
}
