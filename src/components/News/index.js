import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from '../Provider';
import moment from 'moment'
import axios from 'axios';
import { ReactComponent as FavoriteEmptyIcon } from '../../assets/favorite-empty.svg'
import { ReactComponent as FavoriteFilledIcon } from '../../assets/favorite-filled.svg'
import { ReactComponent as ClockIcon } from '../../assets/clock.svg'
import classes from './styles.module.css'

export const News = () => {
    const [news, setNews] = useState([]);
    const [state, setState] = useContext(AppContext)

    useEffect(() => {
        let tempNews = []
        axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${state.option}&page=${state.page}&hitsPerPage=8`, {
          })
          .then((response) => {
            response?.data?.hits.map((element) => {
                if (element.story_title !== null && element.story_url !== null && element.created_at !== null && element.author !== null) {
                    tempNews.push(element)
                }
             })
            setNews(tempNews);
          }, (error) => {
            console.log(error);
          });
      }, [state.option, state.page]);

    return (
        <div className={classes.newsContainer}>
            {news.map((element, index) => (
                <div key={index} className={classes.singleNews}>
                    <a className={classes.singleNewsContentContainer} href={element.story_url} target="_blank" rel="noreferrer">
                        <div className={classes.singleNewsContent}>
                            <div className={classes.singleNewsContentPublished}>
                                <ClockIcon className={classes.singleNewsClockIcon}/>
                                {`${moment(element.created_at).fromNow().replace(/\b(?:an|a)\b/gi, "1")} by ${element.author}`}
                            </div>
                            <div className={classes.singleNewsContentText}>{element?.story_title}</div>
                        </div>
                    </a>
                    <div className={classes.favoriteContainer} onClick={() => setState({...state, favorites: [...state.favorites, element.objectID]})}>
                        {state.favorites.includes(element.objectID) === true ? <FavoriteFilledIcon /> : <FavoriteEmptyIcon />}
                    </div>
                </div>
            ))}
        </div>
    );
};