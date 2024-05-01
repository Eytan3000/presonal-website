import './chrome_extension.css';

import { FaGithub } from 'react-icons/fa';
import { LiaAngleDoubleDownSolid } from 'react-icons/lia';
import { useState } from 'react';

import mainImage from '../../../assets/Projects/audioPond/AudioPond.png';
import chart from '../../../assets/Projects/audioPond/Chrome_Extension_Chart.png';
import loader from '../../../assets/Projects/audioPond/Loader.png';
import { openWindow } from '../../../helper_functions/helper_functions';
import ShowMoreButton from '../../reusable/ShowMoreButton';
import BottomDivider from '../../reusable/BottomDivider';
import { useMobile } from '../../../Contexts/MobileProvider';

const gitHubUrl = 'https://github.com/Eytan3000/compound-interest-client';

// const mobileStack = [
//   'OpenAI API',
//   'React',
//   'TypeScript',
//   'Google Cloud Function',
//   'Content Script',
//   'Firebase Realtime Database',
// ];

const userStory = (
  <p className="user-story">
    As a Sound Designer, I want to utilize the power of AI to easily upload
    sound effects to marketplaces online and streamlining the sales process.
  </p>
);

function Details() {
  const { isMobile } = useMobile();
  return (
    <>
      {!isMobile && (
        <p style={{ display: 'inline-block', marginBlock: '0 20px' }}>
          Tools and technologies used in this project:
        </p>
      )}

      {isMobile ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '2rem',
            flexWrap: 'wrap',
            gap: '10px',
          }}>
          <div
            style={{
              display: 'flex',
              // justifyContent: 'space-around',
              // flexWrap: 'wrap',
              gap: '10px',
              width: '100%',
            }}>
            <div
              className="chrome-extension-mobile-tech-card"
              style={{ width: '40%' }}>
              OpenAI API
            </div>
            <div
              className="chrome-extension-mobile-tech-card"
              style={{ width: '30%' }}>
              React
            </div>
          </div>

          <div
            style={{
              display: 'flex',

              gap: '10px',
            }}>
            <div
              className="chrome-extension-mobile-tech-card"
              style={{ width: '25%' }}>
              TypeScript
            </div>
            <div
              className="chrome-extension-mobile-tech-card"
              style={{ width: '35%' }}>
              Content Script
            </div>
          </div>
          <div className="chrome-extension-mobile-tech-card">
            Google Cloud Function
          </div>
          <div className="chrome-extension-mobile-tech-card">
            Firebase Realtime Database
          </div>
        </div>
      ) : (
        <>
          <div className="tech-card-container-2 ">
            <div className="tech-card">OpenAI API</div>
            <div className="tech-card">React</div>
            <div className="tech-card">TypeScript</div>
          </div>
          <div className="tech-card-container-2 ">
            <div className="tech-card">Google Cloud Function</div>
            <div className="tech-card">Content Script</div>
          </div>
          <div className="tech-card-container-2 ">
            <div className="tech-card">Firebase Realtime Database</div>
          </div>
        </>
      )}
    </>
  );
}

function ShowMore() {
  return (
    <>
      {' '}
      <div className="show-more-container animated-component">
        <h3>User Story:</h3>

        {/* <p style={{ maxWidth: '50%' }}>{userStory}</p> */}
        {userStory}

        <p
          className="border-radius-15"
          style={{ border: '0.5px dashed', padding: '6px' }}>
          When Sound Designers upload a sound effect to marketplaces like
          AudioJungle.com or Pond5.com, they encounter a lengthy form requiring
          a description, relevant tags, audio file length, and other properties.
          This Chrome extension streamlines this process by automating it. It
          generates an AI description and employs a crawler to gather pertinent
          tags from analogous sound effects within the marketplace.
        </p>

        <h2>Chrome Extension Diagram</h2>
        <p>
          This diagram shows how the Chrome extension interacts with various
          components
        </p>

        <div className="grid-item flex_jc-center">
          <img
            className="chrome-extension-chart-img"
            src={chart}
            alt="compound-form-images"
          />
        </div>
        <h2>Content Script:</h2>
        <p>
          The content script injects the relevant tags and description in the
          appropriate text boxes, including an animated loader
        </p>
        <img
          className="chrome-extension-loader-img"
          src={loader}
          alt="compound-form-images"
        />

        {/* LAST SECTION */}
        <div style={{ marginTop: '40px' }}>
          <h2>Additional Features Implemented:</h2>
          <ol>
            <li>
              <strong>A scraper to retrieve tags from the website:</strong>
              <p>
                A Scraper that sits on a Google Cloud Function, which gathers
                relevant tags from similar sound effects in the marketplace.
                <br></br>For example, if the user uploads a sound of a car, it
                searches for "car" - go into the 5 most viewed results, find
                relevant tags (eg. ‘car’, ‘drive’, ‘gear’, ‘break’, ‘wheel’) and
                copies them to the user’s form.
              </p>
            </li>

            <li>
              <strong>Saving data to Firestore Database:</strong>
              <p>
                The inputs and generated description and tags are stored to
                track the effectiveness of the extension.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default function ChromeExtension({ title }: { title: string }) {
  const { isMobile } = useMobile();
  const [showInfo, setShowInfo] = useState(false);

  const handleGithubClick = () => openWindow(gitHubUrl);

  return (
    <>
      <div className="chrome-extension-main-container">
        <h2 style={{ fontSize: isMobile ? '31px' : '40px', margin: '0' }}>
          {title}
        </h2>
        <p style={{ color: '#7f00e0', marginBottom: '3rem' }}>
          An AI sound effects marketplace form filler
        </p>

        <div className="chrome-extension-grid-container">
          <div className="left-section">
            <img
              className="project-img-extension"
              src={mainImage}
              alt={title + ' project image'}
            />
          </div>
          <div style={{ margin: '0 2rem' }} className="right-section">
            <Details />
          </div>
        </div>

        <div className="chrome-extension-buttons-container">
          <div style={{ width: '164px' }} />

          <div
            className="show-more"
            onClick={() => setShowInfo((prev) => !prev)}>
            <ShowMoreButton
              idToGlide="chrom-extension-show-more"
              showInfo={showInfo}
            />

            <LiaAngleDoubleDownSolid
              className={showInfo ? 'show-less-icon' : 'show-more-icon'}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '2rem',
            }}>
            <FaGithub className="icon" onClick={handleGithubClick} size={40} />

            {!isMobile && <div style={{ width: '40px' }} />}
          </div>
        </div>
      </div>
      <div id="chrom-extension-show-more" />

      {/* SHOW_MORE */}
      {showInfo && <ShowMore />}
      <BottomDivider />
    </>
  );
}
