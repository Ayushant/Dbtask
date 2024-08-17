import React from 'react';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import ChartPage from './components/ChartPage';
import { Navbar } from 'react-bootstrap';
import ChartPage2 from './components/ChartPage2';

const App = () => {
  return (
    <div className="App"  style={{ backgroundColor: '#f0f0f0'}}>
      <Navbar/>
      <Dashboard />
      <ChartPage />
      <ChartPage2/>
    </div>
  );
};

export default App;
