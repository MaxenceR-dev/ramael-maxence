import React from 'react';

import BtnHome from './BtnHome';
import './Home.css';
export default function Home() {
    return (
        <div className='home'>
            <h2 className='devTitle'>Développeur web</h2>
            <h3 className='fullStackTitle'>Full-Stack</h3>
            <BtnHome />
        </div>
    )
}
