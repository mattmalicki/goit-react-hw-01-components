import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import css from '../css/FriendList.module.css';

export function FriendList({ friends }) {
  const friendList = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      status={friend.status}
      avatar={friend.avatar}
      name={friend.name}
    />
  ));
  return <ul className={css.friendList}>{friendList}</ul>;
}

FriendList.propTypes = {
  friends: PropTypes.array,
};
