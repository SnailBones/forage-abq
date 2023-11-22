import React, { useEffect } from "react";
import PlantCard from "../PlantCard/PlantCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const PlantList = ({ plants }) => {
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

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      // autoPlay={true}
      autoPlaySpeed={4000}
    >
      {plants.map((plant, index) => (
        // <div className="item" key={index}>
        <PlantCard plant={plant} key={index} />
        // <div style={{ background: "blue" }} key={index}>a</div>
        //  {/* </div> */}
      ))}
    </Carousel>
  );
};

export default PlantList;
