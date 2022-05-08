import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import image from '../../../images/carousel/image5.jpg'

const InventoryItems = () => {
    return (
      <div>
          <h2 className='py-4 fw-bold'>Inventorys</h2>
        <Container>
          <Row xs={1} md={3} className='g-4'>
            {Array.from({ length: 6 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant='top' src={image} height={200} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
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