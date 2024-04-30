import './planify.css';

import { FaGithub } from 'react-icons/fa';
import { CiShare1 } from 'react-icons/ci';
import { LiaAngleDoubleDownSolid } from 'react-icons/lia';
import { BsCopy } from 'react-icons/bs';
import { Tooltip } from '@mui/joy';
import { useState } from 'react';

import mainImage from '../../../assets/planify.png';
import MainDashboardImg from '../../../assets/placeholders/main_dashboard_placeholder.png';
import MainDashboardMobileImg from '../../../assets/placeholders/Main_Dashboard_Mobile.png';
import patientScreenImg from '../../../assets/placeholders/patient_screen_placeholder.png';
import patientScreenMobileImg from '../../../assets/placeholders/patient_screen.png';
import { openWindow } from '../../../helper_functions/helper_functions';
import ShowMoreButton from '../../reusable/ShowMoreButton';
import BottomDivider from '../../reusable/BottomDivider';
import { useMobile } from '../../../Contexts/MobileProvider';
import MobileTechStack from '../../reusable/MobileTechStack';

const projectUrl = 'https://planifyapp.netlify.app/';
const gitHubUrl = 'https://github.com/Eytan3000/appointment_client';
const mainDashUrl = 'https://planifyapp.netlify.app/main-calendar';
const patientScreenUrl =
  'https://planifyapp.netlify.app/client/Um4i1ArauPht0EvywK7Ob4NwsIH2';
const emailToMainDash = 'eytankrief@gmail.com';
const passToMainDash = 'Eytan1105!';

const mobileStack = [
  'TypeScript',
  'MySQL',
  'NodeJS',
  'ExpressJS',
  'React',
  'JWT',
  'Firebase',
  'Cloud Storage',
];
const userStory = (
  <p className="user-story">
    As a <strong> massage therapist </strong>, I want to send a link to my
    clients, where they can see the available time slots within my work days and
    hours.
    <br /> I then see the new appointment in my dashboard as a calendar event,
    and we both receive a notification with the appointment details.
  </p>
);

function TechStackGrid() {
  return (
    <>
      <p style={{ display: 'inline-block', marginBlock: '0 20px' }}>
        Tools and technologies used in this project:
      </p>

      <div className="tech-card-container-2 ">
        <div className="tech-card">React</div>
        <div className="tech-card">TypeScript</div>
        <div className="tech-card">MySQL</div>
      </div>
      <div className="tech-card-container-2 ">
        <div className="tech-card">NodeJS</div>
        <div className="tech-card">ExpressJS</div>
        <div className="tech-card">React</div>
      </div>
      <div className="tech-card-container-2 ">
        <div className="tech-card">JWT</div>
        <div className="tech-card">Firebase</div>
        <div className="tech-card">Cloud Storage</div>
      </div>
    </>
  );
}

function CredentialTable() {
  const [emailCopyState, setEmailCopyState] = useState('Copy');
  const [passCopyState, setPassCopyState] = useState('Copy');

  const handleCopyEmail = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setEmailCopyState('Copied!');
        setTimeout(() => {
          setEmailCopyState('Copy');
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  };
  const handleCopyPassword = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setPassCopyState('Copied!');
        setTimeout(() => {
          setPassCopyState('Copy');
        }, 3000);
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  };

  return (
    <div className="table-container">
      <p>Credentials:</p>
      <table className="credentials-table">
        <tr>
          <td>E-mail</td>
          <td>{emailToMainDash}</td>
          <Tooltip title={emailCopyState} variant="plain" placement="right">
            <td
              className="icon copy-icon"
              onClick={() => handleCopyEmail(emailToMainDash)}>
              <BsCopy />
            </td>
          </Tooltip>
        </tr>
        <tr>
          <td>Password</td>
          <td>{passToMainDash}</td>
          <Tooltip title={passCopyState} variant="plain" placement="right">
            <td
              className="icon copy-icon"
              onClick={() => handleCopyPassword(passToMainDash)}>
              <BsCopy />
            </td>
          </Tooltip>
        </tr>
      </table>
    </div>
  );
}

