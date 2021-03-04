import React from 'react';
import './App.css';
import Band from './Band';
import Heading from './Heading';
import MetalMeta from './MetalMeta';

function App() {
  return (
    <div className="App">
      <Heading />
      <MetalMeta />
      <Band />
    </div>
  );
}

export default App;