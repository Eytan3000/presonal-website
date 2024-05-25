import Card from '../reusable/Card';
import './aboutMe.css';
import { useMobile } from '../../Contexts/MobileProvider';

export default function AboutMe() {
  const { isMobile } = useMobile();
  return (
    <>
      {!isMobile ? (
        <div style={{ marginTop: '2rem' }} className="grid-container">
          <div className="left-section">
            <p style={{ fontSize: '20px' }}>
              I come from a music and sound design background, and about two
              years ago I started learning JavaScript. What started as a
              curiosity-driven journey into coding has evolved into a deep love
              for programming, fueling my passion for innovation and continuous
              learning.
              <br />
              <b
                style={{
                  fontSize: '30px',
                  display: 'inline-block',
                  marginTop: '6px',
                }}>
                Today
              </b>{' '}
              I work for a company that provides a platform for the Ministry of
              Education, solving real-world problems, and collaborating with a
              real professional team. <br /> At the same time,{' '}
              <b> I pursue personal projects </b>, constantly researching and
              learning, deepening my understanding of the technologies within my
              stack, which includes:
            </p>
          </div>

          <div
            className="right-section"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}></div>
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <p style={{ fontSize: '20px' }}>
            I come from a music and sound design background, and about two years
            ago I started learning JavaScript. What started as a
            curiosity-driven journey into coding has evolved into a deep love
            for programming, fueling my passion for innovation and continuous
            learning.
            <br />
            <b
              style={{
                fontSize: '30px',
                display: 'inline-block',
                marginTop: '6px',
              }}>
              Today
            </b>{' '}
            I work for a company that provides a platform for the Ministry of
            Education, solving real-world problems, and collaborating with a
            real professional team. <br /> At the same time,{' '}
            <b> I pursue personal projects </b>, constantly researching and
            learning, deepening my understanding of the technologies within my
            stack, which includes:
          </p>
        </div>
      )}

      <h2
        style={{
          marginTop: '5rem',
        }}>
        {' '}
        My stack:
      </h2>
      {!isMobile ? (
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
          }}>
          <Card title={'JavaScript'} />
          <Card title={'TypeScript'} />
          <Card title={'React'} />
          <Card title={'Redux'} />
          <Card title={'NodeJS'} />
          <Card title={'ExpressJS'} />
          <Card title={'MySQL'} />
          <Card title={'Github'} />
        </div>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
          }}>
          <div className="mobile-tech-card">JavaScript</div>
          <div className="mobile-tech-card">TypeScript</div>
          <div className="mobile-tech-card">React</div>
          <div className="mobile-tech-card">Redux</div>
          <div className="mobile-tech-card">NodeJS</div>
          <div className="mobile-tech-card">ExpressJS</div>
          <div className="mobile-tech-card">MySQL</div>
          <div className="mobile-tech-card">Github</div>
        </div>
      )}
    </>
  );
}
