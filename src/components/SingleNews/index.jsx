import React, { useContext } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { AppContext } from '../Provider';
import { ReactComponent as FavoriteEmptyIcon } from '../../assets/favorite-empty.svg';
import { ReactComponent as FavoriteFilledIcon } from '../../assets/favorite-filled.svg';
import { ReactComponent as ClockIcon } from '../../assets/clock.svg';
import classes from './styles.module.css';

const SingleNews = ({ data }) => {
  // Gets the global context of the application.
  const [state, setState] = useContext(AppContext);

  // Handles to favorite or unfavorite action.
  const favoriteHandler = (id) => {
    // If the post is favorited, it unfavorite it.
    if (state.favorites.includes(id) === true) {
      const filteredFavorites = state.favorites.filter((value) => value !== id);
      setState({ ...state, favorites: filteredFavorites });
    // If the post is not favorited, it favorites it.
    } else {
      setState({ ...state, favorites: [id, ...state.favorites] });
    }
  };

  return (
    <div className={[classes.singleNews, state.loading ? classes.animation : null].join(' ')}>
      {/* White background container with the post's text and link to its url.  */}
      <a className={classes.singleNewsContentContainer} href={data.story_url || data.url} target="_blank" rel="noreferrer">
        <div className={classes.singleNewsContent}>
          <div className={classes.singleNewsContentPublished}>
            <ClockIcon className={classes.singleNewsClockIcon} />
            {/* Formats the post's date to the format 'X hours/days/weeks ago'
            plus its author's name. */}
            {`${moment(data.created_at).fromNow().replace(/\b(?:an|a)\b/gi, '1')} by ${data.author}`}
          </div>
          <div className={classes.singleNewsContentText}>{data.story_title || data.title}</div>
        </div>
      </a>
      {/* Gray background container with the favorite icon. */}
      <div
        className={classes.favoriteContainer}
        onClick={() => favoriteHandler(data.story_id || data.id)}
        aria-hidden="true"
      >
        {state.favorites.includes(data.story_id || data.id) === true
          ? <FavoriteFilledIcon />
          : <FavoriteEmptyIcon />}
      </div>
    </div>
  );
};

SingleNews.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    story_id: PropTypes.number,
    author: PropTypes.string,
    created_at: PropTypes.string,
    url: PropTypes.string,
    story_url: PropTypes.string,
    title: PropTypes.string,
    story_title: PropTypes.string,
  }),
};

SingleNews.defaultProps = {
  data: {
    id: undefined,
    story_id: undefined,
    author: 'author',
    created_at: Date.now(),
    url: '#',
    story_url: '#',
    title: 'Title',
    story_title: 'Title',
  },
};

export default SingleNews;
