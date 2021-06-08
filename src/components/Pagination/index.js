import React, { useContext } from 'react'
import { AppContext } from '../Provider';
import classes from './styles.module.css'

export const Pagination = () => {
    const items = 68;
    const pages = items / 8;
    const [state, setState] = useContext(AppContext)
    const getPages = (itemsNumber, pageNumber) => {
        let content = [];
        const limit = pageNumber % itemsNumber !== 0 ? pageNumber + 1 : pageNumber
        for (let i = 1; i < limit; i++) {
          content.push(<button onClick={() => setState({...state, page: i})} key={i} className={[classes.paginationButton, state.page === i ? classes.activePaginationButton : null].join(" ")}>{i}</button>);
        }
        return content;
    }
    return (
        <div className={classes.paginationContainer}>
            <button className={classes.paginationButton}>
                <span className={[classes.arrow, classes.left].join(" ")} />
            </button>
            {getPages(items, pages)}
            <button className={classes.paginationButton}>
                <span className={[classes.arrow, classes.right].join(" ")} />
            </button>
        </div>
    );
};