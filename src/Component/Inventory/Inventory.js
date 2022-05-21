import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState([]);

  let quantity = inventory.quantity;

  useEffect(() => {
    fetch(`https://dry-depths-45686.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const deliveryInventory = () => {
    quantity = quantity - 1;

    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((result) => {
        fetch(`https://dry-depths-45686.herokuapp.com/inventory/${id}`)
          .then((res) => res.json())
          .then((data) => setInventory(data));
      });
  };

  const addItem = (event) =>{
    event.preventDefault();
    const newInventory = event.target.newInventory.value;
    quantity = quantity + parseInt(newInventory);

    console.log(quantity);

    fetch(`http://localhost:5000/inventory/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ quantity }),
    })
      .then((res) => res.json())
      .then((result) => {
        fetch(`https://dry-depths-45686.herokuapp.com/inventory/${id}`)
          .then((res) => res.json())
          .then((data) => setInventory(data));
      });
  }

  return (
    <div>
      <Container>
        <div className='d-grid col-6 mx-auto'>
          <h3 className='pt-4 text-start'>Product ID : {id} </h3>
          <img
            src={inventory.img}
            alt=''
            className='mx-auto py-2'
            height={300}
            width={300}
          />
          <h3> {inventory.name} </h3>
          <h4> {inventory.supplier_name} </h4>
          <h5 className='text-start'> {inventory.description} </h5>
          <div className='d-flex justify-content-between'>
            <h4>
              Price : <strong> {inventory.price}$ </strong>
            </h4>
            <h4>
              Quantity : <strong> {quantity} </strong>
            </h4>
          </div>
          <h4 className='py-3'>Sold Out : {inventory.sold_out} </h4>
          <Button variant="dark" onClick={deliveryInventory}> Delivery </Button>
          <div className='d-flex justify-content-center pt-5 pb-3'>
            <Link to='/manageInventory' className='btn btn-dark'>
              {" "}
              Manage Inventories{" "}
            </Link>
          </div>
        </div>
        <div>
          <h4 className='mt-4'>Insert the number of items you want to store</h4>
          <form action='' onSubmit={addItem}>
            <input
              type='text'
              className='mt-1 mb-3 text-center'
              name='newInventory'
            />{" "}
            <br />
            <Button variant="dark" type='submit'> Add Items </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default Inventory;
