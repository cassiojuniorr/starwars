import React from 'react';
import './App.css';
import FilterNames from './components/FilterNames';
import Filters from './components/Filters';
import Table from './components/Table';
import StarProvider from './context/StarProvider';

function App() {
  return (
    <StarProvider>
      <FilterNames />
      <Filters />
      <Table />
    </StarProvider>
  );
}

export default App;
