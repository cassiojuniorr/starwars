import React, { useContext, useEffect } from 'react';
// import PropTypes from 'prop-types';
import StarContext from '../context/StarContext';
import Load from './Load';

function Table() {
  const {
    requestPlanets,
    response,
    load,
    keys,
    filters: {
      filterName,
      filterByNumericValues,
    },
  } = useContext(StarContext);

  useEffect(() => {
    const getPlan = async () => {
      await requestPlanets();
    };
    return getPlan();
  }, []);

  const filtersInputs = response
    .filter((plt) => plt.name.toLowerCase().includes(filterName.toLowerCase()))
    .filter((plt) => filterByNumericValues
      .every(({ column, comparison, value }) => {
        if (comparison === 'maior que') {
          return Number(plt[column]) > value;
        }
        if (comparison === 'menor que') {
          return Number(plt[column]) < value;
        }
        return +plt[column] === +value;
      }));

  return (
    <div>
      { (load) ? <Load />
        : (
          <table>
            <thead>
              <tr>
                {keys.map((elm) => (
                  <th key={ elm }>{elm}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filtersInputs.map((plt) => (
                <tr key={ plt }>
                  {
                    keys.map((elm) => (
                      <td key={ elm }>{plt[elm]}</td>
                    ))
                  }
                </tr>
              ))}
            </tbody>
          </table>
        )}
    </div>
  );
}

Table.propTypes = {

};

export default Table;
