import PropTypes from 'prop-types';
import css from '../css/FriendList.module.css';

export function FriendList({ friends }) {
  const friendList = friends.map(friend => (
    <FriendListItem
      id={friend.id}
      status={friend.status}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));
  return <ul className={css.friendList}>{friendList}</ul>;
}

function FriendListItem({ id, status, avatar, name }) {
  return (
    <li key={id} className={css.item}>
      <span className={css.status}>{status}</span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array,
};

FriendListItem.propTypes = {
  id: PropTypes.number,
  status: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
};
