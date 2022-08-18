import React, { useContext, useEffect, useState } from 'react';
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

  const usedCatg = categories.filter(
    (clm) => !filterByNumericValues.some((elm) => clm === elm.column),
  );

  const handleClick = () => {
    setNumericValues([...filterByNumericValues, state]);
  };

  useEffect(() => {
    setState((prevState) => ({ ...prevState, column: usedCatg[0] }));
  }, [filterByNumericValues]);

  const { column, comparison, value } = state;
  return (
    <form>
      Coluna
      <select
        data-testid="column-filter"
        value={ column }
        onChange={ ({ target }) => setState({ ...state, column: target.value }) }
      >

        { usedCatg.map((clm) => (
          <option key={ clm } value={ clm }>{clm}</option>
        )) }

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
    </form>
  );
}

export default Filters;