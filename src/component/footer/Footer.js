import React from 'react';
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsTiktok} from 'react-icons/bs'
const Footer = () => {
    const handleInstagram = ()=>{
        window.location = "https://instagram.com/pierre.de.maere_lab?igshid=YmMyMTA2M2Y="
    }

    const handleTiktok = ()=>{
        window.location = "https://www.tiktok.com/@pierre.de.maere_lab?_t=8bGeZAjeeHu&_r=1"
    }
    return (
        <div className='footer'>
            <div className='social_media_footer'>
                <span onClick={handleInstagram}><AiOutlineInstagram/></span>
                <span onClick={handleTiktok}><BsTiktok/></span>
            </div>
            <p className='copyright_footer'>@2023 - mentions légales - Vie privée - infos cookies</p>
        </div>
    );
};

export default Footer;