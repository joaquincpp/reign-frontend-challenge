/* eslint-disable no-undef */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const storage = localStorage.getItem('reign.localStorage');

  const [state, setState] = useState({
    tab: storage ? JSON.parse(storage).tab : 'All',
    option: storage ? JSON.parse(storage).option : '',
    favorites: storage ? JSON.parse(storage).favorites : [],
    loading: false,
    pages: undefined,
    page: 1,
  });

  useEffect(() => {
    localStorage.setItem('reign.localStorage', JSON.stringify({ tab: state.tab, option: state.option, favorites: state.favorites }));
  }, [state]);

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;

export const AppContext = createContext();
