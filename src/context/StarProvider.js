import React, { useState } from 'react';
import PropTypes from 'prop-types';
import StarContext from './StarContext';
import { getPlanets, getPlanetsKeys } from '../services/StarApi';

function StarProvider(props) {
  const [response, setResponse] = useState([]);
  const [erroApi, setErroApi] = useState('');
  const [load, setLoad] = useState(false);
  const [keys, setKeys] = useState([]);

  const requestPlanets = async () => {
    setLoad(true);
    try {
      const resp = await getPlanets();
      const planetKey = await getPlanetsKeys();

      setResponse(resp);
      setKeys(planetKey);
      setLoad(false);
    } catch (error) {
      setErroApi(error.message);
      setLoad(false);
    }
  };

  const { children } = props;
  const objVal = {
    requestPlanets,
    response,
    erroApi,
    load,
    keys,
  };
  return (
    <StarContext.Provider value={ objVal }>
      {children}
    </StarContext.Provider>
  );
}

// pegurei o propType do children nesse site https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children

StarProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default StarProvider;
