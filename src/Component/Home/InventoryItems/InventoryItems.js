import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import app from "../../../firebase.init";
import Loading from "../../Loading/Loading";

const InventoryItems = () => {
  const [inventories, setInventory] = useState([]);
  const [loading] = useAuthState(getAuth(app))

  if(loading){
    <Loading/>
  }

  useEffect(() => {
    fetch("https://dry-depths-45686.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  let items = inventories.slice(0, 6);

  const navigate = useNavigate();

  const navigateToInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div>
      <h2 className='py-4 fw-bold'>Inventories</h2>
      <Container>
        <Row xs={1} md={3} className='g-4'>
          {items.map((inventory) => (
            <Col key={inventory._id}>
              <Card>
                <Card.Img variant='top' src={inventory.img} height={200} />
                <Card.Body>
                  <Card.Title className='fw-bold fs-3 pb-3'>
                    {inventory.name}
                  </Card.Title>
                  <Card.Text>
                    <h5 className='text-start ps-4'>
                      Supplier Name:{" "}
                      <strong> {inventory.supplier_name} </strong>{" "}
                    </h5>
                    <div className='d-flex justify-content-between px-4'>
                      <h5>
                        Price: <strong> {inventory.price} </strong>{" "}
                      </h5>
                      <h5>
                        Quantity: <strong> {inventory.quantity} </strong>{" "}
                      </h5>
                    </div>
                    <p>{inventory.description.slice(0, 200)}</p>
                    <br /> <br />
                    <Button
                      onClick={() => {
                        navigateToInventoryDetail(inventory._id);
                      }}
                      variant='dark'
                    >
                      Manage
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className='d-flex justify-content-center pt-5'>
          <Link to='/manageInventory' className="btn btn-dark">
            {" "}
            Manage Inventories{" "}
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default InventoryItems;
