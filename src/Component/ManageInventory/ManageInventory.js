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

  const deleteItem = (id) => {
    const proceed = window.confirm(
      "Are you sure your want to delete this inventory"
    );
    if (proceed) {
      fetch(`http://localhost:5000/inventory/${id}`, {
        method: 'DELETE'
      })
        .then((resDelete) => resDelete.json())
        .then((dataDelete) => {
            if (dataDelete.acknowledged === true) {
                const remaining = inventories.filter(item => item._id !== id);
                setInventory(remaining);
            }
        });
    }
  };

  return (
    <div>
      <Container>
        <div className='d-flex justify-content-end'>
          <Link to="/addNewInventory" className='btn btn-dark mt-4'>
            Add New Inventory
          </Link>
        </div>
        <h3 className="text-center fw-bold mt-4 text-decoration-underline">All INVENTORIES</h3>
        <Table striped bordered hover size='sm' className='mt-3'>
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
              <tr key={inventory._id}>
                <td>{(itemNo = itemNo + 1)}</td>
                <td>{inventory.name}</td>
                <td>
                  <img
                    src={inventory.img}
                    alt=''
                    srcset=''
                    height={75}
                    width={100}
                  />
                </td>
                <td>{inventory.supplier_name}</td>
                <td>{inventory.price}</td>
                <td>{inventory.quantity}</td>
                <td>{inventory.sold_out}</td>
                <td>
                  <Button
                    variant='danger'
                    className='mx-2'
                    onClick={() => {
                      deleteItem(inventory._id);
                    }}
                  >
                    {" "}
                    Delete{" "}
                  </Button>
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
