import './projectDetails.css';
import planify from '../../../assets/planify.png';
import { FaGithub } from 'react-icons/fa';
import { CiShare1 } from 'react-icons/ci';
import { LiaAngleDoubleDownSolid } from 'react-icons/lia';
import { BsCopy } from 'react-icons/bs';

const projectUrl = 'https://planifyapp.netlify.app/';
const gitHubUrl = 'https://github.com/Eytan3000/appointment_client';

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

export default function ProjectDetails({ title }: { title: string }) {
  const handleOpenProjectUrl = () => window.open(projectUrl, '_blank');
  const handleGithubClick = () => window.open(gitHubUrl, '_blank');
  const handleCopy = (text: string) => {};
  //     navigator.clipboard
  //       .writeText(text)
  //       .then(() => {
  //         setCopied(true);
  //       })
  //       .catch((error) => {
  //         console.error('Failed to copy:', error);
  //       });
  //   };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '2rem',
          marginInline: '5rem',
          //   margin: '2rem 5rem 6rem 5rem',
        }}>
        <h2 style={{ fontSize: '40px', margin: '0' }}>Planify</h2>
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

        {/* <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: '1rem',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: '2rem',
            }}>
            <FaGithub size={40} />

            <CiShare1 size={40} />
          </div>
          <button>Show more</button>
          <div style={{ width: '112px' }} />
        </div> */}
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
            // style={{
            //   cursor: 'pointer',
            //   display: 'flex',
            //   flexDirection: 'column',
            //   alignItems: 'center',
            // }}
          >
            <h3
              className="show-more"
              //   style={{
              //     display: 'inline-block',
              //     marginTop: '0',
              //   }}
            >
              Show more
            </h3>
            <LiaAngleDoubleDownSolid className="show-more-icon" />
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
        {/* <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem',
          }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
            }}>
            <FaGithub size={40} />

            <CiShare1 size={40} />
          </div>
          <button style={{ margin: '0 auto' }}>Show more</button>
        </div> */}
      </div>
      {/* <hr
        style={{
          marginTop: '6rem',
          //   height: '0.1px',
          border: '0.1px solid #d7d7d7',
        }}
      /> */}
      {/* <div
        style={{
          marginTop: '6rem',
          height: '10px',
          width: '10px',
          //   background: 'red',
          borderRadius: '50%',
          background: '#272727',
          //   border: '0.1px solid #d7d7d7',
          margin: '0 auto',
        }}
      /> */}

      {/* SHOW_MORE */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '2rem',
          marginInline: '5rem',
          padding: '3rem',
          border: '0.1px solid #c1c1c1',
          borderRadius: '17px',
        }}>
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
        <p>Go to main dashborad (link) </p>

        {/* <p>
          Credentials: <br />
          E-mail: eytankrief@gmail.com // copy icon
          <br />
          Passord: Eytan1105! // copy icon
        </p> */}
        <p>Credentials:</p>
        <div className="table-container">
          <table>
            <tr>
              <td>E-mail</td>
              <td>eytankrief@gmail.com</td>
              <td className="icon" onClick={handleCopy}>
                <BsCopy />
              </td>
            </tr>
            <tr>
              <td>Passord</td>
              <td>Eytan1105!</td>
              <td className="icon" onClick={handleCopy}>
                <BsCopy />
              </td>
            </tr>
          </table>

          
        </div>
      </div>
      <BottomDivider />
    </>
  );
}
