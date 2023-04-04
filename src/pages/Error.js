import React from 'react';
import {useNavigate} from 'react-router-dom'

const Error = ({setIsActive}) => {
    const navigate = useNavigate()
    return (
        <div style={{height: '100%', display: 'flex', flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center', fontSize: '2rem', textTransform: 'uppercase'}}>
            <p>page non trouvée</p>
            <span onClick={()=>{navigate('/'); setIsActive(false)}} style={{fontSize: '1rem', cursor: 'pointer'}}>Retour à la page d'accueil</span>
        </div>
    );
};

export default Error;