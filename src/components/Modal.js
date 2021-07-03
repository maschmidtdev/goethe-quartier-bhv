import React, { useState, useEffect } from 'react';
import { useMapContext } from '../context/map_context';

export default function Modal() {
    const { mapState, setModal } = useMapContext();
    const [isOpen, setIsOpen] = useState(mapState.isModalOpen);
    const [text, setText] = useState(mapState.modalText);

    useEffect(() => {
        setText(mapState.modalText);
        setIsOpen(mapState.isModalOpen);
    }, [mapState.isModalOpen, mapState.modalText]);

    return (
        <div className={`${isOpen ? 'modal open' : 'modal'}`}>
            <div className='modal-content'>
                <div className='close-btn'>
                    <strong onClick={() => setModal(false)}>X</strong>
                </div>
                <div dangerouslySetInnerHTML={{ __html: text }}></div>
            </div>
        </div>
    );
}
