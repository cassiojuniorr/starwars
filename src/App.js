import React from 'react';
import './App.css';
import FilterNames from './components/FilterNames';
import Filters from './components/Filters';
import Table from './components/Table';
import StarProvider from './context/StarProvider';
import FilterList from './components/FilterList';
import style from './styles/table.module.scss';

function App() {
  return (
    <div className={ style.page }>
      <StarProvider>
        <div className={ style.containerComponents }>
          <FilterNames />
          <Filters />
          <FilterList />
          <Table />
        </div>
      </StarProvider>
    </div>
  );
}

export default App;
