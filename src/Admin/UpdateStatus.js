import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateStatus = () => {
  const { register, handleSubmit } = useForm();
  const { orderId } = useParams();
  const [singleorder, setSingleOrder] = useState([]);

  useEffect(() => {
    fetch(`https://boiling-lake-81029.herokuapp.com/singleOrder/${orderId}`)
      .then((res) => res.json())
      .then((data) => setSingleOrder(data));
  }, []);

  const onSubmit = data => {
    console.log(data);

    fetch(`https://boiling-lake-81029.herokuapp.com/status/${orderId}`,{
      method: "PUT",
      headers: {"content-type" : "application/json"},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result => {
      if(result){
        toast.success("Status Changed")
      }
    })

}

  return <div>
<div className="container add-service">
      <h2>Please Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
       <label htmlFor="email">User Email</label>
        <input
            defaultValue={singleorder?.email}
          {...register("email", {  maxLength: 20 })}
          placeholder="Name"
        />
          <input
            defaultValue={singleorder?.status}
          {...register("status", { required: true, maxLength: 20 })}
          placeholder="status"
        />
      <input type="submit" />
      </form>
      <ToastContainer autoClose={2000}/>
    </div>


  </div>;
};

export default UpdateStatus;
