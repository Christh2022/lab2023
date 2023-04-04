import React, {  useEffect, useState } from 'react';
import img1 from '../../assets/PDM concert 2.webp'
import img2 from '../../assets/hq720 concert 1.png'
import img3 from '../../assets/cdrtgh concert.webp'
import {GrNext, GrPrevious} from 'react-icons/gr'
import {BsPlayCircleFill} from 'react-icons/bs'
import {RxCrossCircled} from 'react-icons/rx'
import './carousel.css'
import gsap  from 'gsap';
import ReactPlayer from 'react-player';
const Carousel = () => {
    const [slide , setSlide] = useState(1)
    const [index_1_CSS , setIndex_1_CSS] = useState("")
    const [index_2_CSS , setIndex_2_CSS] = useState("")
    const [index_3_CSS , setIndex_3_CSS] = useState("")
    const [videoUrl, setVideoUrl] = useState("");
    const [play, setPlay] = useState(false)

    useEffect(()=>{
        if (!play) {
            gsap.timeline().fromTo('.play_video_slider ', {opacity : 1}, 
                {opacity: 0, duration: 1.5, delay:2}
            )

            if(slide === 1){
                setIndex_1_CSS("")
                setIndex_2_CSS("")
                setIndex_3_CSS("")
                setVideoUrl("https://youtu.be/WdHfiePsgoA")
             } else if(slide === 2){
                setIndex_1_CSS("index_2_CSS")
                setIndex_2_CSS("index_3_CSS")
                setIndex_3_CSS("index_1_CSS")
                setVideoUrl("https://youtu.be/urYNr7egUDc")
            } else if(slide === 3){
                setIndex_1_CSS("index_3_CSS")
                setIndex_2_CSS("index_1_CSS")
                setIndex_3_CSS("index_2_CSS")  
                setVideoUrl("https://youtu.be/_Oik7vkP0Uc")
            }    
        }

        if (slide > 3) {
          setSlide(1)
        } 
    }, [slide, play])

    useEffect(()=>{
        const slideTimer = setInterval(()=>{
            setSlide(slide + 1)
         }, 4000)
 
         return()=>{
             clearInterval(slideTimer)
         }
    }, [slide])

    const handleNext = ()=>{
        if (slide < 3 ) {
            setSlide(slide + 1)
        } else if(slide === 3) {
            setSlide(1)
        }
    }

    const handlePrevious = ()=>{
        if (slide > 1 ) {
            setSlide(slide - 1)
        } else if(slide === 1) {
            setSlide(3)
        }
    }

    const handlePlay = ()=>{
        setPlay(!play)
    }

    return (
        <div className='slider_gallery'>
            <div className='gallery_container'>
                <img src={img1} className={` gallery-item gallery-item-1 ${index_1_CSS}`}  alt='/'/>
                <img src={img2} className={` gallery-item gallery-item-2 ${index_2_CSS}`}  alt='/'/>
                <img src={img3} className={` gallery-item gallery-item-3 ${index_3_CSS}`}  alt='/'/>
                <div className='gallery-controls'>
                <span className='gallery-controls-previous' onClick={handlePrevious}>
                    <GrPrevious/>
                </span>
                <span className='gallery-controls-next' onClick={handleNext}>
                    <GrNext color='white'/>
                </span>
            </div>
                <span className='play_video_slider' onClick={handlePlay}>
                    <BsPlayCircleFill/>
                </span>
            </div>
            {play && <div class="gallery_video_play">
                <ReactPlayer
                    width="100%"
                    height="100%"
                    url={videoUrl}
                    playing={true}
                    controls={true}
                    volume={1}
                    onPlay={() => console.log("La vidéo est en train de jouer!")}
                />
                <span className='close_play' onClick={handlePlay}>
                    <RxCrossCircled/>
                </span> 
            </div>}
        </div>
    );
};

export default Carousel;