import './App.css';
import MenuBar from './components/menuBar/MenuBar';
import Hero from './components/hero/Hero';
import AboutMe from './components/aboutMe/AboutMe';

function SectionDivider({ number, title }: { number: number; title: string }) {
  return (
    <>
      <h2 className="hero-secondary-title">
        <span className="menu-text-number">0{number}.</span> {title}
      </h2>
      <hr className="divider" />
    </>
  );
}

function App() {
  return (
    <>
      <MenuBar />
      <div className="main-div">
        <Hero />

        <div
          style={{
            marginTop: '32em',
            display: 'flex',
          }}>
          <SectionDivider number={1} title={'About me'} />
        </div>
        <AboutMe />
      </div>
    </>
  );
}

export default App;
