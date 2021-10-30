import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState([]);
  const { user } = useAuth();
  const email = user.email;
  useEffect(() => {
    fetch(`https://boiling-lake-81029.herokuapp.com/orders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email]);
  
  useEffect(()=>{
    fetch('https://boiling-lake-81029.herokuapp.com/status')
    .then(res => res.json())
    .then(data => setStatus(data))
  },[])
  return (
    <div className="container">
      <div>
        <h2>Total Number of Order : {orders.length}</h2>
        {orders.map((order) => (
          <div key={order._id}>
            <div className="bg-light d-flex justify-content-between mb-3">
              <img height="300px" src={order.img} alt="" srcset="" />
              <div className="mt-5 ">
              <h2>{order.name}</h2>
              <h3>price: ${order.price}</h3>
              </div>
              
              <div className="mt-5 mx-5">
              <button>
                <h3> {order?.status}</h3>
              </button>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
