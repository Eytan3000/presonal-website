export default function Card({ title }: { title: string }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '2rem',
        border: '0.5px solid #7f00e0',
        borderRadius: '10px',
        boxShadow: '0 0 5px rgba(120, 118, 118, 0.2)',
        marginRight: '1rem',
        marginBottom: '1rem',
        // width: '100%',
        // flexBasis: 'flex-basis: calc(33.33% - 20px);',
        fontWeight: 'bold',
      }}>
      {title}
    </div>
  );
}
