import React from 'react';
import './footer.css'
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsTiktok} from 'react-icons/bs'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='social_media_footer'>
                <span><AiOutlineInstagram/></span>
                <span><BsTiktok/></span>
            </div>
            <p className='copyright_footer'>@2023 - mentions légales - Vie privée - infos cookies</p>
        </div>
    );
};

export default Footer;