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
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={offer.img}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={offer.img2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>)
      }
     
    </div>
  );
};

export default Banner;
