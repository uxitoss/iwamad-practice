import { useState } from 'react';
import ProfileLink from './ProfileLink';

type ProfileCardProps = {
  name: string;
  bio: string;
  email: string;
  github: string;
  colorClass: string;
};

function ProfileCard({ name, bio, email, github, colorClass }: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  function handleLikeClick() {
    setLiked(!liked);
  }

  type LinkItem = {
    id: string;
    label: string;
    url: string;
  };
  
  const links: LinkItem[] = [
    { id: 'email', label: 'Email', url: `mailto:${email}` },
    { id: 'github', label: 'Github', url: github },
  ];

  return (
    <div className={`card ${colorClass}`}>
      <h2>{name}</h2>
      <p>{bio}</p>
      <div className="links">
        {links.length === 0 ? (
            <p>No links yet</p>
        ) : (
            links.map((link) => (
                <ProfileLink key={link.id} label={link.label} url={link.url} />
            ))
        )}
        </div>
        <button
            className={liked ? 'like-btn liked' : 'like-btn'}
            onClick={handleLikeClick}
        >
        {liked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
}

export default ProfileCard;