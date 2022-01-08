import React from 'react';
import './BtnHome.css';
import { useNavigate } from 'react-router-dom'


export default function BtnHome() {

    const navigate = useNavigate();

    const goPortfolio = () => {
        navigate("/portfolio")
    }

    return (
        <div className='btnDicStyle'>
            <button className='btnHome' onClick={goPortfolio}>Voir mes projets</button>
        </div>
    )
}
