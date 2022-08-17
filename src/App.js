import React from 'react';
import './App.css';
import FilterNames from './components/FilterNames';
import Table from './components/Table';
import StarProvider from './context/StarProvider';

function App() {
  return (
    <StarProvider>
      <FilterNames />
      <Table />
    </StarProvider>
  );
}

export default App;
