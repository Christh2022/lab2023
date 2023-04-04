import gsap from 'gsap';
import React, { useEffect } from 'react';
import './intro.css'

const Intro = ({pierre, isActive}) => {
    useEffect(()=>{
        gsap.timeline().fromTo('.pierre-image', {opacity: 0}, {
            opacity: 1, duration: 0.4, delay: 2.3, ease: "power2.inOut" 
        })

        gsap.timeline().fromTo('.look-at-me', {x: 100, rotation: 0, opacity: 0},
        { x: 0, rotation: 360, opacity: 1, duration: 0.4,  delay: 2.5, ease: "power2.inOut" });

        // Crée l'animation heartbeat
        gsap.fromTo('.billets', {scale: 2.3, opacity: 0}, {
            scale: 1,
            opacity: 1,
            ease: "power2.inOut", 
            duration: 0.4,
            delay: 2.9,

        });
    }, [])

    return (
        <section className='home_container_intro' style={isActive ? {zIndex: '-1'} : null}>
            <img src={pierre}alt='/' className="pierre-image"/>
            <div className='billet_and_look_at_me'>
                <h3 className='look-at-me'> regarde-moi <br/>tour</h3>
                <span className='billets'>billets</span>
            </div>
        </section>
    );
};

export default Intro;