import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Honey from "../HoneyTour/Honey";

const Honeys = () => {
  const [honeys, setHoneys] = useState([]);

  useEffect(() => {
    fetch("https://boiling-lake-81029.herokuapp.com/honey")
      .then((res) => res.json())
      .then((data) => setHoneys(data));
  }, []);
  return (
    <div className="offer-container shadow-lg">
    <div className="container">
        <h2>Honeymoon Package</h2>
    </div>
  <div className="container">
    <div className="offers">
      <Row xs={1} md={4} lg={4}>
        {honeys.slice(0, 4).map((honey) => (
          <Honey key={honey._id} honey={honey}></Honey>
        ))}

        {/* <div>
            <Row className="mt-5 my-5 honey">
            <img src="https://i.imgur.com/6UlXoMI.png" alt="" srcset="" />
            </Row>
        </div> */}
      </Row>
    </div>
  </div>
</div>
  );
};

export default Honeys;
