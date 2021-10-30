import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import PopularTour from "../PopularTour/PopularTour";

const PopularTours = () => {
  const [populars, setPopulars] = useState([]);
  useEffect(() => {
    fetch("https://boiling-lake-81029.herokuapp.com/popular")
      .then((res) => res.json())
      .then((data) => setPopulars(data));
  }, []);
  return (
    <div>
      <div className="offer-container shadow-lg">
        <div className="container">
          <h2>Special-offer</h2>
        </div>
        <div className="container">
          <div className="offers">
            <Row xs={1} md={4} lg={4}>
              {
                  populars.map(popular => <PopularTour
                  key={popular._id}
                  popular = {popular}
                  >

                  </PopularTour>)
              }
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularTours;
