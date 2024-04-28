import Card from '../reusable/Card';
import './aboutMe.css';

export default function AboutMe() {
  return (
    <>
      <div style={{ marginTop: '2rem' }} className="grid-container">
        <div
          className="left-section"
          // style={{ marginLeft: '20px', width: '40%' }}
        >
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
        <div className="right-section">
          <div
            style={{
              margin: '15% auto ',
              height: '70%',
              width: '70%',
              border: '0.5px dashed',
            }}
          />
        </div>
      </div>

      <h2
        style={{
          marginTop: '5rem',
        }}>
        {' '}
        My stack:
      </h2>
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
    </>
  );
}
