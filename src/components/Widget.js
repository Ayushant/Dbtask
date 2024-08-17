import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Widget = ({ widget, onRemove }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={onRemove}><FaTimes /></button>
    </div>
  );
};

export default Widget;
