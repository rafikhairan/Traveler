import React, { useState, useRef, useEffect } from "react";
import {
  Arrow,
  HeroContent,
  HeroImage,
  HeroSection,
  HeroSlide,
  HeroSlider,
  HeroWrapper,
  NextArrow,
  PrevArrow,
  SliderButtons,
} from "./HeroElements";
import { Button } from "../ButtonElements";

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1))
    }

    timeout.current = setTimeout(nextSlide, 3000)

    return function () {
      if(timeout.current) {
        clearTimeout(timeout.current)
      }
    }
  }, [current, length])

  const nextSlide = () => {
    if(timeout.current) {
      clearTimeout(timeout.current)
    }
    
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if(timeout.current) {
      clearTimeout(timeout.current)
    }
    
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === current && (
                <HeroSlider>
                  <HeroImage src={slide.img} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.desc}</p>
                    <Button to={slide.path} primary="false">
                      {slide.label}
                      <Arrow />
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtons>
          <PrevArrow onClick={prevSlide} />
          <NextArrow onClick={nextSlide} />
        </SliderButtons>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
