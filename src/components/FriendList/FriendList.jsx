import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { HiEmojiHappy } from 'react-icons/hi';
import { HiEmojiSad } from 'react-icons/hi';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={css.item} key={id}>
            {isOnline && (
              <span className={css.statusOnline}>
                <HiEmojiHappy />
              </span>
            )}
            {!isOnline && (
              <span className={css.statusOffline}>
                <HiEmojiSad />
              </span>
            )}
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};

export default FriendList;
