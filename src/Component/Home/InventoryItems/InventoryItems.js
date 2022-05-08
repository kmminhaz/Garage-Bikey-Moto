import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "../../../images/carousel/image5.jpg";

const InventoryItems = () => {
  return (
    <div>
      <h2 className='py-4 fw-bold'>Inventories</h2>
      <Container>
        <Row xs={1} md={3} className='g-4'>
          {Array.from({ length: 6 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant='top' src={image} height={200} />
                <Card.Body>
                  <Card.Title className='fw-bold fs-3 pb-3'>
                    Spare parts
                  </Card.Title>
                  <Card.Text>
                    <div className='d-flex justify-content-between px-4'>
                      <h4>Price: $300</h4>
                      <h5>Quantity: 50</h5>
                    </div>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                    <br /> <br />
                    <Button variant='dark'>Manage Stock</Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default InventoryItems;
