import React, { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import useFirebase from "../../Hooks/useFirebase";

const MyInventory = () => {
  const [inventories, setInventory] = useState([]);
  const { user } = useFirebase();
  const myEmail = user.email;

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
        method: "DELETE",
      })
        .then((resDelete) => resDelete.json())
        .then((dataDelete) => {
          if (dataDelete.acknowledged === true) {
            const remaining = inventories.filter((item) => item._id !== id);
            setInventory(remaining);
          }
        });
    }
  };

  return (
    <div>
      <Container>
        <h3 className='text-center fw-bold mt-4 text-decoration-underline'>
          My INVENTORIES
        </h3>
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
            {inventories
              .filter((myInventory) => myInventory.email === myEmail)
              .map((inventory) => (
                <tr key={inventory._id}>
                  <td>{(itemNo = itemNo + 1)}</td>
                  <td>{inventory.name}</td>
                  <td>
                    <img src={inventory.img} alt='' height={75} width={100} />
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

export default MyInventory;
