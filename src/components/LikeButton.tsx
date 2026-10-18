import { useLikes } from '../context/LikesContext';
import Button from './ui/Button';

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <Button
      className={likes > 0 ? 'like-btn liked' : 'like-btn'}
      onClick={addLike}
      aria-label={`Like (${likes} likes)`}
    >
      ♥ {likes}
    </Button>
  );
}

export default LikeButton;