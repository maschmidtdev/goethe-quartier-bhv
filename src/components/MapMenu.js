import React, { useState, useEffect } from 'react';
import Category from '../components/Category';
import { useMapContext } from '../context/map_context';

export default function MapMenu() {
    const { mapState } = useMapContext();
    const [category, setCategory] = useState(mapState.category);

    useEffect(() => {
        setCategory(mapState.category);
    }, [mapState.category]);

    return (
        // <div className='map-menu'>
        <div className={`${category !== null ? 'map-menu hide' : 'map-menu'}`}>
            <h1>Themenbereiche</h1>
            <h3>Du hast jetzt die Wahl!</h3>
            <p>
                Wir haben unsere Ideen für das Goethequartier in vier Kategorien
                unterteile, um es etwas übersichtlicher zu gestalten. Hinter
                jeder Kategorie verbergen sich mehrere einzelne Ideen und
                Projekte, die das Goethequartier noch lebenswerter machen
                könnten. Klicke dich durch die Kategorien und entdecke, was in
                uznserer Stadt alles möglich wäre:
            </p>
            <div className='categories-flex'>
                <Category id={0} />
                <Category id={1} />
                <Category id={2} />
                <Category id={3} />
            </div>
        </div>
    );
}
