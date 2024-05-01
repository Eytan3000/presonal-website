import Card from '../reusable/Card';
import './aboutMe.css';
import { useMobile } from '../../Contexts/MobileProvider';

import portraitImg from '../../assets/about/self_portrait_enhanced.png';
// import portraitImg from '../../assets/about/self_portrait_enhanced_no_bg.png';
export default function AboutMe() {
  const { isMobile } = useMobile();
  return (
    <>
      {!isMobile ? (
        <div style={{ marginTop: '2rem' }} className="grid-container">
          <div
            className="left-section"
            // style={{ marginLeft: '20px', width: '40%' }}
          >
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
            }}>
            <div
              style={{
                marginTop: '20px',
                border: '0.5px solid #b9b9b9',
                padding: '10px 10px 6px 10px',
                borderRadius: '10px',
              }}>
              <img
                className="portrait-img"
                src={portraitImg}
                alt="portrait-img"
              />
            </div>
          </div>
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
          <div
            style={{
              marginTop: '20px',
              border: '0.5px solid #b9b9b9',
              padding: '10px 10px 6px 10px',
              borderRadius: '10px',
            }}>
            <img
              className="portrait-img-mobile"
              style={{}}
              src={portraitImg}
              alt="portrait-img"
            />
          </div>
        </div>
        // you can add a PHOTO here
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
            // justifyContent: 'space-between',
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
