import PropTypes from 'prop-types';
import css from '../css/FriendList.module.css';

export function FriendListItem({ status, avatar, name }) {
  const statusClass = status ? css.on : css.off;
  return (
    <li className={css.item}>
      <span className={[css.status, statusClass].join(' ')}></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
