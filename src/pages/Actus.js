import React, { useState } from 'react';
import NavbarComponent from '../component/navbar/navbarComponent';
import './Actus.css'
import rectangle from '../assets/Rectangle 23.png'
import Footer from '../component/footer/Footer';
import img1 from '../assets/awrd pierre de marre 1.png'
import {RxCross2} from 'react-icons/rx'

const Actus = ({isActive, setIsActive}) => {
    const [tab, setTab] = useState([img1, img1, img1, img1, img1, img1, img1])
    const [email, setEmail] = useState("")
    const [actus, setActus] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setEmail("")
    }

    const handleSeeActus = ()=>{
        setActus(!actus)
    }

    console.log(setTab);
    return (
        <>
            <div className='actus_wrapper' style={isActive || actus ? {height: '99vh', overflow: 'hidden', position: 'fixed'} : null}>
                <div style={{position: 'relative',top: '0', zIndex: '999'}}>
                    <NavbarComponent setIsActive={setIsActive} isActive={isActive}/>
                </div>
                <div>
                    <img src={rectangle} alt="" />
                </div>
                <div className='actus_article'>
                    <article>
                        {tab.map((value, index) =>
                        <div key={index}>
                            <img src={value} alt="/" />
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                            </span>
                            <button onClick={handleSeeActus}>lire plus</button>
                        </div>)}
                    </article>
                </div>
                <div className='newsletter actus'> 
                    <div className="newsletter_info">
                        <h3>Newsletter</h3>
                        <p>Inscrivez-vous pour etre alerté(e) en avant-première des exclusivités !</p>
                        <form onSubmit={handleSubmit}>
                            <input type="text" value={email} placeholder='email@example.com' onChange={(e)=>setEmail(e.target.value)}/>
                            <button>envoyer</button>
                        </form>
                    </div>
                </div>
                <Footer/>
            </div>

            {actus && 
                <div style={{width: '100%', height: '100vh', padding: '5rem 2rem'}}>
                    <div className='actus_wrapper_infos'>
                        <div>
                            <img src={img1} alt="/" />
                        </div>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.... 
                        </p>
                    </div>
                    <span className='actus_wrapper_infos_close' onClick={handleSeeActus}>
                        <RxCross2/>
                    </span>
                </div>
            }
        </>
    );
};

export default Actus;