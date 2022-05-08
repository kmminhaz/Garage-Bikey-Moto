import React from "react";
import { Card, CardGroup, Container } from "react-bootstrap";

const Activity = () => {
  return (
    <div>
      <h2 className='py-4 fw-bold'>Our Statistics</h2>
      <Container>
        <CardGroup>
          <Card
            className='border-secondery border-top-0 border-start-0 border-bottom-0'
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>251112</Card.Title>
              <Card.Text>Packages Delevered</Card.Text>
            </Card.Body>
          </Card>
          <Card
            className='border-secondery border-top-0 border-start-0 border-bottom-0'
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>2331</Card.Title>
              <Card.Text>Our Clients</Card.Text>
            </Card.Body>
          </Card>
          <Card
            className='border-secondery border-top-0 border-start-0 border-bottom-0'
            style={{ width: "18rem" }}
          >
            <Card.Body>
              <Card.Title>11226336</Card.Title>
              <Card.Text>Commercial Goods</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
};

export default Activity;
