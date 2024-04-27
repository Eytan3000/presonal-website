import './projectDetails.css';
import planify from '../../../assets/planify.png';
import MainDashboardImg from '../../../assets/placeholders/main_dashboard_placeholder.png';
import patientScreenImg from '../../../assets/placeholders/patient_screen_placeholder.png';
import { FaGithub } from 'react-icons/fa';
import { CiShare1 } from 'react-icons/ci';
import { LiaAngleDoubleDownSolid } from 'react-icons/lia';
import { BsCopy } from 'react-icons/bs';
import { Tooltip } from '@mui/joy';
import { useState } from 'react';

const projectUrl = 'https://planifyapp.netlify.app/';
const gitHubUrl = 'https://github.com/Eytan3000/appointment_client';
const mainDashUrl = 'https://planifyapp.netlify.app/main-calendar';
const patientScreenUrl =
  'https://planifyapp.netlify.app/client/Um4i1ArauPht0EvywK7Ob4NwsIH2';
const emailToMainDash = 'eytankrief@gmail.com';
const passToMainDash = 'Eytan1105!';

function Details() {
  return (
    <>
      <h4>A full-stack web platform for appointment scheduling</h4>
      <p>
        * Implemented a user-friendly interface for clients to schedule
        appointments and an admin panel for managing schedules.
      </p>
      <p>Technologies used:</p>
      <ul>
        <li>React</li>
        <li>TypeScript</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
      </ul>
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
      <table>
        <tr>
          <td>E-mail</td>
          <td>{emailToMainDash}</td>
          <Tooltip title={emailCopyState} variant="plain" placement="right">
            <td
              className="icon"
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
              className="icon"
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
  const handOpenMainDash = () => window.open(mainDashUrl, '_blank');

  return (
    <>
      {' '}
      <div
        // style={{
        //   display: 'flex',
        //   flexDirection: 'column',
        //   justifyContent: 'center',
        //   marginTop: '2rem',
        //   marginInline: '5rem',
        //   padding: '3rem',
        //   border: '0.1px solid #c1c1c1',
        //   borderRadius: '17px',
        //   background:'#eceafa'
        // }}
        className='show-more-container'
        >
        <h3>User Story:</h3>
        <p style={{ maxWidth: '50%' }}>
          I’m a massage therapist.
          <br />I want to send a link to my clients, where they can see the
          available time slots within my work days and hours.
          <br /> I then see the new appointment in my dashboard as a calendar
          event, and we both receive a notification with the appointment
          details.
        </p>
        <h2>Therapist’s Dashboard:</h2>

        <div className="grid-container">
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
              className="main-dashboard-image img-back-glow"
              src={MainDashboardImg}
              alt="main-dashboard-image"
            />
          </div>
        </div>

        <h2>Patient's Scheduling Screen:</h2>
        <div>
          <a
            href={patientScreenUrl}
            target={'_blank'}
            // className="inline-link"
            style={{
              display: 'inline-block',
              // marginBottom: '50px',
              margin: '10px 20px 30px 20px',
            }}>
            Go to Patient Screen{' '}
          </a>
        </div>
        <img
          className="border-radius-20 patient-screen-image"
          src={patientScreenImg}
          alt="patient-Screen-Img"
        />

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

export default function ProjectDetails({ title }: { title: string }) {
  const [showInfo, setShowInfo] = useState(false);

  const handleOpenProjectUrl = () => window.open(projectUrl, '_blank');
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
          An appointment Scheduling Platform
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
              src={planify}
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
            <h3 className="show-more">
              {showInfo ? 'Show less' : 'Show more'}
            </h3>
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

      {/* SHOW_MORE */}
      {showInfo && <ShowMore />}
      <BottomDivider />
    </>
  );
}
