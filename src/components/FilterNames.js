import React, { useContext } from 'react';
import StarContext from '../context/StarContext';
import style from '../styles/filterNameStyle.module.scss';

function FilterNames() {
  const {
    filters: {
      filterName,
    },
    setFilterName,
  } = useContext(StarContext);
  const {
    containerName,
    titileProject,
    nameFilter,
    containerInputName,
    containerTitileProject } = style;

  return (
    <div className={ containerName }>

      <div className={ containerTitileProject }>
        <hi className={ titileProject }>Projeto Star Wars - Trybe</hi>
      </div>

      <div className={ containerInputName }>

        <input
          type="text"
          placeholder="digite um nome"
          data-testid="name-filter"
          className={ nameFilter }
          value={ filterName }
          onChange={ ({ target }) => setFilterName(target.value) }
        />

      </div>
    </div>
  );
}

export default FilterNames;
