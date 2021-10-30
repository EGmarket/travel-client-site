import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    fetch("https://boiling-lake-81029.herokuapp.com/banner")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, [])
  return (
    <div>
      {
        offers.map(offer => <div>
           <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={offer.img1}
            alt="First slide"
          />
         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={offer.img}
            alt="Second slide"
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={offer.img2}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
        </div>)
      }
     
    </div>
  );
};

export default Banner;
