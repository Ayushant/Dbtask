import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';

// Data and options for the charts
const chartData = {
  chart1: [
    ["Task", "Hours per Day"],
    ["Connected", 2],
    ["Not Connected", 2],
  ],
  chart2: [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
  ],
};

const chartOptions = {
  chart1: {
    title: "Cloud Accounts",
    pieHole: 0.6,
    is3D: false,
  },
  chart2: {
    title: "Daily Activities",
    pieHole: 0.6,
    is3D: false,
  },
};

function ChartPage() {
  const [showChart, setShowChart] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedChart, setSelectedChart] = useState('chart1');

  const toggleChart = () => {
    setShowChart(prev => !prev);
  };

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addChart = () => {
    setShowChart(true);
    closeModal();
  };

  return (
    <Container fluid style={{ backgroundColor: '#f0f0f0', minHeight: '50vh', padding: '20px' }}>
      <Row>
        <Col md={4}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '8px', marginBottom: '20px', height: '300px' }}>
            <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Chart
                chartType="PieChart"
                data={chartData.chart1}
                options={chartOptions.chart1}
                width={"100%"}
                height={"250px"}
              />
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card style={{ backgroundColor: '#fff', borderRadius: '8px', marginBottom: '20px', height: '300px' }}>
            <Card.Body style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Chart
                chartType="PieChart"
                data={chartData.chart2}
                options={chartOptions.chart2}
                width={"100%"}
                height={"250px"}
              />
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className='text-center' style={{ backgroundColor: '#fff', borderRadius: '8px', height: '300px' }}>
            <Card.Body style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              {/* Button to open the modal */}
              <Button
                variant="outline-dark"
                style={{ marginBottom: '10px' }}
                onClick={openModal}
              >
                + Add Widget
              </Button>

              {/* Conditionally render the selected chart */}
              {showChart && (
                <div style={{ width: '100%', height: '100%' }}>
                  <Chart
                    chartType="PieChart"
                    data={chartData[selectedChart]} // Use selected chart data
                    options={chartOptions[selectedChart]} // Use selected chart options
                    width={"100%"}
                    height={"250px"}
                  />
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Modal for selecting chart */}
      {/* <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Select Chart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control as="select" value={selectedChart} onChange={handleChartChange}>
            <option value="chart1">Cloud Accounts</option>
            <option value="chart2">Daily Activities</option>
          </Form.Control>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addChart}>
            Add Chart
          </Button>
        </Modal.Footer>
      </Modal> */}
    </Container>
  );
}

export default ChartPage;
