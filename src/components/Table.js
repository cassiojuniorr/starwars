import React, { useContext, useEffect } from 'react';
import StarContext from '../context/StarContext';
import Load from './Load';
import style from '../styles/table.module.scss';

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
          return Number(plt[column]) > +value;
        }
        if (comparison === 'menor que') {
          return Number(plt[column]) < value;
        }
        return +plt[column] === +value;
      }));

  const {
    containerTable,
    theader,
    titleContainer,
    title,
    tbodyC,
    containerPlanets,
    planets,
  } = style;

  return (
    <div>
      { (load) ? <Load />
        : (
          <table className={ containerTable }>

            <thead className={ theader }>
              <tr className={ titleContainer }>
                {keys.map((elm) => (
                  <th className={ title } key={ elm }>
                    {
                      elm.replace('_', ' ')
                    }
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className={ tbodyC }>
              {filtersInputs.map((plt) => (
                <tr key={ plt } className={ containerPlanets }>
                  {
                    keys.map((elm) => (
                      <td key={ elm } className={ planets }>{plt[elm]}</td>
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
