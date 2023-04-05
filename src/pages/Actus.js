import React, { useState } from 'react';
import NavbarComponent from '../component/navbar/navbarComponent';
import './Actus.css'
import rectangle from '../assets/Rectangle 23.png'
import Footer from '../component/footer/Footer';
import img1 from '../assets/zyro-image.png'
import img2 from '../assets/article 2.jpg'
import {RxCross2} from 'react-icons/rx'

const Actus = ({isActive, setIsActive}) => {
    const [tab, setTab] = useState([
        {   
            image: img1, 
            titre: "Pierre de Maere et son équipe", 
            description: "Dès son âge, Pierre de Maere compose ces chansons à l'aide de son frère Xavier de maere. En effet, ingénieur de son, il accompagne son petit frère pour composer ces chansons, c'est un peu le chef d'orchestre de l'album! . Donc, regarde - Moi est le fruit d'un travail entre deux frères qui aiment la musique et veulent partager leurs passion. En plus de son frère, on retrouve Gaspard Gomis qui est le batteur de Pierre depuis ces débuts et la pianiste Elodie charmansat. Ils ont une relation particulière avec l'artiste, en effet ce dont les deux colocataires de Pierre de Maere. On constate que Pierre de Maere est un artiste qui préfère être entouré de ces proches meme quand il s'agit du travail."
        }, 
        {
            image: img2, 
            titre: "ou trouvez la star belge", 
            description: " pierre de Maere est l'interprète  du tube un jour, je marierai un ange, compte faire une tournée suite à la sortie de son nouvel album 'Regarde - Moi'. En effet, il suit le chemin de son artiste préféré Stramae puisqu'il compte se produire à  l'Olympia le 12 Mai 2023. Si vous n'habitez pas à Paris pas de panique ! il fait toute la tournée de Francde  en Plus de Bruxelles le 18 Mai 2023.  Pour soutenir la lutte contre le sida, Pierre de Maere rejoint l'affiche du festival Les solidays du 23 au 25 juin 2023 à l'Hippodrome de Paris - Longchamp. En plus de l'artiste belge, on retrouvera Angèle, Juliette Armanet, Bigflo & Oli, Jain. Pour plus d'information relative au festival, vous pouvez retrouver le lien ci dessous le lien de la billeterie : https://www.solidays.org"
        }
    ])
    const [newObject, setNewObject] = useState({})
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
                        <>
                        <div key={index}>
                            <img src={value.image} alt="/" />
                            <span>
                               {value.titre}
                            </span>
                            <button onClick={()=>{
                                handleSeeActus() 
                                setNewObject({image: value.image, titre: value.titre, description: value.description})}}>lire plus</button>
                        </div></>)}
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
                            <img src={newObject.image} alt="/" />
                        </div>
                        <h2>{newObject.titre}</h2>
                        <p>
                        {newObject.description}  
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