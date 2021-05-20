import React, { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components/macro'; // !Оказывается macro важно, если дополнять какое-то изменение в конретную кнопку(компонент)
import Button from './Button';

import { IoMdArrowRoundForward } from 'react-icons/io'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
`;

const HeroWrapper = styled.div`
    width: 100%;//! Это можно и убрать потому, div растягивается на 100%
    height: 100%;//! Застянуть на всю ширину экрана, чтобы выровнять по ценрту

    display: flex; //* Чтобы массив из слайдов располагались по друг за другом горизонтали 
    justify-content: center;
    align-items: center;

    overflow: hidden;

    position: relative; //! Для Расположения переключателей!
`;

const HeroSlide = styled.div`
    width: 100%;
    height: 100%;

    z-index: 1;
`;

const HeroSlider = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`;

const HeroImage = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
`;

const HeroContent = styled.div`
    position: absolute;
    z-index: 10;

    display: flex;
    justify-content: space-around;
    
    flex-direction: column;

    max-width: 1600px;
    width: calc(100% - 100px); //! Ширина этого блока будет сама регулироваться

    color: #fff;

    h1{
        font-size: clamp(1rem, 8vh, 2rem);

        font-weight: 600;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        margin-bottom: 1rem;
    }

    p{
        margin-bottom: 1rem;
        font-size: 24px;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`;

const Arrow = styled(IoMdArrowRoundForward)`
margin-left: 10px;
`;

const SlideArrows = css`
    width: 50px;
    height: 50px;

    margin-right: 10px;

    color: #fff;
    user-select: none;

    transition: 0.3s;

    border-radius: 50%;

    &:hover{
        color: #cd853f;
        transform: scale(1.1);
    }
`;

const SliderButtons = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;

    z-index: 10;
`;

const PrevArrow = styled(FaArrowCircleLeft)`
    ${SlideArrows};
`
const NextArrow = styled(FaArrowCircleRight)`
    ${SlideArrows}
`;

const Hero = ({ slides }) => {


    const [current, setCurrent] = useState(0);
    const length = slides.length;
    const timeout = useRef(null);

    useEffect(
        () => {

            const nextSlide = () => {
                setCurrent(current => (current === length - 1 ? 0 : current + 1));
            };

            timeout.current = setTimeout(nextSlide, 5000);

            return function () {
                if (timeout.current) {
                    clearTimeout(timeout.current);
                }
            }
        },
        [current, length]
    );

    const nextSlide = () => {

        setCurrent(current === length - 1 ? 0 : current + 1);
    };


    const prevSlide = () => {

        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    const view = slides.map((slide, index) => (
        <HeroSlide key={index}> {/* *! */}
            {index === current && (
                <HeroSlider>
                    <HeroImage src={slide.image} />
                    <HeroContent>
                        <h1>{slide.title}</h1>
                        <p>{slide.price}</p>

                        <Button to={slide.path} primary={true}
                            css={`
                                max-width: 160px;
                            `}
                        >
                            {slide.label}
                            <Arrow />
                        </Button>
                    </HeroContent>

                </HeroSlider>
            )}
        </HeroSlide>
    ));
    return (
        <HeroSection>
            <HeroWrapper>
                {view}

                <SliderButtons>
                    <PrevArrow onClick={prevSlide} />
                    <NextArrow onClick={nextSlide} />
                </SliderButtons>
            </HeroWrapper>
        </HeroSection>
    )
}

export default Hero
