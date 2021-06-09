import React, { useContext } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { AppContext } from '../Provider';
import { ReactComponent as FavoriteEmptyIcon } from '../../assets/favorite-empty.svg';
import { ReactComponent as FavoriteFilledIcon } from '../../assets/favorite-filled.svg';
import { ReactComponent as ClockIcon } from '../../assets/clock.svg';
import classes from './styles.module.css';

const SingleNews = ({ data }) => {
  const [state, setState] = useContext(AppContext);

  return (
    <div className={classes.singleNews}>
      <a className={classes.singleNewsContentContainer} href={data.story_url} target="_blank" rel="noreferrer">
        <div className={classes.singleNewsContent}>
          <div className={classes.singleNewsContentPublished}>
            <ClockIcon className={classes.singleNewsClockIcon} />
            {`${moment(data.created_at).fromNow().replace(/\b(?:an|a)\b/gi, '1')} by ${data.author}`}
          </div>
          <div className={classes.singleNewsContentText}>{data.story_title}</div>
        </div>
      </a>
      <div
        className={classes.favoriteContainer}
        onClick={() => setState({ ...state, favorites: [...state.favorites, data.objectID] })}
        aria-hidden="true"
      >
        {state.favorites.includes(data.objectID) === true
          ? <FavoriteFilledIcon />
          : <FavoriteEmptyIcon />}
      </div>
    </div>
  );
};

export default SingleNews;

SingleNews.propTypes = {
  data: PropTypes.shape({
    objectID: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    story_url: PropTypes.string.isRequired,
    story_title: PropTypes.string.isRequired,
  }),
};

SingleNews.defaultProps = {
  data: {
    objectID: '2434',
    author: 'asdas',
    created_at: 'asd',
    story_title: 'test',
    story_url: 'test',
  },
};
