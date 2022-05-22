import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";

const AddNewInventory = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useFirebase();

  const onSubmit = (data) => {
    const inventory = {
      name: data.name,
      email: user.email,
      supplier_name: data.supplier_name,
      img: data.img,
      description: data.description,
      price: data.price,
      quantity: data.quantity,
      sold_out: data.sold_out
    }
    console.log(inventory);
    fetch("http://localhost:5000/inventory", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(inventory),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <Container>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='d-grid col-lg-6 col-sm-12 mx-auto shadow rounded-3 mt-4'
      >
        <h4 className='mt-4 fw-bold'>Add New Inventory</h4>
        <div className='d-grid col-lg-8 col-sm-12 mx-auto'>
          <p className='text-start mb-1 mt-3 fw-bold'> Name</p>
          <input {...register("name", { required: true })} />
        </div>
        <div className='d-grid col-lg-8 col-sm-12 mx-auto'>
          <p className='text-start mb-1 mt-2 fw-bold'> The User Email </p>{" "}
          <h6 className="p-2 fw-bold bg-light text-start border" >{user.email}</h6>
        </div>
        <div className='d-grid col-lg-8 col-sm-12 mx-auto'>
          <p className='text-start mb-1 mt-2 fw-bold'> Supplier Name</p>
          <input {...register("supplier_name", { required: true })} />
        </div>
        <div className='d-grid col-lg-8 col-sm-12 mx-auto'>
          <p className='text-start mb-1 mt-2 fw-bold'> Give Image Url </p>
          <input type='text' {...register("img", { required: true })} />
        </div>
        <div className='d-grid col-lg-8 col-sm-12 mx-auto'>
          <p className='text-start mb-1 mt-2 fw-bold'> Description </p>
          <textarea {...register("description", { required: true })} />
        </div>
        <div className='d-grid col-lg-8 col-sm-12 mx-auto'>
          <p className='text-start mb-1 mt-2 fw-bold'> Price </p>
          <input type='number' {...register("price", { required: true })} />
        </div>
        <div className='d-grid col-lg-8 col-sm-12 mx-auto'>
          <p className='text-start mb-1 mt-2 fw-bold'> Quantity </p>{" "}
          <input type='number' {...register("quantity", { required: true })} />
        </div>
        <div className='d-grid col-lg-8 col-sm-12 mx-auto'>
          <p className='text-start mb-1 mt-2 fw-bold'> Sould Out Status </p>{" "}
          <input
            value='No'
            readOnly
            className='bg-light'
            {...register("sold_out", { required: true })}
          />
        </div>
        <input
          className='d-grid col-lg-4 mx-auto my-4 btn btn-dark'
          type='submit'
          value='Add Inventory'
        />
      </form>
    </Container>
  );
};

export default AddNewInventory;
