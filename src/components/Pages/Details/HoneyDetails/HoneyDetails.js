import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../../../../hooks/useAuth';

export const HoneyDetails = () => {
    const {honeyId } = useParams();
    const [serviceDetails,setServiceDetails] = useState([]);
    const [details, setDetails] = useState([]);
    const { user } = useAuth();

    useEffect(()=>{
        fetch('https://boiling-lake-81029.herokuapp.com/honey')
        .then(res => res.json())
        .then(data => setServiceDetails(data))
    },[])

    console.log(serviceDetails);

    useEffect(()=>{
        const details = serviceDetails.find(service => service._id === honeyId)
        setDetails(details)
    },[serviceDetails])

    const handleAddToCart = () => {
        console.log(details);
        const booking = details;
        booking.email = user.email;
        fetch("https://boiling-lake-81029.herokuapp.com/orders", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(booking)
        })
        if(booking){
            toast.success("Booked Successfully")
        }
    }
    return (
        <div>
            
            <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5">
                    <img className="img-fluid" height="300px" src={details?.img} alt="" srcset="" />
                </div>
                <div className="col-md-6 mt-5">
                    <h2>Name Of Service: {details?.name}</h2>
                    <h3>ServiceFee: {details?.price}</h3>
                    <h4>TimePreiod: {details?.duration}</h4>
                    <p>{details?.desc}</p>
                    
                        <Button onClick={ handleAddToCart} className="btn btn-danger">BOOK NOW</Button>
                    
                </div>
            </div>
            </div>
            <ToastContainer autoClose={2000}/>
        </div>
    );
};

export default HoneyDetails;