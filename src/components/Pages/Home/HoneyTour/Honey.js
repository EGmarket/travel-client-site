import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Honey = (props) => {
  const { name, price, description, img, _id } = props.honey;
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Col className="mt-5 mb-5">
          <Card className="mx-2 shadow service" style={{ width: '18rem', height: '100%' }}>
            <Card.Img variant="top" height="200px" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Title>{price}</Card.Title>
              {/* <Card.Text>
                  {description}
                </Card.Text> */}
            </Card.Body>
            <Card.Footer>
              <Link to={`/honey/${_id}`}>
                <Button className="mx-5 btn-lg">Details</Button>
              </Link>
            </Card.Footer>
          </Card>
        </Col>
        {/* <Col>
          <img src={img} alt="" srcset="" />
        </Col> */}
      </div>
    </div>
  );
};

export default Honey;
