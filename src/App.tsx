import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import Footer from './components/Footer';

type Profile = {
  id: string;
  name: string;
  bio: string;
  email: string;
  github: string;
  colorClass: string;
};

const bio =
  "Hello! I'm a third-year student at the SITE. I used to be interested in website development, and I think this course will enhance my knowledge in this field.";

const profiles: Profile[] = [
  { id: 'p1', name: 'Starkova Veronika', bio, email: 'v_starkova@kbtu.kz', github: 'https://github.com/uxitoss', colorClass: 'style-1' },
  { id: 'p2', name: 'Starkova Veronika', bio, email: 'v_starkova@kbtu.kz', github: 'https://github.com/uxitoss', colorClass: 'style-2' },
  { id: 'p3', name: 'Starkova Veronika', bio, email: 'v_starkova@kbtu.kz', github: 'https://github.com/uxitoss', colorClass: 'style-3' },
];

function App() {
  return (
    <>
      <div className="blob blob-purple"></div>
      <div className="blob blob-pink"></div>
      <Header title="3rd week of course" />
      <main>
        {profiles.length === 0 ? (
          <p>No profiles yet</p>
        ) : (
          <div className="gallery">
            {profiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                name={profile.name}
                bio={profile.bio}
                email={profile.email}
                github={profile.github}
                colorClass={profile.colorClass}
              />
            ))}
          </div>
        )}
      </main>
      <Footer year={2026} name="Starkova Veronika" />
    </>
  );
}

export default App;