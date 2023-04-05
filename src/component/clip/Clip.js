import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import './clip.css'
import clip1 from '../../assets/arrière plan clip 1.jpg'
import clip2 from '../../assets/arrière plan clip 2.jpg'
import clip3 from '../../assets/arrière plan clip 3.jpg'
import {BsPlayCircleFill} from 'react-icons/bs'
import {RxCrossCircled} from 'react-icons/rx'

const Clip = () => {
    const [image, setImage] = useState(null)
    const [play, setPlay] = useState(false)
    const [imageList, setImageList] = useState([clip1, clip2, clip3])
    const [videoUrl, setVideoUrl] = useState("");
    const [currentSlide, setCurrentSlide] = useState(1);
    // Nombre de slides
    const slides = 3;


    useEffect(()=>{
        if (!play) {
            if (currentSlide === 1) {
                setImage(imageList[0])
                setVideoUrl("https://youtu.be/52H1HLElXOQ")
            } else if(currentSlide === 2) {
                setImage(imageList[1])
                setVideoUrl("https://youtu.be/yIlHkeWVBQQ")
            } else if(currentSlide === 3){
                setImage(imageList[2])
                setVideoUrl("https://youtu.be/DAWGW38fEOc")
            }
        }
        console.log(setImageList);
    }, [currentSlide, setImage, imageList, play])

    useEffect(() => {
        // Autoplay slide time
        const slideTimer = setInterval(() => {
          showSlide(currentSlide + 1);
          
        }, 3500);
    
        return () => {
          clearInterval(slideTimer);
        };
    }, [currentSlide]);

    const showSlide = (slideNumber) => {
        if (slideNumber > slides) {
          slideNumber = 1;
        } else if (slideNumber < 1) {
          slideNumber = slides;
        }
        setCurrentSlide(slideNumber);
    }
    
    const handleThumbnailClick = (slideNumber) => {
        showSlide(slideNumber);
    };

    const handlePlay = ()=>{
        setPlay(!play)
    }

      
    return (
        <>  <h3 className='clip_title' >clip de l'album</h3>
            <div className="clip_content">
            
                <img src={image} alt="/"/>
                <div>
                    <span onClick={handlePlay}>
                        <BsPlayCircleFill/>
                    </span>
                    <span className='status pulsing ok-1'></span>
                    <span className='status pulsing ok-2'></span>
                    <span className='status pulsing ok-3'></span>
                    <span className='status pulsing ok-4'></span>
                </div>
            
                <div>
                    <span className={currentSlide === 1 ? "active" : ""} onClick={() => handleThumbnailClick(1)}></span>
                    <span className={currentSlide === 2 ? "active" : ""} onClick={() => handleThumbnailClick(2)}></span>
                    <span className={currentSlide === 3 ? "active" : ""} onClick={() => handleThumbnailClick(3)}></span>
                </div>


                {play &&
                
                <div className='video_player'>
                    <div>
                        <ReactPlayer
                            width="100%"
                            height="100%"
                            url={videoUrl}
                            playing={true}
                            controls={true}
                            volume={1}
                            onPlay={() => console.log("La vidéo est en train de jouer!")}
                        />
                    </div>
                    <span onClick={handlePlay}>
                        <RxCrossCircled/>
                    </span>    
                </div>
                }

            </div>
        </>
    );
};

export default Clip;