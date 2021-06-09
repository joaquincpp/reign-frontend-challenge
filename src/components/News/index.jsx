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

  useEffect(() => {
    if (pages !== state.pages) {
      setState({ ...state, pages });
    }
  }, [state, pages, setState]);

  useEffect(() => {
    if (loading !== state.loading) {
      setState({ ...state, loading });
    }
  }, [state, loading, setState]);

  useEffect(() => {
    const tempNews = [];
    if (state.tab === 'All') {
      setLoading(true);
      axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${state.option}&page=${state.page}&hitsPerPage=8`, {})
        .then((response) => {
          setLoading(false);
          setPages(response.data.nbPages);
          response.data.hits.map((element) => (
            element.story_title !== null
          && element.story_url !== null
          && element.created_at !== null
          && element.author !== null)
          && (tempNews.push(element)));
          setNews(tempNews);
        });
    }
  }, [state.option, state.page, state.tab]);

  useEffect(() => {
    const tempNews = [];
    if (state.tab === 'My faves') {
      setLoading(true);
      const getFavorites = async () => {
        Promise.all(
          state.favorites.map(async (favorite) => {
            await axios.get(`http://hn.algolia.com/api/v1/items/${favorite}`, {})
              .then((result) => tempNews.push(result.data));
          }),
        ).then(() => {
          setLoading(false);
          setNews(tempNews);
        });
      };
      getFavorites();
    }
  }, [state.favorites, state.tab]);

  return (
    <div className={classes.newsContainer}>
      {news.map((element) => (
        <SingleNews data={element} key={element.created_at_i} />
      ))}
    </div>
  );
};

export default News;
