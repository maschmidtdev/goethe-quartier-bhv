import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';
import {
    CategoryAlteWege,
    CategoryGebaude,
    CategoryWirtschaft,
    CategoryStadtGruen,
} from '../assets';

const headings = [
    'Alte Gebäude - neue Nutzungen',
    'alte Wege - neue Räume',
    'Stadt-Grün',
    'eine Chance für die Wirtschaft',
];
const texts = [
    `Ganz klar, das Quartier lebt von der Atmosphäre der Gründerzeitbebauung. 
    Doch ist das Modell "Zweizimmer-Küche-Bad" das einzige, was hier denkbar ist?
    Schaue selbst...`,
    `Eine Straße ist eine Straße. Ein Weg ist ein Weg. Mag man ersteinmal denken.
    Doch versuchen wir einmal, das Quartier mit neuen Augen zu sehen...`,
    `Die "Lunge" einer Stadt, so werden urbane Grünräume gerne genannt.
    Wie unterschiedlich das in unserem Quartier aussehen könnte, dafür zeigen wir euch ein paar Ideen...`,
    `Der "Motor" eienr Nation, so wird die Wirtschaft immer wieder betitelt.
    Dieser Motor soll auch in Lehe wieder zum Laufen gebracht werden...`,
];
const images = [
    CategoryGebaude,
    CategoryAlteWege,
    CategoryStadtGruen,
    CategoryWirtschaft,
];

export default function Category({ id }) {
    const { mapState, setCategory } = useMapContext();
    const [isActive, setIsActive] = useState(
        mapState.categoryStates[id].isActive
    );

    const handleClick = (id) => {
        setIsActive(true);
        setCategory(id);
    };

    return (
        <div className='category-container'>
            <img
                src={images[id]}
                alt='Themenbereich'
                onClick={() => handleClick(id)}
                className={`${isActive ? 'active' : null}`}
            />
            <h3>{headings[id]}</h3>
            <p>{texts[id]}</p>
        </div>
    );
}
