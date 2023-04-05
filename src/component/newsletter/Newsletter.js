import React, { useState } from 'react';
import './newsletter.css'
import img from '../../assets/b0030a06-c306-49c8-a86d-3bc5d4d0a92a 1.png'

const Newsletter = () => {
    const [email, setEmail] = useState("")
    const handleSubmit = (e)=>{
        e.preventDefault()
        setEmail("")
    }



    return (
        <div className='newsletter'> 
            <div className='newsletter_store'>
                <img src={img} alt="/" />
                <div>
                    <h3>Regarde moi</h3>
                    <div className='newsletter_store_wrapper'>
                        <span className='newsletter_store_info'>la boutique</span>
                        <span className='newsletter_official'>officielle</span>
                    </div>
                </div>
            </div>
            <div className="newsletter_info">
                <h3>Newsletter</h3>
                <p>Inscrivez-vous pour etre alerté(e) en avant-première des exclusivités !</p>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={email} placeholder='email@example.com' onChange={(e)=>setEmail(e.target.value)}/>
                    <button>envoyer</button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;