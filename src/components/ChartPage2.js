import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Example logo URL
const logoUrl = "https://via.placeholder.com/150"; // Replace with your logo URL

function ChartPage2() {
  return (
    <Container fluid style={{ backgroundColor: '#f0f0f0', minHeight: '50vh', padding: '20px' }}>
      <Row>
        <Col md={4}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '8px', marginBottom: '20px', height:'250px'}}>
            <Card.Body className='text-center'>
            <h5>File Name 1</h5>
              <img src={logoUrl} alt="Logo" style={{ maxWidth: '100px', marginBottom: '10px' }} />
             
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '8px', marginBottom: '20px',  height:'250px'}}>
            <Card.Body className='text-center'>
            <h5>File Name 2</h5>
              <img src={logoUrl} alt="Logo" style={{ maxWidth: '100px', marginBottom: '10px' }} />
              
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='text-center' style={{ backgroundColor: '#fff', borderRadius: '8px', height: '93%' }}>
            <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Button
                variant="outline-dark"
                style={{ marginBottom: '10px' }}
                // onClick={openModal}
              >
                + Add Widget
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default ChartPage2;
