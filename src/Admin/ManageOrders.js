import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageOrders = () => {
  const [manageOrders, setManageOrders] = useState([]);
  const [isDeleted, setIsDeleted] = useState(null);
  useEffect(() => {
    fetch("https://boiling-lake-81029.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setManageOrders(data));
  }, [manageOrders,isDeleted]);

  // Deleting Orders
  const handleDeleteOrder = id => {
    const proceed = window.confirm("Are You Sure ?")
    if(proceed){
      fetch(`https://boiling-lake-81029.herokuapp.com/deleteOrder/${id}`, {
        method: "DELETE",
        headers: {"content-type" : "application/json"}
      })
      .then(res => res.json())
      .then(result => {
        if(result.deletedCount){
          setIsDeleted(true)
          toast.success(" Deleted Successfully");
        } else {
          setIsDeleted(false)
        }
      });
      console.log(id);
    }
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
                <div className="row mb-3 mt-3">
                  <div className="col-md-12">
                  <Card className="mx-2 shadow service w-25">
                  <Card.Img variant="top" src={order.img} />
                  <Card.Body>
                    <Card.Title>{order.name}</Card.Title>
                    <Card.Title>{order.price}</Card.Title>
                  </Card.Body>
                  <Card.Footer>

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
                  </div>
                
                </div>
                
              
              <ToastContainer autoClose={2000}/>
           

            </div>)
          }
          
            
         
        </div>
      </div>
    </div>
  );
};

export default ManageOrders;
