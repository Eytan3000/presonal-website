import logo from '../../assets/KRIEF_Icon_RGB.png';
import './menuBar.css';

export default function MenuBar() {
  return (
    <div className="menu-bar">
      <img className="logo" src={logo} alt="" />
      <div className="menu-links-container">
        <a href="#section1-about-me">
          <h3 className="menu-text">
            <span className="menu-text-number">01.</span> About
          </h3>
        </a>
        {/* <h3 className="menu-text">
          <span className="menu-text-number">02.</span> Experience
        </h3> */}
        <a href="#section2-projects">
          <h3 className="menu-text">
            <span className="menu-text-number">02.</span> Work
          </h3>
        </a>
        <a href="#section3-contact">
          <h3 className="menu-text">
            <span className="menu-text-number">03.</span> Contact Me
          </h3>
        </a>
      </div>
    </div>
  );
}
