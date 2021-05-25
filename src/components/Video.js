import React from 'react';
import { Videosource } from '../assets/index';

export default function Video() {
    console.log(Videosource);

    return (
        <div>
            <video width='750' height='500' controls>
                <source src={Videosource} type='video/mp4' />
            </video>
        </div>
    );
}
