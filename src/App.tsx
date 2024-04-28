import './App.css';
import MenuBar from './components/menuBar/MenuBar';
import Hero from './components/hero/Hero';
import AboutMe from './components/aboutMe/AboutMe';
import Planify from './components/projects/Planify/Planify';
import Compound from './components/projects/Compound/Compound';
import ChromeExtension from './components/projects/Chrome_Extension/ChromeExtension';

function SectionDivider({
  number,
  title,
  mt,
  id,
}: {
  number: number;
  title: string;
  mt: number;
  id: string;
}) {
  return (
    <>
      <div
        id={id}
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

        <SectionDivider
          id={'section1-about-me'}
          number={1}
          title={'About me'}
          mt={32}
        />

        <AboutMe />

        <SectionDivider
          id={'section2-projects'}
          number={2}
          title={'Things I’ve Built'}
          mt={9}
        />

        <Planify title={'Planify'} />
        <Compound title={'Compound Interest Calculator'} />
        <ChromeExtension title={'Chrome Extension'} />
        {/* <PersonalWebsite title={'Portfolio'} /> */}

        <SectionDivider
          id={'section3-contact'}
          number={3}
          title={'Contact'}
          mt={9}
        />
      </div>
    </>
  );
}

export default App;
