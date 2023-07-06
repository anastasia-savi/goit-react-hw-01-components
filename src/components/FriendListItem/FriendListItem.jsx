import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';
import { HiEmojiHappy } from 'react-icons/hi';
import { HiEmojiSad } from 'react-icons/hi';

const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <>
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
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
