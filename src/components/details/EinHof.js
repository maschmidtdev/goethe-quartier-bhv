import React, { useState, useEffect } from 'react';
import { useMapContext } from '../../context/map_context';

export default function EinHof() {
    // const { mapState, setModal } = useMapContext();
    // const [isOpen, setIsOpen] = useState(mapState.isModalOpen);
    // const [text, setText] = useState(mapState.modalText);

    // useEffect(() => {
    //     setText(mapState.modalText);
    //     setIsOpen(mapState.isModalOpen);
    // }, [mapState.isModalOpen, mapState.modalText]);

    return (
        <div className='details-content'>
            <h1>Ein Hof für alle</h1>
        </div>
    );
}
