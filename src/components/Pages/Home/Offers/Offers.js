import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Offer from "../Offer/Offer";


const Offers = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    fetch("https://boiling-lake-81029.herokuapp.com/offers")
      .then((res) => res.json())
      .then((data) => setOffers(data));
  }, []);

  return (
    <div className="offer-container shadow-lg">
        <div className="container">
            <h2>Special-offer</h2>
        </div>
      <div className="container">
        <div className="offers">
          <Row xs={1} md={4} lg={4}>
            {offers.slice(0, 4).map((offer) => (
              <Offer key={offer._id} offer={offer}></Offer>
            ))}
          </Row> 
        </div>
      </div>
    </div>
  );
};

export default Offers;
