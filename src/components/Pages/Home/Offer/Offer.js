import React from 'react';
import { Card, Col,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Offer = (props) => {
    const {name, price, description , img , _id} = props.offer;
    return (
        <div>
             <Col className="mt-5 mb-5">
            <Card className="mx-2 shadow service">
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Title>{price}</Card.Title>
                {/* <Card.Text>
                  {description}
                </Card.Text> */}
              </Card.Body>
              <Card.Footer>
                <Link to={`/service/${_id}`}>
                  <Button className="mx-5 btn-lg">Details</Button>
                </Link>
                
              </Card.Footer>
            </Card>
            </Col>
        </div>
    );
};

export default Offer;