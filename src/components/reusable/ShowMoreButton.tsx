export default function ShowMoreButton({
  idToGlide,
  showInfo,
}: {
  idToGlide: string;
  showInfo: boolean;
}) {
  return (
    <button style={{ marginBottom: '20px' }}>
      {showInfo ? (
        'Show less'
      ) : (
        <a style={{ color: 'var(----main-color' }} href={`#${idToGlide}`}>
          Show more
        </a>
      )}
    </button>
  );
}
