import PropTypes from 'prop-types';
import css from '../css/Profile.module.css';

export function Profile({
  username,
  tag,
  location,
  imgUrl,
  followers,
  views,
  likes,
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={imgUrl} alt={username} className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css['stats-item']}>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={[css['stats-item'], css['stats-item-even']].join(' ')}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css['stats-item']}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  imgUrl: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
