import logo from '../../assets/KRIEF_Icon_RGB.png';
import './menuBar.css';
export default function MenuBar() {
  return (
    <div className="menu-bar">
      <img className="logo" src={logo} alt="" />
      <div style={{ display: 'flex', gap: '100px', margin: 'auto 0 ' }}>
        <h3 className="menu-text">
          <span className="menu-text-number">01.</span> About
        </h3>
        <h3 className="menu-text">
          <span className="menu-text-number">02.</span> Experience
        </h3>
        <h3 className="menu-text">
          <span className="menu-text-number">03.</span> Work
        </h3>
        <h3 className="menu-text">
          <span className="menu-text-number">04.</span> Contact Me
        </h3>
      </div>
    </div>
  );
}
