import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddWidgetForm = ({ onAddWidget }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (widgetName && widgetText) {
      const newWidget = {
        id: Date.now(), // simple unique ID
        name: widgetName,
        text: widgetText,
      };
      onAddWidget(newWidget);
      setWidgetName('');
      setWidgetText('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Widget Name</Form.Label>
        <Form.Control
          type="text"
          value={widgetName}
          onChange={(e) => setWidgetName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Widget Text</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={widgetText}
          onChange={(e) => setWidgetText(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Widget
      </Button>
    </Form>
  );
};

export default AddWidgetForm;
