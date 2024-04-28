import './chrome_extension.css';

import { FaGithub } from 'react-icons/fa';
import { LiaAngleDoubleDownSolid } from 'react-icons/lia';
import { useState } from 'react';

import mainImage from '../../../assets/Projects/audioPond/AudioPond.png';
import chart from '../../../assets/Projects/audioPond/Chrome_Extension_Chart.png';
import loader from '../../../assets/Projects/audioPond/Loader.png';

const gitHubUrl = 'https://github.com/Eytan3000/compound-interest-client';

const userStory = (
  <p style={{ maxWidth: '50%' }}>
    As a Sound Designer, I want to utilize the power of AI to easily upload
    sound effects to marketplaces online and streamlining the sales process.
  </p>
);

function Details() {
  return (
    <>
      <p style={{ display: 'inline-block', marginBlock: '0 20px' }}>
        Tools and technologies used in this project:
      </p>

      <div className="tech-stack-grid-container">
        <div className="tech-card-container">OpenAI API</div>
        <div className="tech-card-container">React</div>
        <div className="tech-card-container">TypeScript</div>
        <div className="tech-card-container">Google Cloud Function</div>
        <div className="tech-card-container">Content Script</div>
        <div className="tech-card-container">Firebase Realtime Database</div>
      </div>
    </>
  );
}

function BottomDivider() {
  return (
    <div
      style={{
        marginTop: '4rem',
        border: '0.1px solid #d7d7d7',
      }}
    />
  );
}

function ShowMore() {
  return (
    <>
      {' '}
      <div className="show-more-container">
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
            className="chrome-exten-chart-images"
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
          className="compound-form-chart-images"
          src={loader}
          alt="compound-form-images"
        />

        {/* LAST SECTION */}
        <div style={{ marginTop: '40px' }}>
          <h2>Additional Features Implemented:</h2>
          <ol>
            <li>
              <strong>
                A scraper to retrieve tags from other places in the:
              </strong>
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
  const [showInfo, setShowInfo] = useState(false);

  const handleGithubClick = () => window.open(gitHubUrl, '_blank');

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '2rem',
          marginInline: '5rem',
        }}>
        <h2 style={{ fontSize: '40px', margin: '0' }}>{title}</h2>
        <p style={{ color: '#7f00e0', marginBottom: '3rem' }}>
          An AI sound effects marketplace form filler
        </p>

        <div className="grid-container">
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

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '3rem',
          }}>
          <div style={{ width: '164px' }} />
          {/* <button>Show more</button> */}

          <div
            className="show-more"
            onClick={() => setShowInfo((prev) => !prev)}>
            {/* <h3 className="show-more"> */}
            <button style={{ marginBottom: '20px' }}>
              {showInfo ? 'Show less' : 'Show more'}
              {/* </h3> */}
            </button>
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

            <div style={{ width: '40px' }} />
          </div>
        </div>
      </div>

      {/* SHOW_MORE */}
      {showInfo && <ShowMore />}
      <BottomDivider />
    </>
  );
}
