import React, { useContext } from 'react';
import StarContext from '../context/StarContext';
import style from '../styles/filterList.module.scss';

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

  const {
    containerListFilter,
    containerElm,
    btnX,
    btnRemoveFilter } = style;

  return (
    <div className={ containerListFilter }>
      {filterByNumericValues.map((filt) => (
        <div key={ filt.column } data-testid="filter" className={ containerElm }>
          <div>{filt.column}</div>
          <button
            type="button"
            onClick={ () => deletOne(filt) }
            className={ btnX }
          >
            X
          </button>
        </div>
      ))}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setNumericValues([]) }
        className={ btnRemoveFilter }
      >
        REMOVER FILTROS
      </button>
    </div>
  );
}

export default FilterList;
