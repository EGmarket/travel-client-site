import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Form.css';

const AddNew = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://boiling-lake-81029.herokuapp.com/honey', data ,{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="container add-service text-center">
            <h2 className="text-primary mt-5">Please Add a Service</h2>
            
            <Link to="/offeradd">
            <button className="btn btn-warning mx-3 mt-5">OFFER ADD</button>
            </Link>
            <Link to="/honeyadd">
            <button className="btn btn-info mx-3 mt-5">Honeymoon ADD</button>
            </Link>
            <Link to="/popularAdd">
            <button className="btn btn-warning mx-3 mt-5"> ADD Popular</button>
            </Link>

            
        </div>
    );
};

export default AddNew;;