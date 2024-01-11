import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";


const ImageSlider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };
    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <>
            <Container>
                <LeaftArrow>
                    <FaCircleChevronLeft onClick={goToPrevious} />
                </LeaftArrow>
                <SliderImg $bgImg={slides[currentIndex].url} />
                <RightArrow>
                    <FaCircleChevronRight onClick={goToNext} />
                </RightArrow>
            </Container>
        </>
    )
}

export default ImageSlider

const Container = styled.div`
/* width: 2500px;
height: 300px; */
height: 52vh;
width: 100%;
display: flex;
align-items: center;
img{
    height: 500px;
    width: 500px;
    @media (max-width: 1000px) {
    width: 100%;
  }
}
@media (max-width: 1000px) {
    height: 26vh;
    flex-direction: column;
  }
`
const SliderImg = styled.div`
border: 3px solid white;
padding: 5px;
height: 100%;
width: 100%;
background-image: ${props => `url("${props.$bgImg}")`};
background-position: center;
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;
`
const LeaftArrow = styled.div`
font-size: 30px;
margin: 0px 10px;
cursor: pointer;
color: gray;
border-radius: 50%;
height: 30px;
@media (max-width: 1000px) {
    font-size: 20px;
    position: absolute;
    top: 9rem;
    left: 30px;
  }
&:hover{
    color: yellowgreen;
}
`

const RightArrow = styled.div`
font-size: 30px;
margin: 0px 10px;
cursor: pointer;
color: gray;
border-radius: 50%;
height: 30px;
@media (max-width: 1000px) {
    font-size: 20px;
    position: absolute;
    top: 9rem;
    right: 30px;
  }
`