function ShowMore() {
  const { isMobile } = useMobile();
  const handOpenMainDash = () => openWindow(mainDashUrl);
  const handleOpenPatientScreen = () => openWindow(patientScreenUrl);

  return (
    <>
      {' '}
      <div className="show-more-container animated-component">
        <h3>User Story:</h3>
        {userStory}
        <h2>Therapist’s Dashboard:</h2>
        <p>
          In the main dashboard, the therapist can add, delete, or edit
          appointments, manage client lists, and update business details.
        </p>
        <div className="main-dash-grid-container">
          <div className="grid-item">
            <div>
              <a href={mainDashUrl} target={'_blank'} className="inline-link">
                Go to Main Dashborad{' '}
              </a>
            </div>

            <CredentialTable />
          </div>
          <div className="grid-item cursor" onClick={handOpenMainDash}>
            {' '}
            <img
              style={
                isMobile
                  ? {
                      display: 'flex',
                    }
                  : {}
              }
              className="main-dashboard-image img-back-glow "
              src={isMobile ? MainDashboardMobileImg : MainDashboardImg}
              alt="main-dashboard-image"
            />
          </div>
        </div>

        <h2>Patient's Scheduling Screen:</h2>
        <p>
          This screen, accessed via a link shared by the therapist with their
          clients, allows clients to select a service and schedule an
          appointment. They can choose from available time slots, taking into
          account the therapist's working hours and days.
        </p>

        <a
          href={patientScreenUrl}
          target={'_blank'}
          style={{
            display: 'inline-block',

            margin: '10px 20px 30px 20px',
          }}>
          Go to Patient Screen{' '}
        </a>
        <div></div>
        <img
          className="border-radius-20 patient-screen-image img-back-glow cursor"
          onClick={handleOpenPatientScreen}
          src={isMobile ? patientScreenMobileImg : patientScreenImg}
          alt="patient-Screen-Img"
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
              <strong>Authentication:</strong>
              <p>
                Implemented a secure Firebase authentication mechanisms to
                verify users' identities and permissions, and ensuring that only
                authorized users can access specific API endpoints using a JWT.
              </p>
            </li>
            <li>
              <strong>TanStack (React) queries:</strong>
              <p>
                Streamlined data fetching and management, encompassing error
                handling and retry logic, alongside optimistic updates and
                automatic data management.
              </p>
            </li>
            <li>
              <strong>Notification System:</strong>
              <p>
                Integrated a notification system using Twilio to send timely
                reminders and updates to both therapists and clients about
                upcoming appointments.
              </p>
            </li>
            <li>
              <strong>Customization Options:</strong>
              <p>
                Provided customization options through the a dashboard for users
                to personalize their profiles, set working hours, define service
                offerings, and specify appointment durations or intervals
                according to their preferences and business requirements.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

export default function Planify({ title }: { title: string }) {
  const { isMobile } = useMobile();
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
          An appointment Scheduling Platform
        </p>

        <div className="planify-grid-container">
          <div
            onClick={handleOpenProjectUrl}
            className="planify-grid-left-section "
            style={{
              cursor: 'pointer',
            }}>
            <img
              className="planify-project-img"
              src={mainImage}
              alt={title + ' project image'}
            />
          </div>
          <div
            style={{ margin: '0 2rem' }}
            className="planify-grid-right-section">
            {isMobile ? (
              <MobileTechStack technologies={mobileStack} />
            ) : (
              <TechStackGrid />
            )}
          </div>
        </div>

        {/* Buttons */}
        {isMobile ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginTop: '3rem',
              gap: '2rem',
            }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '7rem',
              }}>
              <FaGithub
                className="icon"
                onClick={handleGithubClick}
                size={40}
              />
              <CiShare1
                className="icon"
                onClick={handleOpenProjectUrl}
                size={40}
              />
            </div>
            <div
              className="show-more"
              onClick={() => setShowInfo((prev) => !prev)}>
              <ShowMoreButton
                idToGlide="planify-show-more"
                showInfo={showInfo}
              />
              <LiaAngleDoubleDownSolid
                className={showInfo ? 'show-less-icon' : 'show-more-icon'}
              />
            </div>
          </div>
        ) : (
          <div className="projects-buttons">
            <div style={{ width: '164px' }} />

            <div
              className="show-more"
              onClick={() => setShowInfo((prev) => !prev)}>
              <ShowMoreButton
                idToGlide="planify-show-more"
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
              <FaGithub
                className="icon"
                onClick={handleGithubClick}
                size={40}
              />
              <CiShare1
                className="icon"
                onClick={handleOpenProjectUrl}
                size={40}
              />
              <div style={{ width: '20px' }} />
            </div>
          </div>
        )}
      </div>

      {/*  Glide from nav bar */}
      <div id="planify-show-more" />

      {/* SHOW_MORE */}
      {showInfo && <ShowMore />}
      <BottomDivider />
    </>
  );
}
