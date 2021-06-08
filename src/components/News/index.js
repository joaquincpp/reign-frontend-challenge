import React, { useEffect, useState } from 'react'
import axios from 'axios';
// import { ReactComponent as FavoriteEmptyIcon } from '../../assets/favorite-empty.svg'
import { ReactComponent as FavoriteFilledIcon } from '../../assets/favorite-filled.svg'
import { ReactComponent as ClockIcon } from '../../assets/clock.svg'
import classes from './styles.module.css'

export const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        let tempNews = []
        axios.get('https://hn.algolia.com/api/v1/search_by_date?query=angular&page=0&hitsPerPage=8', {
          })
          .then((response) => {
            response?.data?.hits.map((element) => (element.story_title !== null && element.story_url !== null && element.created_at !== null && element.author !== null) && tempNews.push(element) )
            setNews(tempNews);
          }, (error) => {
            console.log(error);
          });
      }, []);

    return (
        <div className={classes.newsContainer}>
            {news.map((element, index) => (
                // story_url
                <div key={index} className={classes.singleNews}>
                    <a className={classes.singleNewsContentContainer} href={element.story_url} target="_blank" rel="noreferrer">
                        <div className={classes.singleNewsContentPublished}>
                            <ClockIcon className={classes.singleNewsClockIcon}/>
                            {`${element.created_at} by ${element.author}`}
                        </div>
                        <div className={classes.singleNewsContentText}>{element?.story_title}</div>
                    </a>
                    <div className={classes.favoriteContainer}>
                        {/* {element.favorite === true ? <FavoriteFilledIcon /> : <FavoriteEmptyIcon />} */}
                        <FavoriteFilledIcon />
                    </div>
                </div>
            ))}
        </div>
    );
};