import Tag from '../components/ui/Tag';

type Skill = { id: string; name: string };

const skills: Skill[] = [
  { id: 's1', name: 'HTML' },
  { id: 's2', name: 'CSS' },
  { id: 's3', name: 'JavaScript' },
  { id: 's4', name: 'React' },
  { id: 's5', name: 'TypeScript' },
  { id: 's6', name: 'Python' },
  { id: 's7', name: 'C++' },
  { id: 's8', name: 'C#' },
];

function SkillsPage() {
  return (
    <div>
      <h2>Skills</h2>
      {skills.length === 0 ? (
        <p>No skills yet</p>
      ) : (
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              <Tag label={skill.name} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SkillsPage;