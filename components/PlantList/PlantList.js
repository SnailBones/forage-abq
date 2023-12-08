import React, { useRef, useEffect } from "react";
import PlantCard from "../PlantCard/PlantCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PlantList = ({ plants }) => {
  const wrapperRef = useRef(null);
  const carouselRef = useRef(null);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 5000, min: 2000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 2000, min: 1400 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1400, min: 900 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    const scrollHandler = (e) => {
      if (plants.length > 1 && carouselRef.current) {
        if (e.deltaY > 0) {
          carouselRef.current.next();
        } else {
          carouselRef.current.previous();
        }
      }
    };

    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      wrapperElement.addEventListener("wheel", scrollHandler);

      return () => {
        wrapperElement.removeEventListener("wheel", scrollHandler);
      };
    }
  }, [plants.length]);

  return (
    <div ref={wrapperRef}>
      <Carousel
        responsive={responsive}
        infinite={true}
        ref={carouselRef}
        showDots={plants.length > 1}
        arrows={plants.length > 1}
        draggable={plants.length > 1}
      >
        {plants.map((plant, index) => (
          <PlantCard plant={plant} key={index} />
        ))}
      </Carousel>
    </div>
  );
};

export default PlantList;
