import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    fetch(`https://dry-depths-45686.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div>
      <Container>
        <div className='d-grid col-6 mx-auto'>
          <h3 className='pt-4 text-start'>Product ID : {id}</h3>
          <img
            src={inventory.img}
            alt=''
            className='mx-auto py-2'
            height={300}
            width={300}
          />
          <h3>{inventory.name}</h3>
          <h4>{inventory.supplier_name}</h4>
          <h5 className='text-start'>{inventory.description}</h5>
          <div className='d-flex justify-content-between'>
            <h4>
              Price : <strong>{inventory.price}$</strong>
            </h4>
            <h4>
              Quantity : <strong>{inventory.quantity}</strong>
            </h4>
          </div>
          <h4 className='py-3'>Sold Out : {inventory.sold_out}</h4>
        </div>
      </Container>
    </div>
  );
};

export default Inventory;
