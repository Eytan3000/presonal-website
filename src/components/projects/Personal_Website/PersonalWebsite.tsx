import './personal_website.css';

import { FaGithub } from 'react-icons/fa';
import { CiShare1 } from 'react-icons/ci';

import mainImage from '../../../assets/placeholders/EytanKrief.png';

const projectUrl = '';
const gitHubUrl = 'https://github.com/Eytan3000/presonal-website';

function Details() {
  return (
    <>
      <p style={{ display: 'inline-block', marginBlock: '0 20px' }}>
        Tools and technologies used in this project:
      </p>

      <div className="tech-stack-grid-container">
        <div className="tech-card-container">React</div>
        <div className="tech-card-container">TypeScript</div>
        <div className="tech-card-container">CSS</div>
      </div>
    </>
  );
}

function BottomDivider() {
  return (
    <div
      style={{
        marginTop: '4rem',
        border: '0.1px solid #d7d7d7',
      }}
    />
  );
}

export default function PersonalWebsite({ title }: { title: string }) {
  const handleOpenProjectUrl = () => window.open(projectUrl, '_blank');
  const handleGithubClick = () => window.open(gitHubUrl, '_blank');

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '2rem',
          marginInline: '5rem',
        }}>
        <h2 style={{ fontSize: '40px', margin: '0' }}>{title}</h2>
        <p style={{ color: '#7f00e0', marginBottom: '3rem' }}>
          My personal potfolio
        </p>

        <div className="grid-container">
          <div
            onClick={handleOpenProjectUrl}
            className="left-section"
            style={{
              cursor: 'pointer',
            }}>
            <img
              className="project-img"
              src={mainImage}
              alt={title + ' project image'}
            />
          </div>
          <div style={{ margin: '0 2rem' }} className="right-section">
            <Details />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '3rem',
          }}>
          <div style={{ width: '164px' }} />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '2rem',
            }}>
            <FaGithub className="icon" onClick={handleGithubClick} size={40} />
            <CiShare1
              className="icon"
              onClick={handleOpenProjectUrl}
              size={40}
            />
            <div style={{ width: '20px' }} />
          </div>
        </div>
      </div>

      {/* SHOW_MORE */}
      {/* {showInfo && <ShowMore />}*/}
      <BottomDivider />
    </>
  );
}
