import gsap from 'gsap';
import React , { useEffect }  from 'react';
import Logo from '../assets/logo PDM-03-03-03.png'
import Navbar from '../component/navbar/Navbar';
import pierre from '../assets/pierre.png'
import './Home.css'
import Intro from '../component/intro/Intro';
import Clip from '../component/clip/Clip';
import ABOUT_ACTUS from '../component/about_actus/About_actus';
import Award from '../component/award/Award';
import Newsletter from '../component/newsletter/Newsletter';
import Footer from '../component/footer/Footer';

const Home = ({isActive, setIsActive}) => {

    
    
    useEffect(()=>{
        gsap.timeline().fromTo('.loading-page', {opacity: 1} , {
            opacity: 0,
            duration: 2,
            delay: 1.4,
            display: 'none'
        })
    
        gsap.timeline().fromTo('.logo-name', {y: 50, opacity: 0,}, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.6
        })

        gsap.timeline().fromTo('.loading-logo', { x: 60, opacity: 0 }, {
            x: 0,
            opacity: 1,
            duration: 0.6,
            delay: 0.7
        })
    }, [])

    return (
        <>
            <div className={isActive ?  'home-container overflow_hidden' :'home-container'} style={isActive? {background: "none"} : null}>
                <Navbar Logo={Logo} setIsActive={setIsActive} isActive={isActive} />
                <Intro pierre={pierre} isActive={isActive}/>
                <div style={{width: '100%'}}>
                    {!isActive &&<> <div className='home_container_wrapper'>
                        
                        <Clip/>
                        <ABOUT_ACTUS />
                        <Award/>
                        <Newsletter/>
                        

                        {/*
                        <section className='home_container_newsletter'></section> */}
                    </div>
                    <Footer/></>}
                </div> 
            </div>

            <div className="loading-page">
                <img src={Logo} alt='logo' className='loading-logo'/>
                <div className="logo-conatiner">
                    <div className="logo-name">
                        Pierre de Maere
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;