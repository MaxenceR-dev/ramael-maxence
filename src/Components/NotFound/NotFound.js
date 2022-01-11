import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function NotFound() {

    
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/")
    }
    return (
        <div>
            <h2>Cette page n'existe pas </h2>
            <button onClick={goHome}>Retour à l'Accueil</button>
        </div>
    )
}
