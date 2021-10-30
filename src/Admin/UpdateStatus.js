import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

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
    .then(result => console.log(result))

}

  return <div>
<div className="container add-service">
      <h2>Please Add a Service</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
       <label htmlFor="email">User Email</label>
        <input
            defaultValue={singleorder?.email}
          {...register("email", { required: true,  maxLength: 20 })}
          placeholder="Name"
        />
         <select {...register("status")}>
        <option value="pending">pending</option>
        <option value="approved">approved</option>
      </select>
      <input type="submit" />
      </form>
    </div>


  </div>;
};

export default UpdateStatus;
