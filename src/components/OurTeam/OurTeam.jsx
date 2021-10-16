import teammates from './data';

export default function OurTeam() {
  return (
    <div>
      <ul>
        {teammates.map(teammate => (
          <li key={teammate.id}>
            <p>{teammate.fullName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
