import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Provider';
import classes from './styles.module.css';

const Pagination = () => {
  const [state, setState] = useContext(AppContext);
  const [iterator, setIterator] = useState(0);
  const { pages, page } = state;

  useEffect(() => {
    if ((Number.isInteger((page - 1) / 9)) && page > (iterator * 9) + 1) {
      setIterator((page - 1) / 9);
    }
    if ((Number.isInteger((page) / 9)) && page < (iterator * 9) + 1) {
      setIterator(((page) / 9) - 1);
    }
  }, [page, setIterator, iterator]);

  const getPages = () => {
    const content = [];
    for (let i = (iterator * 9) + 1; i <= 9 + (iterator * 9); i += 1) {
      if (i <= (pages - 1)) {
        content.push(
          <button
            type="button"
            onClick={() => setState({ ...state, page: i })}
            key={i}
            className={[classes.paginationButton, page === i ? classes.activePaginationButton : null].join(' ')}
          >
            {i}
          </button>,
        );
      }
    }
    return content;
  };
  return (
    (pages !== undefined) && (
      <div className={classes.paginationContainer}>
        <button disabled={page === 1} type="button" className={classes.paginationButton} onClick={() => setState({ ...state, page: page - 1 })}>
          <span className={[classes.arrow, classes.left].join(' ')} />
        </button>
        {getPages()}
        <button disabled={page >= pages - 1} type="button" className={classes.paginationButton} onClick={() => setState({ ...state, page: page + 1 })}>
          <span className={[classes.arrow, classes.right].join(' ')} />
        </button>
      </div>
    )
  );
};

export default Pagination;
