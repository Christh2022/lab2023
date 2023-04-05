import React from 'react';
import NavbarComponent from '../component/navbar/navbarComponent';
import baniere from '../assets/banniere shop pdm 1.png'
import Footer from '../component/footer/Footer';
import pull from '../assets/pull.png'
import pantalon from '../assets/pantalonnn.png'
import casquette from '../assets/casquette_1.png'
import t_shirt from '../assets/t-shirt.png'
import lunette from '../assets/lunette.png'
import gif from '../assets/cover pour anim_1.gif'
import { useState } from 'react';
import location from '../assets/mockup popstore 1.png'
import './Boutique.css'

const Boutique = ({isActive, setIsActive}) => {
    const [stock, setStock] =useState( [
        {
            image: pull,
            description: "SWEAT - COVER “REGARDE-MOI” blanc",
            prix: '50€',
        }, 
        {
            image: pantalon,
            description: "JEAN - “REGARDE-MOI” avec logo",
            prix: "40€",
        }, 
        {
            image: casquette,
            description: "CASQUETTE - “REGARDE-MOI” noir",
            prix: "15€",
        }, 
        {
            image: t_shirt,
            description: "TSHIRT - “REGARDE-MOI” noir",
            prix: "35€",
        }, 
        {
            image: lunette,
            description: "Lunettes - “REGARDE-MOI” noir avec logo",
            prix: "15€",
        }, {
            image: gif,
            description: "CD - “REGARDE-MOI” ",
            prix: "16€",
        },
    ])

    console.log(setStock);




    return (
        <div className='actus_wrapper' style={isActive ? {height: '99vh', overflow: 'hidden', position: 'fixed'} : null}>
            <div style={{position: 'relative',top: '0', zIndex: '999'}}>
                <NavbarComponent setIsActive={setIsActive} isActive={isActive}/>
            </div>
            <div>
                <img src={baniere} alt="/" />
            </div>
            <div className='store_article'>
                <div className='store_title'>
                    <h2>COLLECTION “REGARDE-MOI” - 2023</h2>
                    <span>DISPONIBLE ÉGALEMENT EN VERSION ENFANT</span>
                </div>
                <ul className="store_body">
                    {stock.map((value, index)=>
                        <li key={index}>
                            <img src={value.image} alt="/" />
                            <div>
                                <h6>{value.description}</h6>
                                <span>{value.prix}</span>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
            <div className="store_location">
                <img src={location} alt="/" />
            </div>
            <div className='stor_location_info'>
                <span>Ouverture le 10 Avril 2023 </span>
                <span>au 3 rue Charles De Gaulle - Paris 13</span>
            </div>
            <Footer/>
        </div>
    );
};

export default Boutique;