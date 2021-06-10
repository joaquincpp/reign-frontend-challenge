import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../Provider';
import classes from './styles.module.css';

const Pagination = () => {
  const [state, setState] = useContext(AppContext);
  const [iterator, setIterator] = useState(0);
  const { pages, page } = state;

  // Increases or decreases iterator variable depending on the direction the pagination goes.
  useEffect(() => {
    if ((Number.isInteger((page - 1) / 9)) && page > (iterator * 9) + 1) {
      setIterator((page - 1) / 9);
    }
    if ((Number.isInteger((page) / 9)) && page < (iterator * 9) + 1) {
      setIterator(((page) / 9) - 1);
    }
  }, [page, setIterator, iterator]);

  // Resets the iterator variable if there's a change in the global state's total of pages.
  useEffect(() => {
    setIterator(0);
  }, [pages]);

  // Function that generates the number buttons on pagination.
  const getPages = () => {
    const content = [];
    // Iterates with the help of the iterator variable to create the pagionation buttons
    // with their correct numbers.
    for (let i = (iterator * 9) + 1; i <= 9 + (iterator * 9); i += 1) {
      // Limits the buttons to the number of maximum available pages.
      if (i <= pages) {
        content.push(
          <button
            key={i}
            type="button"
            className={[classes.paginationButton, page === i ? classes.activePaginationButton : null].join(' ')}
            onClick={() => setState({ ...state, page: i })}
          >
            {i}
          </button>,
        );
      }
    }
    return content;
  };

  return (
    (pages > 0) && (
      <div className={classes.paginationContainer}>
        {/* Previous page button. */}
        <button
          disabled={page === 1}
          type="button"
          className={classes.paginationButton}
          onClick={() => setState({ ...state, page: page - 1 })}
        >
          <span className={[classes.arrow, classes.left].join(' ')} />
        </button>
        {/* Renders the getPages function. */}
        {getPages()}
        {/* Next page button. */}
        <button
          disabled={page >= pages}
          type="button"
          className={classes.paginationButton}
          onClick={() => setState({ ...state, page: page + 1 })}
        >
          <span className={[classes.arrow, classes.right].join(' ')} />
        </button>
      </div>
    )
  );
};

export default Pagination;
