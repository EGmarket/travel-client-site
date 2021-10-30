import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ManageOrders = () => {
  const [manageOrders, setManageOrders] = useState([]);
  const [statusCodes, setstatusCodes] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  useEffect(() => {
    fetch("https://boiling-lake-81029.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, [isDeleted]);

  // Deleting Orders
  const handleDeleteOrder = id => {
    fetch(`https://boiling-lake-81029.herokuapp.com/deleteOrder/${id}`, {
      method: "DELETE",
      headers: {"content-type" : "application/json"}
    })
    .then(res => res.json())
    .then(result => {
      if(result.deletedCount){
        setIsDeleted(true)
        alert("Success")
      } else {
        setIsDeleted(false)
      }
    });
    console.log(id);
  }

  // Handle Status

  const handleStatus = code => {
    fetch(`https://boiling-lake-81029.herokuapp.com/orders/${code}`,{
      method: "PUT",
      headers: {"content-type" : "application/json"},

    })
    .then(res => res.json())
    .then(data => setstatusCodes(data))
  }

  
 
  return (
    <div className="offer-container shadow-lg">
      <div className="container">
        <h2>Manage All Orders From Here</h2>
      </div>
      <div className="container">
        <div className="offers">
          {
            manageOrders.map(order => <div key={order._id}>
              <Row>
              <Col>
                <Card className="mx-2 d-flex shadow service w-25">
                  <Card.Img variant="top" src={order.img} />
                  <Card.Body>
                    <Card.Title>{order.name}</Card.Title>
                    <Card.Title>{order.price}</Card.Title>
                    {/* <Card.Text>
                  {description}
                </Card.Text> */}
                  </Card.Body>
                  <Card.Footer>
                    {/* <Link to={`/honey/${_id}`}>
                    <Button className="mx-5 btn-lg">Details</Button>
                  </Link> */}

                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-danger mx-1"
                    >
                      DELETE
                    </button>
                    <Link to={`/update/${order._id}`}>
                      <button className="btn btn-warning mx-1">UPDATE</button>
                    </Link>

                    <Link to={`/status/${order._id}`}>
                    <button className="btn btn-info"> Status </button>
                    </Link>
                                                                                                                                                                                 
                  </Card.Footer>
                </Card>
              </Col>
            </Row>

            </div>)
          }
          
            
         
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
