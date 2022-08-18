import React, { useContext } from 'react';
import StarContext from '../context/StarContext';

function FilterList() {
  const {
    filters: {
      filterByNumericValues,
    },
    setNumericValues,
  } = useContext(StarContext);

  const deletOne = (filte) => {
    const newFilter = filterByNumericValues.filter((flt) => (
      flt.column !== filte.column
    ));
    return setNumericValues(newFilter);
  };

  return (
    <div className="containerListFilter">
      Filters:
      {filterByNumericValues.map((filt) => (
        <div key={ filt.column } data-testid="filter">
          <div>{filt.column}</div>
          <button type="button" onClick={ () => deletOne(filt) }>X</button>
        </div>
      ))}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setNumericValues([]) }
      >
        REMOVER FILTROS
      </button>
    </div>
  );
}

export default FilterList;
