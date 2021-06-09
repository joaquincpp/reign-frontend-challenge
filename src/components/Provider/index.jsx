/* eslint-disable no-undef */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const storage = localStorage.getItem('reign.localStorage');

  const [state, setState] = useState({
    tab: JSON.parse(storage).tab || 'All',
    option: JSON.parse(storage).option || undefined,
    page: 1,
    favorites: JSON.parse(storage).favorites || [],
  });

  useEffect(() => {
    localStorage.setItem('reign.localStorage', JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;

export const AppContext = createContext();

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
