import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../Provider';
import classes from './styles.module.css';
import SingleNews from '../SingleNews';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pages, setPages] = useState(0);
  const [state, setState] = useContext(AppContext);

  // Hook to set local number of pages state to global context
  useEffect(() => {
    if (pages !== state.pages) {
      setState({ ...state, pages });
    }
  }, [state, pages, setState]);

  // Hook to set local loading state to global context
  useEffect(() => {
    if (loading !== state.loading) {
      setState({ ...state, loading });
    }
  }, [state, loading, setState]);

  // Function that creates skeleton for SingleNews component
  const loadingSkeleton = () => {
    const loadingNews = [];
    for (let i = 1; i <= 8; i += 1) {
      loadingNews.push(
        <SingleNews data={{}} key={i} position={i <= 4 ? 'left' : 'right'} />,
      );
    }
    return loadingNews;
  };

  // Hook that calls the API to get all posts, using the dropdown selection parameter,
  // and the selected page from pagination.
  useEffect(() => {
    const tempNews = [];
    // Executes only on all posts tab
    if (state.tab === 'All') {
      setLoading(true);
      axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${state.option}&page=${state.page}&hitsPerPage=8`, {})
        .then((response) => {
          setLoading(false);
          // Iterates over the results and only keeps the one with all the required values.
          response.data.hits.map((element) => (
            element.story_title !== null
          && element.story_url !== null
          && element.created_at !== null
          && element.author !== null)
          && (tempNews.push(element)));
          // Stores the news into the local news state.
          setNews(tempNews);
          // Sets the total pages number on the local state from the retrieved number from the API.
          setPages(response.data.nbPages - 1);
        });
    }
  }, [state.option, state.page, state.tab]);

  // Hook that calls the API to get the data posts that are favorited and stored on localStorage.
  useEffect(() => {
    const tempNews = [];
    // Executes only on favorite posts tab
    if (state.tab === 'My faves') {
      // Function that gets all favorites data
      // by making one request to the API per favorite stored localStorage.
      const getFavorites = async () => {
        setLoading(true);
        Promise.all(
          state.favorites.slice(
            (state.page - 1) * 8, state.page * 8,
          ).map(async (favorite) => {
            await axios.get(`https://hn.algolia.com/api/v1/items/${favorite}`, {})
              .then((result) => tempNews.push(result.data));
          }),
        ).then(() => {
          setLoading(false);
          // Stores the news into the local news state.
          setNews(tempNews);
          // Sets the total pages number on the local state from the localStorage data.
          setPages(Math.ceil(state.favorites.length / 8));
        });
      };
      getFavorites();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.page, state.tab]);

  return (
    <div className={classes.newsContainer}>
      {loading === false ? (
        news.map((element, index) => (
          <SingleNews data={element} key={`${element.created_at_i}_${element.author}`} position={index < 4 ? 'left' : 'right'} />
        ))
      ) : (
        loadingSkeleton()
      )}
    </div>
  );
};

export default News;
