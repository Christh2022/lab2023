import React from 'react';
import './booking.css'
import group from '../../assets/Group.png'

const Booking = () => {
    return (
        <>
            <div className='booking_wrapper'>
                <div>
                    <div>
                        <p>
                            Réservez votre billet 
                            <br/> dès maintenant 
                            <br/> Pour 30€ 
                        </p>
                        <span style={{cursor: 'pointer'}} onClick={()=>alert("hello")} >réserver</span>
                    </div>
                    <img src={group} alt="/" />
                </div>
            </div>
        </>
    );
};

export default Booking;