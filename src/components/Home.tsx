import Hero from './hero/Hero';
import AboutMe from './aboutMe/AboutMe';
import Planify from './projects/Planify/Planify';
import DataSnapshot from './projects/DataSnapshot/DataSnapshot';
import SportTimer from './projects/SportTimer/SportTimer';
import Compound from './projects/Compound/Compound';
import ChromeExtension from './projects/Chrome_Extension/ChromeExtension';
import Contact from './contact/Contact';
import BlogPreview from './blog/BlogPreview';

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

export default function Home() {
  return (
    <div className="main-div">
      <Hero />

      <SectionDivider
        id={'section1-about-me'}
        number={1}
        title={'About me'}
      />

      <AboutMe />

      <BlogPreview />

      <SectionDivider
        id={'section2-projects'}
        number={3}
        title={'Things I’ve Built'}
        mt={9}
      />

      <SportTimer title={'Sport Timer'} />

      <DataSnapshot title={'Data Snapshot'} />

      <Planify title={'Planify'} />

      <ChromeExtension title={'Chrome Extension'} />

      <Compound title={'Compound Interest Calculator'} />

      <SectionDivider
        id={'section3-contact'}
        number={4}
        title={'Contact'}
        mt={9}
      />
      <Contact />
    </div>
  );
}
