import React from "react";
import quotemachine from "../images/quotemachine.png";
import previewer from "../images/previewer.png";
import drum from "../images/drum.png";
import calculator from "../images/calculator.png";
import clock from "../images/clock.png";

export const Frontend = () => {
  return (
    <div className="project_main">
      <div className="project_intro part">
        <h2>Intro</h2>
        <p>
          This website showcases five projects required for getting FreeCodeCamp
          Front End Development Certificate. Projects include Random Quote
          Machine, Markdown Previewer, Drum Machine, JavaScript Calculator and
          25+5 Clock.
        </p>
      </div>

      {/* <div className="project_design">
          <h2>Design</h2>
          <p>
            This project was built aming to put theory into practice by making a
            "real-world" application with React for frontend, Redux for state
            management, MongoDB for database.
          </p>
        </div> */}
      <div className="project_features part">
        <h2>Project</h2>
        <div>
          <div className="feature">
            <div className="left">
              <h3>Random Quote Machine</h3>
              <ul>
                <li>Quote data is fetch from API.</li>
                <li>
                  A random quote will be displayed when "New Quote" button is
                  clicked each time.
                </li>
                <li>
                  Background color will change every time a new quote is
                  generated.
                </li>
              </ul>
            </div>
            <div
              style={{
                width: 700,
                height: 300,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img src={quotemachine} style={{ width: "100%" }}></img>
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <h3>Markdown Previewer</h3>
              <ul>
                <li>
                  Markkdown text entered in the editor on the left will be
                  rendered as HTML in previewer on the right.
                </li>
              </ul>
            </div>
            <div
              style={{
                width: 700,
                height: 300,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img src={previewer} style={{ width: "100%" }}></img>
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <h3>Drum Machine</h3>
              <ul>
                <li>
                  Audio clip will be played once the corresponding drum pad
                  element is clicked.
                </li>
                <li>Power button is used to control switch on and off.</li>
                <li>
                  Name of the audio clip will be showed when it is triggered.
                </li>
                <li>Volumn of sounds can be adjusted.</li>
              </ul>
            </div>
            <div
              style={{
                width: 700,
                height: 300,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img src={drum} style={{ width: "100%" }}></img>
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <h3>JavaScript Calculator</h3>
              <ul>
                <li>Work as a real-world calculator</li>
              </ul>
            </div>
            <div
              style={{
                width: 700,
                height: 300,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img src={calculator} style={{ width: "100%" }}></img>
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <h3>25 + 5 Clock</h3>
              <ul>
                <li>Session/Break length can be set by clicking +/- button.</li>
                <li>
                  Timer can be started/stopped/reset by clicking
                  start/stop/reset button
                </li>
                <li>
                  Text color will change to red when it is the last minute.
                </li>
              </ul>
            </div>
            <div
              style={{
                width: 700,
                height: 300,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img src={clock} style={{ width: "100%" }}></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="techniques part">
          <h2>techniques</h2>
          <p>
            This project was built aming to put theory into practice by making a
            "real-world" application with React for frontend, Redux for state
            management, MongoDB for database.
          </p>
        </div> */}
    </div>
  );
};
