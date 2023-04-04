import React from 'react';
import img1 from '../../assets/nouvelle affiche V2 2.png'
import img2 from '../../assets/Plan de travail 2 copie@1x_2.jpg'
import './listetournee.css'

const ListeTournee = () => {
    return (
        <div className='list_tournee'>
            <img src={img1} alt="/"/>
            <img src={img2} alt="/"/>
        </div>
    );
};

export default ListeTournee;