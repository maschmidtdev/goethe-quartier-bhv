import React from 'react';
import {
    AnalyseVerortung,
    AnalyseZahlenFakten,
    AnalyseVerortungStadt,
    AnalyseWasWoIst,
    AnalyseBestandsfotos,
} from '../assets';

export default function Analyse() {
    return (
        <div>
            <section className='analyse'>
                {/* EINLEITUNG */}
                <article className='einleitung'>
                    <h1>Analyse</h1>
                    <p>
                        Eine umfassende Darstellung aller Analyse-Bestandteile
                        unserer Arbeit zum Goethequartier würde den Rahmen
                        dieses schnelllebigen Onlineformates vermutlich
                        sprengen. Dennoch möchten wir auf dieser Seite ein paar
                        Auszüge aus unserer intensiven Vorarbeit und
                        Auseinandersetzung mit dem Leher Quartier offenlegen.
                    </p>
                </article>
                {/* VERORTUNG */}
                <article className='verortung'>
                    <img src={AnalyseVerortung} alt='' />
                    <p>
                        Für Beteiligte wie selbstverständlich – für
                        außenstehende ersteinmal irritierend: Auch wenn
                        Bremerhavener gerne mal etwas anderes behaupten würden –
                        Bremerhaven gehört zu Bremen. Trotz der räumlichen
                        Trennung ist Bremerhaven in vielen behördlichen und
                        verwaltungstechnischen Belangen abhängig von Bremen, so
                        wird beispielsweise der wirtschaftlich wichtige
                        Umschlaghafen von Bremen betrieben, nicht von der Stadt
                        Bremerhaven selbst. Das steht in Zusammenhang mit vielen
                        sozialen und wirtschaftlichen Schwierigkeiten und
                        Herausforderungen der Stadt. Wichtige Aspekte, um auch
                        Lehe und das Goethequartier besser zu verstehen.
                    </p>
                </article>
                <hr />
                {/* ZAHLEN UND FAKTEN */}
                <article>
                    <img src={AnalyseZahlenFakten} alt='' />
                    <p>
                        Bei den Betrachtungen zu räumlichen und demografischen
                        Entwicklungen fällt besonders der stetige Rückgang der
                        Einwohnerzahlen auf. Diese statistischen Werte
                        bestätigen uns auch das, was wir in sozialen
                        Untersuchungen und Gesprächen zusätzlich erfahren
                        durften: Offensichtlich bietet die Stadt den jungen,
                        neugierigen Menschen nicht ausreichend Attraktivität, um
                        zu bleiben. Sie wandern ab und bleiben oft in den
                        nächsten großen Städten wie Bremen und Hamburg hängen.
                        Zwar gab es 2015 – entsprechend der größten
                        Flüchtlings-Zuwanderung jüngster Zeit – einen kurzen
                        Anstieg der Einwohnerzahlen, dieser verschärfte
                        allerdings die prekären sozialen Zustände der ehemaligen
                        Arbeiterstadt eher noch weiter, da Bremerhaven aufgrund
                        der geringen Wohnpreise vor allem auch alle weniger
                        zahlungskräftige Menschen anlockt.
                    </p>
                </article>
                <hr />
                {/* BESTANDSFOTOS */}
                <article>
                    <img src={AnalyseBestandsfotos} alt='' />
                    <p>
                        Gründerzeit ist nicht gleich Gründerzeit! Die Fotos aus
                        dem Quartier zeigen es: Mal aufwändige Stuckfassaden,
                        mal etwas schmucklosere Gebäudehüllen. Mal 5-geschossige
                        Mehrparteienhäuser, mal die alleinstehende Stadtvilla.
                        Ist erkennbar, wo sich der Neubau zwischengeschummelt
                        hat.
                    </p>
                </article>
                <hr />
                {/* VERORTUNG DER STADT */}
                <article>
                    <img src={AnalyseVerortungStadt} alt='' />
                </article>
                <hr />
                {/* LUFTBILD & LUFTBILD COLLAGE */}
                <article>{/* <img src={AnalyseVerortung} alt='' /> */}</article>
                {/* FLÄCHENNUTZUNGSPLAN */}
                <article>
                    {/* <img src={AnalyseVerortung} alt='' /> */}
                    <p>Zahlen und Fakten</p>
                </article>
                <hr />
                {/* WAS WO IST */}
                <article>
                    <img src={AnalyseWasWoIst} alt='' />
                    <p>
                        Auch ein Blick auf die örtliche Nahversorgung zeigt:
                        Dafür, dass wir uns hier im innerstädtischen Raum
                        befinden, ist die Angebotsvielfalt stark eingeschränkt.
                        Ein paar vereinzelte Dienstleister und Restaurants, ein
                        einziger kleiner Supermarkt und wenige
                        Übernachtungsmöglichkeiten spiegeln die Alltagsrealität
                        im Quartier. Besonders im Verhältnis zur Einwohnerdichte
                        fragt man sich schnell, ob hier nicht etwas nicht
                        stimmt. Möchte man einmal frühstücken gehen oder auch
                        nur einen kaffee kaufen, muss man sich in einen anderen
                        Teil der Stadt begeben. Die Rickmersstraße bietet ein
                        paar Lokale, wird jedoch aufgrund der Nähe zum
                        Rotlichtmilieu von vielen Menschen eher gemieden.
                        Ähnlich steht es um die stark befahrene Hafenstraße, die
                        von Familien eher als potentieller Gefahrenort
                        wahrgenommen wird. Eine attraktive Nahversorgung direkt
                        inmitten des Quartiers ist aktuell jedenfalls als sehr
                        schwach bis fehlend zu bewerten. Eine Anpassung des
                        Flächennutzungsplanes haben wir inhaltlich nicht weiter
                        ausgearbeitet, muss aber im Hintergrund mit bedacht
                        werdenWas wo ist
                    </p>
                </article>
                <hr />
            </section>
        </div>
    );
}
