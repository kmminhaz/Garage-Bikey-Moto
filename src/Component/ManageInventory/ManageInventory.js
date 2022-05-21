import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const ManageInventory = () => {
  const [inventories, setInventory] = useState([]);
  // const [itemNo, setItemNo] = useState(1);
  // setItemNo(2);

  let itemNo = 0;

  useEffect(() => {
    fetch("https://dry-depths-45686.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  const deleteItem = () => {
      
  }

  return (
    <div>
      <Container>
        <Table striped bordered hover size='sm' className="mt-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Image</th>
              <th>Supplier Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Sold Out</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {inventories.map((inventory) => (
              // {setItemNo(itemNo + 1)}
              <tr key={inventory.id}>
                <td>{(itemNo = itemNo + 1)}</td>
                <td>{inventory.name}</td>
                <td>
                    <img src={inventory.img} alt="" srcset="" height={75} width={100} />
                </td>
                <td>{inventory.supplier_name}</td>
                <td>{inventory.price}</td>
                <td>{inventory.quantity}</td>
                <td>{inventory.sold_out}</td>
                <td>
                  <Button variant='danger' className="mx-2" onClick={deleteItem}> Delete </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default ManageInventory;
