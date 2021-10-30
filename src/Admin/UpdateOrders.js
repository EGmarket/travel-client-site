import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UpdateOrders = () => {
  const { register, handleSubmit , formState: { errors } } = useForm();
  const { orderId } = useParams();
  // const [isUpdate, setIsUpdated] = useState(null);
  const [singleorder, setSingleOrder] = useState([]);

  useEffect(() => {
    fetch(`https://boiling-lake-81029.herokuapp.com/singleOrder/${orderId}`)
      .then((res) => res.json())
      .then((data) => setSingleOrder(data));
  }, [orderId]);

  const onSubmit = data => {
    fetch(`https://boiling-lake-81029.herokuapp.com/update/${orderId}`,{
      method: "PUT",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if (result.modifiedCount) {
        toast.success("order Updated")
      } else {
        console.log("Failed");
      }
    })
   
}

  return (
    <div className="container add-service">
      <h2>UPDATE IF NEEDED</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <input
            defaultValue={singleorder?.email}
          {...register("email", { shouldUnregister: false, maxLength: 20 })}
          placeholder="email"
        />
        <input
            defaultValue={singleorder?.name}
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Name"
        />
        <input
        defaultValue={singleorder?.country}
          {...register("country", { required: true, maxLength: 20 })}
          placeholder="Country"
        />
        <input
        defaultValue={singleorder?.city}
          {...register("city", {required: true,  maxLength: 20 })}
          placeholder="City"
        />
        <input
        defaultValue={singleorder?.duration}
          {...register("duration", { required: true, maxLength: 20 })}
          placeholder="duration"
        />
        <input
        defaultValue={singleorder?.category}
          {...register("category", { required: true, maxLength: 20 })}
          placeholder="Category"
        />
        <textarea defaultValue={singleorder?.description} {...register("description", {required: true})} placeholder="Description" />
        <input defaultValue={singleorder?.price} type="number" {...register("price", {required: true,})} placeholder="price" />
        <input defaultValue={singleorder?.img} {...register("img",{required: true})} placeholder="image url" />
        <input type="submit" />
      </form>
      <ToastContainer autoClose={2000}/>
    </div>
  );
};

export default UpdateOrders;
