import React from 'react';
import './award.css'
import award from '../../assets/awrd pierre de marre 1.png'
const Award = () => {
    return (
        <div className='content_award'>
            <div className="content_award_wrapper">
                <div className='award_content_picture'>
                    <div>
                        <img src={award} alt="/" />
                        <span>pierre de marre <br/> remporte l'award ...</span>
                    </div>
                    <div>
                        <img src={award} alt="/" />
                        <span>pierre de marre <br/> remporte l'award ...</span>
                    </div>
                    <div>
                        <img src={award} alt="/" />
                        <span>pierre de marre <br/> remporte l'award ...</span>
                    </div>
                </div>
            </div>
            <span>en savoir plus</span>
        </div>
    );
};

export default Award;