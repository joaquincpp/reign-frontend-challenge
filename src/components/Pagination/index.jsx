import React, { useContext } from 'react';
import { AppContext } from '../Provider';
import classes from './styles.module.css';

const Pagination = () => {
  const items = 68;
  const pages = items / 8;
  const [state, setState] = useContext(AppContext);
  const getPages = (itemsNumber, pageNumber) => {
    const content = [];
    const limit = pageNumber % itemsNumber !== 0 ? pageNumber + 1 : pageNumber;
    for (let i = 1; i < limit; i += 1) {
      content.push(<button type="button" onClick={() => setState({ ...state, page: i })} key={i} className={[classes.paginationButton, state.page === i ? classes.activePaginationButton : null].join(' ')}>{i}</button>);
    }
    return content;
  };
  return (
    <div className={classes.paginationContainer}>
      <button type="button" className={classes.paginationButton}>
        <span className={[classes.arrow, classes.left].join(' ')} />
      </button>
      {getPages(items, pages)}
      <button type="button" className={classes.paginationButton}>
        <span className={[classes.arrow, classes.right].join(' ')} />
      </button>
    </div>
  );
};

export default Pagination;
