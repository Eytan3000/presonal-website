import './hero.css';

const meopLink = 'https://mepo.info/';

export default function Hero() {
  return (
    <div className="hero">
      <p className="code-text">Hi, my name is</p>
      <h1>Eytan Krief</h1>
      <h2 className="hero-secondary-title">
        I’m a <b>Full-Stack developer</b> specializing in building exceptional
        digital experiences. Currently, I’m focused on building human-centered
        products at{' '}
        <a target="_blank" href={meopLink} className="mepo-link">
          Mepo
        </a>
        .
      </h2>
      <button className="cv-button">CV</button>
    </div>
  );
}
