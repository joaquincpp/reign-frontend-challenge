import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../Provider';
import classes from './styles.module.css';
import SingleNews from '../SingleNews';

const News = () => {
  const [news, setNews] = useState([]);
  const [state] = useContext(AppContext);

  useEffect(() => {
    const tempNews = [];
    if (state.tab === 'My faves') {
      state.favorites.map((favorite) => axios.get(`http://hn.algolia.com/api/v1/items/${favorite}`, {})
        .then((response) => {
          tempNews.push(response.data);
        }));
      setNews(tempNews);
    } else {
      axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${state.option}&page=${state.page}&hitsPerPage=8`, {})
        .then((response) => {
          response.data.hits.map((element) => (
            element.story_title !== null
            && element.story_url !== null
            && element.created_at !== null
            && element.author !== null)
            && (tempNews.push(element)));
          setNews(tempNews);
        });
    }
  }, [state.favorites, state.option, state.page, state.tab]);

  return (
    <div className={classes.newsContainer}>
      {news.map((element) => (
        <SingleNews data={element} key={element.story_title} />
      ))}
    </div>
  );
};

export default News;
