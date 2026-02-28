import "./sportTimer.css";

import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import { useState } from "react";

import mainImage from "../../../assets/Projects/sportTimer/sport-timer-main.jpeg";
import statsImage from "../../../assets/Projects/sportTimer/sport-timer-stats.jpeg";

import ShowMoreButton from "../../reusable/ShowMoreButton";
import BottomDivider from "../../reusable/BottomDivider";
import { useMobile } from "../../../Contexts/MobileProvider";
import MobileTechStack from "../../reusable/MobileTechStack";
import { TechGrid } from "../../reusable/techGrid/TechGrid";

const techList = [
  "React",
  "TypeScript",
  "Vite",
  "TanStack Query",
  "TanStack Router",
  "Zustand",
  "Node.js",
  "Express",
  "PostgreSQL",
];

const userStory = (
  <p className="user-story">
    As an gym-goer, I want to track my workouts, exercises, sets, and weights,
    so I can monitor my progress and get suggestions for my next workout.
  </p>
);

function ShowMore() {
  return (
    <div className="show-more-container animated-component">
      <h3>User Story:</h3>
      {userStory}

      <h2>Features:</h2>
      <ul>
        <li>
          <strong>Workout tracking:</strong> Log workouts, exercises, and sets
          with weights and reps.
        </li>
        <li>
          <strong>Exercise suggestions:</strong> Get suggested next exercises
          based on your history.
        </li>
        <li>
          <strong>Progress stats:</strong> View total workouts, average workout
          time, and weekly activity.
        </li>
        <li>
          <strong>Rest timer management:</strong> Set and use per-exercise rest
          times.
        </li>
      </ul>

      <h2>Stats:</h2>
      <img
        className="sport-timer-stats-img img-back-glow"
        src={statsImage}
        alt="Sport Timer stats"
      />
    </div>
  );
}

export default function SportTimer({ title }: { title: string }) {
  const { isMobile } = useMobile();
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className="sport-timer-main-container">
        <h2 style={{ fontSize: "40px", margin: "0" }}>{title}</h2>
        <p style={{ color: "#7f00e0", marginBottom: "3rem" }}>
          Workout tracking app
        </p>

        <div className="sport-timer-grid-container">
          <div className="sport-timer-grid-left-section">
            <img
              className="sport-timer-project-img"
              src={mainImage}
              alt={title + " project image"}
            />
          </div>
          <div
            style={{ margin: "0 2rem" }}
            className="sport-timer-grid-right-section"
          >
            {isMobile ? (
              <MobileTechStack technologies={techList} />
            ) : (
              <TechGrid techList={techList} />
            )}
          </div>
        </div>

        {isMobile ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "3rem",
              gap: "2rem",
            }}
          >
            <div
              className="show-more"
              onClick={() => setShowInfo((prev) => !prev)}
            >
              <ShowMoreButton
                idToGlide="sport-timer-show-more"
                showInfo={showInfo}
              />
              <LiaAngleDoubleDownSolid
                className={showInfo ? "show-less-icon" : "show-more-icon"}
              />
            </div>
          </div>
        ) : (
          <div className="projects-buttons">
            <div style={{ width: "164px" }} />
            <div
              className="show-more"
              onClick={() => setShowInfo((prev) => !prev)}
            >
              <ShowMoreButton
                idToGlide="sport-timer-show-more"
                showInfo={showInfo}
              />
              <LiaAngleDoubleDownSolid
                className={showInfo ? "show-less-icon" : "show-more-icon"}
              />
            </div>
            <div style={{ width: "164px" }} />
          </div>
        )}
      </div>

      <div id="sport-timer-show-more" />

      {showInfo && <ShowMore />}
      <BottomDivider />
    </>
  );
}
