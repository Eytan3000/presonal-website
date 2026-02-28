import "./dataSnapshot.css";

import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";
import { LiaAngleDoubleDownSolid } from "react-icons/lia";
import { useState } from "react";

import mainImage from "../../../assets/Projects/dataSnapshot/icon.png";

import { openWindow } from "../../../helper_functions/helper_functions";
import ShowMoreButton from "../../reusable/ShowMoreButton";
import BottomDivider from "../../reusable/BottomDivider";
import { useMobile } from "../../../Contexts/MobileProvider";
import MobileTechStack from "../../reusable/MobileTechStack";
import { TechGrid } from "../../reusable/techGrid/TechGrid";

const projectUrl = "https://open-vsx.org/extension/EytanKrief/data-snapshot";
const gitHubUrl = "https://github.com/Eytan3000/data-snapshot";

const techList = [
  "VS Code API",
  "TypeScript",
  "Debug Adapter Protocol",
  "Node.js",
];

const userStory = (
  <p className="user-story">
    As a <strong>Developer</strong>, I want to capture debug snapshots of
    variable values while paused in the debugger, and optionally stub them
    inline in source so I can run without re-executing slow operations.
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
          <strong>Capture variable snapshot:</strong> Serialize the selected
          expression's value from the current stack frame while debugging.
        </li>
        <li>
          <strong>Snapshots view:</strong> View, open, and manage saved
          snapshots in the Activity Bar.
        </li>
        <li>
          <strong>Inline stubs:</strong> Replace variable declarations with code
          that reads the snapshot, allowing you to run without re-executing slow
          calls.
        </li>
      </ul>

      <h2>Configuration:</h2>
      <p>
        Configurable max recursion depth when serializing nested variables (DAP
        fallback).
      </p>
    </div>
  );
}

export default function DataSnapshot({ title }: { title: string }) {
  const { isMobile } = useMobile();
  const [showInfo, setShowInfo] = useState(false);

  const handleOpenProjectUrl = () => openWindow(projectUrl);
  const handleGithubClick = () => openWindow(gitHubUrl);

  return (
    <>
      <div className="data-snapshot-main-container">
        <h2 style={{ fontSize: "40px", margin: "0" }}>{title}</h2>
        <p style={{ color: "#7f00e0", marginBottom: "3rem" }}>
          VS Code Extension for Debugging
        </p>

        <div className="data-snapshot-grid-container">
          <div
            onClick={handleOpenProjectUrl}
            className="data-snapshot-grid-left-section"
            style={{
              cursor: "pointer",
            }}
          >
            <img
              className="data-snapshot-project-img"
              src={mainImage}
              alt={title + " project image"}
            />
          </div>
          <div
            style={{ margin: "0 2rem" }}
            className="data-snapshot-grid-right-section"
          >
            {isMobile ? (
              <MobileTechStack technologies={techList} />
            ) : (
              <TechGrid techList={techList} />
            )}
          </div>
        </div>

        {/* Buttons */}
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
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "7rem",
              }}
            >
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
              onClick={() => setShowInfo((prev) => !prev)}
            >
              <ShowMoreButton
                idToGlide="data-snapshot-show-more"
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
                idToGlide="data-snapshot-show-more"
                showInfo={showInfo}
              />
              <LiaAngleDoubleDownSolid
                className={showInfo ? "show-less-icon" : "show-more-icon"}
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2rem",
              }}
            >
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
              <div style={{ width: "20px" }} />
            </div>
          </div>
        )}
      </div>

      {/*  Glide from nav bar */}
      <div id="data-snapshot-show-more" />

      {/* SHOW_MORE */}
      {showInfo && <ShowMore />}
      <BottomDivider />
    </>
  );
}
