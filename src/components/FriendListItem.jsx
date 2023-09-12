import PropTypes from 'prop-types';
import css from '../css/FriendList.module.css';

export function FriendListItem({ id, status, avatar, name }) {
  return (
    <li key={id} className={css.item}>
      <span className={css.status}>{status}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number,
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
