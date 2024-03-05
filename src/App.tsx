import './App.css';
import MenuBar from './components/menuBar/MenuBar';
import Hero from './components/hero/Hero';

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
          <h2>
            <span className="menu-text-number">01.</span> About me
          </h2>
          <div
            style={{
              height: '0.5px',
              background: '#747474',
              // width: '1000px',
              width: '80%',
              maxWidth: '1000px',
              margin: 'auto',
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
