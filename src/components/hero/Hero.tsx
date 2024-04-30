import './hero.css';

import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { openWindow } from '../../helper_functions/helper_functions';
import { useMobile } from '../../Contexts/MobileProvider';

const meopLink = 'https://mepo.info/';
const gitHubLink = 'https://github.com/Eytan3000';
const linkedInLink = 'https://www.linkedin.com/in/eytan-krief/';

export default function Hero() {
  const { isMobile } = useMobile();
  function handleGithubClick() {
    openWindow(gitHubLink);
  }
  function handleLinkedInClick() {
    openWindow(linkedInLink);
  }
  return (
    <div
      className="hero"
      style={{
        marginTop: isMobile ? '0' : '',
        marginBottom: '25%',
      }}>
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
      {/* <button className="cv-button">CV</button> */}
      <div
        style={{
          display: 'flex',
          gap: '30px',
          marginTop: '30px',
        }}>
        <FaGithub
          className="hero-social-icon"
          onClick={handleGithubClick}
          size={40}
        />
        <FaLinkedin
          className="hero-social-icon"
          onClick={handleLinkedInClick}
          size={40}
        />
      </div>
    </div>
  );
}
