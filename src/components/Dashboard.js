import React, { useState, useEffect } from 'react';
import AddWidgetForm from './AddWidgetForm';
import { Container, Row, Col, Button, Offcanvas, Form } from 'react-bootstrap';


// Example chart data and options
const chartData = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
];

const chartOptions = {
  title: "Daily Activities",
  pieHole: 0.6,
  is3D: false,
};

const defaultCategory = 'Default'; // Define a default category

const Dashboard = () => {
  // State to store widgets
  const [widgets, setWidgets] = useState([]);
  
  // State to control sidebar visibility
  const [showSidebar, setShowSidebar] = useState(false);

  // State to control search term
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch data when component mounts
  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setWidgets(data.widgets || []))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Handle adding a widget
  const handleAddWidget = (widget) => {
    setWidgets(prev => [...prev, { ...widget, category: defaultCategory }]);
  };

  // Handle removing a widget
  const handleRemoveWidget = (widgetId) => {
    setWidgets(prev => prev.filter(widget => widget.id !== widgetId));
  };

  // Filter widgets based on the search term
  const filteredWidgets = () => {
    if (!searchTerm) return widgets;
    return widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      widget.text.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1 className='fs-4'>CNAPP Dashboard</h1>
        </Col>
        <Col className="text-end">
          {/* Button to open the sidebar */}
          <Button variant="primary" onClick={() => setShowSidebar(true)}>+ Add Widget</Button>
        </Col>
      </Row>

      {/* Search bar */}
      <Row className="mt-4">
        <Col>
          <Form.Control
            type="text"
            placeholder="Search widgets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
      </Row>

      {/* Sidebar for adding widgets */}
      <Offcanvas show={showSidebar} onHide={() => setShowSidebar(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Widget</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Add widget form */}
          <AddWidgetForm onAddWidget={handleAddWidget} />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Display widgets */}
      <Row className="mt-4">
        {filteredWidgets().map(widget => (
          <Col key={widget.id} md={4} className="mb-3">
            <div className="widget-container p-3 border bg-light position-relative">
              <h5>{widget.name}</h5>
              <p>{widget.text}</p>
              <Button 
                variant="danger" 
                onClick={() => handleRemoveWidget(widget.id)}
                className="remove-button position-absolute top-0 end-0 m-2"
              >
                Remove
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Dashboard;
