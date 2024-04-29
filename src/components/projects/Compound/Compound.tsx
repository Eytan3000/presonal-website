import './compound.css';

import { FaGithub } from 'react-icons/fa';
import { CiShare1 } from 'react-icons/ci';
import { LiaAngleDoubleDownSolid } from 'react-icons/lia';
import { useState } from 'react';

import mainImage from '../../../assets/placeholders/main_compound.png';
import chartImg from '../../../assets/Projects/compound/chart.png';
import yahooApi from '../../../assets/Projects/compound/yahoo_finance.png';
import { openWindow } from '../../../helper_functions/helper_functions';
import ShowMoreButton from '../../reusable/ShowMoreButton';

const projectUrl = 'https://compound-calc.netlify.app/';
const gitHubUrl = 'https://github.com/Eytan3000/compound-interest-client';

const userStory = (
  <p style={{ maxWidth: '50%' }}>
    As a user, I want to <strong>calculate compound interest </strong>Feasily So
    that I can understand how my investments will grow over timels.
  </p>
);

function Details() {
  return (
    <>
      <p style={{ display: 'inline-block', marginBlock: '0 20px' }}>
        Tools and technologies used in this project:
      </p>

      <div className="tech-stack-grid-container">
        <div className="tech-card-container">React</div>
        <div className="tech-card-container">Redux</div>
        <div className="tech-card-container">TypeScript</div>
        <div className="tech-card-container">Yahoo Finance API</div>
        <div className="tech-card-container">Local storage</div>
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
      <div className="show-more-container animated-component">
        <h3>User Story:</h3>

        {/* <p style={{ maxWidth: '50%' }}>{userStory}</p> */}
        {userStory}

        <h2>Compound chart:</h2>
        <p>
          In this chart, users can observe a graphical depiction of how their
          wealth grows over time, influenced by various financial inputs: the
          initial investment, monthly contributions, duration of growth, and the
          estimated interest rate.
        </p>
        {/* <div className="grid-container">
          <div className="grid-item">
            <img
              className="compound-form-chart-images"
              src={formImg}
              alt="compound-form-images"
            />
          </div>
          <div className="grid-item">
            {' '}
            <img
              className="compound-form-chart-images"
              src={chartImg}
              alt="compound-chart-images"
            />
          </div>
        </div> */}

        <div className="grid-item flex_jc-center">
          <img
            className="compound-form-chart-images"
            src={chartImg}
            alt="compound-form-images"
          />
        </div>
        <h2>Yahoo API - Retrieving the most recent financial news.</h2>
        <p>
          I utilized the Yahoo API to fetch the latest financial news and have
          presented a selection of them as an added feature that might interest
          the user.
        </p>
        <img
          className="compound-form-chart-images"
          src={yahooApi}
          alt="compound-form-images"
        />

        {/* LAST SECTION */}
        <div style={{ marginTop: '40px' }}>
          <h2>Additional Features Implemented:</h2>
          <ol>
            <li>
              <strong>Responsive Design:</strong>
              <p>
                The platform is accessible and functional across various
                devices, including desktops, tablets, and mobile phones, to
                accommodate users' preferences and needs.
              </p>
            </li>
            <li>
              <strong>Redux:</strong>
              <p>
                Utilized Redux for efficient state management, enabling seamless
                data flow and synchronization across components, thereby
                enhancing the scalability and maintainability of the
                application.
              </p>
            </li>
            <li>
              <strong>Yahoo API:</strong>
              <p>
                Leveraged the Yahoo API for streamlined data fetching and
                management, ensuring real-time access to financial information,
                enabling users to stay updated with the latest market trends and
                news.
              </p>
            </li>
            <li>
              <strong>MUI Joy:</strong>
              <p>
                Integrated the MUI Joy library to enhance user interface
                interactions, providing delightful visual elements and
                animations for an engaging user experience.
              </p>
            </li>
            <li>
              <strong>Local Storage:</strong>
              <p>
                Implemented local storage functionality to store the latest
                results, allowing users to access their most recent data even
                after closing the application or refreshing the page.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default function Compound({ title }: { title: string }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleOpenProjectUrl = () => openWindow(projectUrl);
  const handleGithubClick = () => openWindow(gitHubUrl);

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
          A visual representation of wealth growing over time
        </p>

        <div className="grid-container">
          <div
            onClick={handleOpenProjectUrl}
            className="left-section"
            style={{
              cursor: 'pointer',
            }}>
            <img
              className="project-img"
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
            {/* <button style={{ marginBottom: '20px' }}>
              {showInfo ? 'Show less' : 'Show more'}
            </button> */}
            <ShowMoreButton
              idToGlide="compound-show-more"
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
            <CiShare1
              className="icon"
              onClick={handleOpenProjectUrl}
              size={40}
            />
            <div style={{ width: '20px' }} />
          </div>
        </div>
      </div>

      <div id="compound-show-more" />

      {/* SHOW_MORE */}
      {showInfo && <ShowMore />}
      <BottomDivider />
    </>
  );
}
