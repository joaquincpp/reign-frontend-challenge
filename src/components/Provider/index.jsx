import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Provider = ({ children }) => {
  const storage = localStorage.getItem('reign.localStorage');

  // Sets the initial state of the context data,
  // getting some data from localStorage, in case there's any.
  const [state, setState] = useState({
    tab: storage ? JSON.parse(storage).tab : 'All',
    option: storage ? JSON.parse(storage).option : '',
    favorites: storage ? JSON.parse(storage).favorites : [],
    loading: false,
    page: 1,
    pages: 0,
  });

  // Hook that stores in localStorage all the changes in
  // dropdown selection, tab selection, and favorites.
  useEffect(() => {
    localStorage.setItem('reign.localStorage', JSON.stringify({ tab: state.tab, option: state.option, favorites: state.favorites }));
  }, [state.tab, state.option, state.favorites]);

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
