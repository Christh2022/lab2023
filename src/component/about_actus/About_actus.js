import React from 'react';
import mockup from "../../assets/CD mockup 2.png";
import './About_actus.css'

const ABOUT_ACTUS = () => {
    const handleListener = ()=>{
        window.location = "https://pierredemaere.lnk.to/RegardeMoi"
    }
    return (
        <div className='home_container_about'>
            <img src={mockup} alt="mockup" />
            <div>
                <div>
                    <h3>album</h3>
                    <span>regarde moi</span>
                </div>
                <span onClick={handleListener}>écoutez</span>
            </div>
        </div>
    );
};

export default ABOUT_ACTUS;