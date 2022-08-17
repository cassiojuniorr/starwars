import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';

function Filters() {
  const {
    filters: {
      filterByNumericValues,
    },
    setNumericValues,
  } = useContext(StarContext);

  const categories = ['population', 'orbital_period',
    'diameter', 'rotation_period', 'surface_water'];

  const [state, setState] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const usedCatg = filterByNumericValues.map(({ column }) => column);

  const handleClick = () => {
    setState({
      column: categories.filter((category) => !usedCatg.includes(category))[0],
      comparison: 'maior que',
      value: 0,
    });
    setNumericValues([...filterByNumericValues, state]);
  };

  const { column, comparison, value } = state;
  return (
    <div>
      Coluna
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setState({ ...state, column: target.value }) }
      >

        { categories.filter((category) => !usedCatg.includes(category))
          .map((category) => <option key={ category }>{ category }</option>) }

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
        onClick={ handleClick }
      >
        FILTRAR
      </button>
    </div>
  );
}

export default Filters;
