import React from 'react'
import classes from './styles.module.css'
import { ReactComponent as FavoriteEmptyIcon } from '../../assets/favorite-empty.svg'
import { ReactComponent as FavoriteFilledIcon } from '../../assets/favorite-filled.svg'
import { ReactComponent as ClockIcon } from '../../assets/clock.svg'

export const News = () => {
    const news = [
        {
            published: "3 hours ago by author",
            content: "All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019)",
            favorite: true,
        },
        {
            published: "3 hours ago by author",
            content: "All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019)",
            favorite: false,
        },
        {
            published: "3 hours ago by author",
            content: "All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019)",
            favorite: false,
        },
        {
            published: "3 hours ago by author",
            content: "All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019)",
            favorite: true,
        },
        {
            published: "3 hours ago by author",
            content: "All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019)",
            favorite: false,
        },
        {
            published: "3 hours ago by author",
            content: "All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019)",
            favorite: true,
        },
        {
            published: "3 hours ago by author",
            content: "All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019)",
            favorite: true,
        },
        {
            published: "3 hours ago by author",
            content: "All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019)",
            favorite: true,
        },
    ]
    return (
        <div className={classes.newsContainer}>
            {news.map((element, index) => (
                <div key={index} className={classes.singleNews}>
                    <div className={classes.singleNewsContentContainer}>
                        <div className={classes.singleNewsContentPublished}>
                            <ClockIcon className={classes.singleNewsClockIcon}/>
                            {element.published}
                        </div>
                        <div className={classes.singleNewsContentText}>{element.content}</div>
                    </div>
                    <div className={classes.favoriteContainer}>
                        {element.favorite === true ? <FavoriteFilledIcon /> : <FavoriteEmptyIcon />}
                    </div>
                </div>
            ))}
        </div>
    );
};