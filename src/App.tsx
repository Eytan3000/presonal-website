import './App.css';
import MenuBar from './components/menuBar/MenuBar';
import Hero from './components/hero/Hero';
import AboutMe from './components/aboutMe/AboutMe';
import ProjectDetails from './components/reusable/projectDetails/ProjectDetails';
import Card from './components/reusable/Card';

function SectionDivider({
  number,
  title,
  mt,
}: {
  number: number;
  title: string;
  mt: number;
}) {
  return (
    <>
      <div
        style={{
          marginTop: `${mt}em`,
          display: 'flex',
          gap: '1rem',
        }}>
        <h2 className="hero-secondary-title" style={{ whiteSpace: 'nowrap' }}>
          <span className="menu-text-number">0{number}.</span> {title}
        </h2>
        <hr />
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <MenuBar />
      <div className="main-div">
        <Hero />

        <SectionDivider number={1} title={'About me'} mt={32} />

        <AboutMe />
        {/* <SectionDivider number={3} title={'Technologies I Use'} mt={9} /> */}

        {/* <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <Card title={'JavaScript'} />
          <Card title={'TypeScript'} />
          <Card title={'React'} />
          <Card title={'Redux'} />
          <Card title={'NodeJS'} />
          <Card title={'ExpressJS'} />
          <Card title={'MySQL'} />
          <Card title={'Github'} />
        </div> */}

        <SectionDivider number={2} title={'Things I’ve Built'} mt={9} />

        <ProjectDetails title={'Planify'} />
        <ProjectDetails title={'Planify'} />
        <ProjectDetails title={'Planify'} />

        <SectionDivider number={3} title={'Contact'} mt={9} />
      </div>
    </>
  );
}

export default App;
