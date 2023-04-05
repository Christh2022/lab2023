import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {IoIosMenu} from 'react-icons/io'
import {RxCross2} from 'react-icons/rx'
import {BiCartDownload} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'
import Logo from '../../assets/logo PDM-03-03-03.png'
import gsap  from 'gsap';
import {useNavigate} from 'react-router-dom'

const NavbarComponent = ({isActive, setIsActive}) => {
    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false);

    useEffect(()=>{
        
        if(showMenu === true){
            gsap.timeline().fromTo('.close-btn-mobile', {opacity: 0, x: '100%'}, {
                x: '0',
                opacity: 1,
                duration: 0.4,
                delay: 0
            })

            gsap.timeline().fromTo('.nav-item', {y: 100, opacity: 0}, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                delay: 0.6
            })
        }
         
    }, [showMenu])

    const handleMobile= ()=>{
        setShowMenu(!showMenu)
        setIsActive(!showMenu)
    }

    const handlehideNavItem = ()=>{
        gsap.timeline().fromTo('.nav-item', {y: 0, opacity: 1}, {
            y: '100%',
            opacity: 0,
            duration: 0.4,
            delay: 0.6
        })

        setTimeout(()=>{
            setShowMenu(!showMenu)
            setIsActive(!showMenu)
        }, 1200)
    }

    const handleIsActive = ()=>{
        if (isActive && !showMenu ) {
            setIsActive(false)
        }

        console.log(isActive, showMenu);
    }
    return (
        <div className='home-menu' style={{padding: '0.4rem 0'}}>
            <nav>
                <div className='menu-nav'>
                    <ul>
                        <li className='item-nav-home'> <Link to="/">accueil </Link></li>
                        <li className='item-nav-tournee'> <Link to="/tournee">tournée </Link></li>
                    </ul>
                    <div className='nav-logo'>
                        <Link to="/"><img src={Logo} alt='logo'/> </Link>
                    </div>
                    <ul>
                        <li className='item-nav-actus'> <Link to="/actus">actus </Link></li>
                        <li className='item-nav-store'> <Link to="/boutique" >boutique </Link></li>
                    </ul>
                </div>
                <span className='nav-menu-icons'> <AiOutlineUser/> <BiCartDownload/> </span>
            </nav>

            <div className="mobile-home-menu">
                <nav>
                    <div className='nav-logo'>
                        <img src={Logo} alt='logo'/>
                    </div>
                    <ul className={showMenu? 'show-mobile-menu' : 'hide-mobile-menu'}>
                        <li onClick={()=>{handleIsActive(); navigate('/')}}>
                             <Link to=''>
                                <span data-clip="accueil" className='nav-item'>accueil</span> 
                             </Link>
                        </li>
                        <li onClick={()=>{handleIsActive(); navigate('/tournee')}}>
                             <Link>
                                <span data-clip="tournée" className='nav-item'>tournée</span> 
                             </Link>
                        </li>
                        <li onClick={()=>{handleIsActive(); navigate('/actus')}}>
                             <Link>
                                <span data-clip="actus" className='nav-item'>actus</span> 
                             </Link>
                        </li>
                        <li onClick={()=>{handleIsActive(); navigate('/boutique')}}>
                             <Link >
                                <span data-clip="boutique" className='nav-item'>boutique</span> 
                             </Link>
                        </li>
                    </ul>
                    <button className={showMenu? 'mobile-btn-menu hide' : 'mobile-btn-menu'} onClick={showMenu? handlehideNavItem : handleMobile}>
                        <span> <AiOutlineUser/> <BiCartDownload/></span>
                        {showMenu?  <span className='close-btn-mobile'><RxCross2/></span> : <span><IoIosMenu /></span>}
                    </button>
                </nav>
            </div>
        </div>
    );
};

export default NavbarComponent;