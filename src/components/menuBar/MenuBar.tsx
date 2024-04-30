import { SetStateAction } from 'react';
import { useMobile } from '../../Contexts/MobileProvider';
import logo from '../../assets/KRIEF_Icon_RGB.png';
import './menuBar.css';
import { RxHamburgerMenu } from 'react-icons/rx';

function DesktopMenuBar() {
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

function MobileMenuBar({
  setIsMenuClicked,
}: {
  setIsMenuClicked: React.Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="menu-bar">
      <img className="logo" src={logo} alt="" />
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
