import React, { useState, useEffect } from 'react';
import { useMapContext } from '../../context/map_context';
import { CategoryStadtGruen, DetailsUrbanGardening } from '../../assets';

export default function UrbanGardening() {
    // const { mapState, setModal } = useMapContext();
    // const [isOpen, setIsOpen] = useState(mapState.isModalOpen);
    // const [text, setText] = useState(mapState.modalText);

    // useEffect(() => {
    //     setText(mapState.modalText);
    //     setIsOpen(mapState.isModalOpen);
    // }, [mapState.isModalOpen, mapState.modalText]);

    return (
        <div className='details-urban-gardening'>
            <div className='flex-1'>
                <div className='flex-2'>
                    <img src={CategoryStadtGruen} alt='' />
                    <p></p>
                </div>
                <img src={DetailsUrbanGardening} alt='' />
            </div>
        </div>
    );
}
