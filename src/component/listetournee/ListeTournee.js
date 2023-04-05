import React, { useEffect , useState } from 'react';
import img1 from '../../assets/nouvelle affiche V2 2.png'
import img2 from '../../assets/Plan de travail 2 1.png'
import './listetournee.css'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { database } from '../../firebase';

const ListeTournee = () => {
    const tourneRef = collection(database, "Tournee_Date");
    const [list, setList] = useState([]);
    const TourneQuery = query(
        tourneRef,
        orderBy("date", "desc")
    )
    useEffect(()=>{
        onSnapshot(TourneQuery, (snapshot)=>{
            let tab = []
            snapshot.docs.forEach((doc)=>{
                tab.push({...doc.data(), id : (doc.id)})
            })
        
            setList(tab);
        })
    });
    return (
        <div className='list_tournee'>
            <img src={img1} alt="/"/>
            <div>
                <img src={img2} alt="/"/>
                <ul className='tournee_item'>
                    {list.map((value, index)=>
                    <li key={index}>
                        <span>{value.date}</span>
                        <span>....</span>
                        <span>{value.ville.toUpperCase()}</span>
                        <span>{value.lieu.toUpperCase()}</span>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ListeTournee;