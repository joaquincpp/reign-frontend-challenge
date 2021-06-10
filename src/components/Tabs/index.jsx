import React, { useContext } from 'react';
import { AppContext } from '../Provider';
import classes from './styles.module.css';

const Tabs = () => {
  const [state, setState] = useContext(AppContext);

  // Available tabs to render.
  const tabs = [
    {
      name: 'All',
    },
    {
      name: 'My faves',
    },
  ];

  return (
    <div className={classes.tabsContainer}>
      {/* Iterates over the available tabs defined on the 'tabs' object. */}
      {tabs.map((element) => (
        <button
          key={element.name}
          type="button"
          // Uses CSS classes to apply border and typography colors.
          className={[state.tab === element.name ? classes.activeTab : null, classes.defaultTab].join(' ')}
          // onClick sets the tab option on the global context,
          // and sets the number of pages and current page on pagination to their default values.
          onClick={() => setState({
            ...state,
            tab: element.name,
            pages: 0,
            page: 1,
          })}
        >
          {element.name}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
