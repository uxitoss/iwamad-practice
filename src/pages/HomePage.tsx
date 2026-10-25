import ProfileCard from '../components/ProfileCard';

function HomePage() {
  return (
    <div className="home-single">
      <ProfileCard
        name="Starkova Veronika"
        bio="Hello! I'm a third-year student at the SITE. I used to be interested in website development, and I think this course will enhance my knowledge in this field."
        email="v_starkova@kbtu.kz"
        github="https://github.com/uxitoss"
        colorClass="style-1"
      />
    </div>
  );
}

export default HomePage;