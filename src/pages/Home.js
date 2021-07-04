import React from 'react';
import { Videosource } from '../assets/index';
import Video from '../components/Video';

export default function Home() {
    return (
        <div id='home'>
            {/* <h1>Home</h1> */}
            <Video src={Videosource} />
        </div>
    );
}
