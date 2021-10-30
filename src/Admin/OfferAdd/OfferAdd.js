import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import '../Form.css';

const OfferAdd = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://boiling-lake-81029.herokuapp.com/offers', data ,{
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
        <div className="container add-service">
            <h2>Please Add a Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input {...register("country", { required: true, maxLength: 20 })} placeholder="Country" />
                <input {...register("city", { required: true, maxLength: 20 })} placeholder="City" />
                <input {...register("duration", { required: true, maxLength: 20 })} placeholder="duration" />
                <input {...register("category", { required: true, maxLength: 20 })} placeholder="Category" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default OfferAdd;