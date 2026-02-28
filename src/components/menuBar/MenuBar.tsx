import { SetStateAction } from 'react';
import { useMobile } from '../../Contexts/MobileProvider';
import logo from '../../assets/KRIEF_Icon_RGB.png';
import './menuBar.css';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';

function DesktopMenuBar() {
  return (
    <div className="menu-bar">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="menu-links-container">
        <a href="/#section1-about-me">
          <h3 className="menu-text">
            <span className="menu-text-number">01.</span> About
          </h3>
        </a>
        <Link to="/blog">
          <h3 className="menu-text">
            <span className="menu-text-number">02.</span> Blog
          </h3>
        </Link>
        <a href="/#section2-projects">
          <h3 className="menu-text">
            <span className="menu-text-number">03.</span> Work
          </h3>
        </a>
        <a href="/#section3-contact">
          <h3 className="menu-text">
            <span className="menu-text-number">04.</span> Contact Me
          </h3>
        </a>
      </div>
    </div>
  );
}

function MobileMenuBar({
  setIsMenuClicked,
}: {
  setIsMenuClicked: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="menu-bar">
      <Link to="/">
        <img className="logo" src={logo} alt="" />
      </Link>
      <div className="menu-links-container">
        <RxHamburgerMenu
          onClick={() => setIsMenuClicked((prev) => !prev)}
          size={35}
        />
      </div>
    </div>
  );
}
export default function MenuBar({
  setIsMenuClicked,
}: {
  setIsMenuClicked: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { isMobile } = useMobile();

  if (isMobile) {
    return <MobileMenuBar setIsMenuClicked={setIsMenuClicked} />;
  } else {
    return <DesktopMenuBar />;
  }
}
