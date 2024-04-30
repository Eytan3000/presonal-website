import './mobileTechStack.css';
export default function MobileTechStack({
  technologies,
}: {
  technologies: string[];
}) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}>
      {technologies.map((techTitle) => (
        <div className="project-mobile-tech-card">{techTitle}</div>
      ))}
    </div>
  );
}
