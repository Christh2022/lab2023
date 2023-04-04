import React from 'react';
import NavbarComponent from '../component/navbar/navbarComponent';
import './Tournee.css'
import Booking from '../component/booking/Booking';
import Carousel from '../component/carousel/Carousel';
import Footer from '../component/footer/Footer';
import ListeTournee from '../component/listetournee/ListeTournee';


const Tournee = ({isActive, setIsActive}) => {
    return (
        <div className='tournee_wrapper' style={isActive? {height: '99vh', overflow: 'hidden'} : null}>
            <div style={{position: 'relative',top: '0', zIndex: '999'}}>
                <NavbarComponent setIsActive={setIsActive} isActive={isActive}/>
            </div>
            <div>
                <div>
                    <h3>Vivez l'expérience Pierre De Maere sur scène !</h3>
                    <p>
                        Pour son nouveau projet “regarde-moi” Pierre De Maere
                        <br/> est en tournée en France, en Belgique et au Pays-Bas
                        <br/> du 28 Janvier au 18 Mai 2023.
                    </p>
                    <span>réserver</span>
                </div>
            </div>
            <div>
                <ListeTournee/>
            </div>
            <div>
                <Booking/>
            </div>
            <div style={{width: '100%'}}>
                <Carousel/>
            </div>
            <Footer/>
        </div>
    );
};

export default Tournee;