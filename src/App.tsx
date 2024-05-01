import './App.css';
import MenuBar from './components/menuBar/MenuBar';
import Hero from './components/hero/Hero';
import AboutMe from './components/aboutMe/AboutMe';
import Planify from './components/projects/Planify/Planify';
import Compound from './components/projects/Compound/Compound';
import ChromeExtension from './components/projects/Chrome_Extension/ChromeExtension';
import Contact from './components/contact/Contact';
import MobileMenuModal from './components/menuBar/MobileMenuModal';
import { useState } from 'react';

function SectionDivider({
  number,
  title,
  mt = 0,
  id,
}: {
  number: number;
  title: string;
  mt?: number;
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
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  return (
    <>
      <MenuBar setIsMenuClicked={setIsMenuClicked} />

      <MobileMenuModal
        open={isMenuClicked}
        setIsMenuClicked={setIsMenuClicked}
      />

      <div className="main-div">
        <Hero />

        <SectionDivider
          id={'section1-about-me'}
          number={1}
          title={'About me'}
          // mt={isMobile ? 20 : 32}
        />

        <AboutMe />

        <SectionDivider
          id={'section2-projects'}
          number={2}
          title={'Things I’ve Built'}
          mt={9}
        />

        <Planify title={'Planify'} />

        <ChromeExtension title={'Chrome Extension'} />

        <Compound title={'Compound Interest Calculator'} />

        <SectionDivider
          id={'section3-contact'}
          number={3}
          title={'Contact'}
          mt={9}
        />
        <Contact />
      </div>
    </>
  );
}

export default App;
