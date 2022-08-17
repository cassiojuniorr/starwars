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
  } = useContext(StarContext);

  useEffect(() => {
    const getPlan = async () => {
      await requestPlanets();
    };
    return getPlan();
  }, []);

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
              {response.map((plt) => (
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
