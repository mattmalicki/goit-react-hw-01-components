import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from '../css/FriendList.module.css';

export function FriendList({ friends }) {
  const friendList = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      status={friend.isOnline}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));
  return <ul className={css['friend-list']}>{friendList}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
