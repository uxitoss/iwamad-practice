import { useLikes } from '../context/LikesContext';

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button className={likes > 0 ? 'like-btn liked' : 'like-btn'} onClick={addLike}>
      ♥ {likes}
    </button>
  );
}

export default LikeButton;