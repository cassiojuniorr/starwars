import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';

function Filters() {
  const {
    filters: {
      filterByNumericValues,
    },
    setNumericValues,
  } = useContext(StarContext);

  const [state, setState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const { column, comparison, value } = state;
  return (
    <div>
      Coluna
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setState({ ...state, column: target.value }) }
      >
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      Comparison
      <select
        data-testid="comparison-filter"
        value={ comparison }
        onChange={ ({ target }) => setState({ ...state, comparison: target.value }) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>

      <input
        type="number"
        data-testid="value-filter"
        value={ value }
        onChange={ ({ target }) => setState({ ...state, value: target.value }) }
      />

      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setNumericValues([...filterByNumericValues, state]) }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default Filters;
