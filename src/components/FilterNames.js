import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function FilterNames() {
  const {
    filters: {
      filterName,
    },
    setFilterName,
  } = useContext(StarContext);

  return (
    <div>
      <input
        type="text"
        placeholder="digite um nome"
        data-testid="name-filter"
        value={ filterName }
        onChange={ ({ target }) => setFilterName(target.value) }
      />
    </div>
  );
}

export default FilterNames;
