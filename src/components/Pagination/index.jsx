import React, {
  useContext, useEffect,
} from 'react';
import { AppContext } from '../Provider';

const Pagination = () => {
  const [state, setState] = useContext(AppContext);
  // Holds a ref to the bottom element to observe.
  const [bottom, setBottom] = React.useState(null);
  const [page, setPage] = React.useState(state.page);
  // Holds the IntersectionOberver.
  const bottomObserver = React.useRef(null);

  useEffect(() => {
    setState({ ...state, page });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  // Hook that attaches and detaches the bottom ref.
  useEffect(() => {
    const observer = bottomObserver.current;
    if (bottom) {
      observer.observe(bottom);
    }
    return () => {
      if (bottom) {
        observer.unobserve(bottom);
      }
    };
  }, [bottom]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setPage((pageNumber) => {
          // Increments page number if intersection is met.
          if (entry.isIntersecting) {
            return pageNumber + 1;
          }
          // Otherwise it keeps the current page number.
          return pageNumber;
        });
      },
      { threshold: 0.25, rootMargin: '50px' },
    );
    bottomObserver.current = observer;
  }, [page]);

  return (
    <div ref={setBottom} />
  );
};

export default Pagination;
