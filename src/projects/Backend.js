import React from "react";

export const Backend = () => {
  return (
    <div className="project_main">
      <div className="project_intro part">
        <h2>Intro</h2>
        <p>
          This website showcases five projects required for getting FreeCodeCamp
          Back End Development Certificate. Projects include Timestamp
          Microservice, Request Header Parser Microservice, URL Shortener
          Microservice, Exercise Tracker and File Metadata Microservice.
        </p>
      </div>

      <div className="project_features part">
        <h2>Project</h2>
        <div>
          <div className="feature">
            <div className="left">
              <a href="https://back-end-projects.herokuapp.com/timestamp">
                <h3> Timestamp Microservice </h3>
              </a>

              <ul>
                <li>
                  parses timestamp in milliseconds or date string from the API
                  endpoint and returns JSON with timestamp and date.
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
              <img
                src="../images/timestamp.png"
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <a href="https://back-end-projects.herokuapp.com/headerparser">
                <h3>Request Header Parser Microservice</h3>
              </a>
              <ul>
                <li>
                  gets the IP address, preferred languages, and system info of
                  the client's device.
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
              <img
                src="../images/requestheader.png"
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <a href="https://back-end-projects.herokuapp.com/urlshortener">
                <h3>URL Shortener Microservice</h3>
              </a>
              <ul>
                <li>
                  allows to post url and receive a shortened URL which could be
                  copied. Visiting the shortened URL will redirect to the
                  original link.
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
              <img
                src="../images/urlshortener.png"
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <a href="https://back-end-projects.herokuapp.com/exercisetracker">
                <h3>Exercise Tracker</h3>
              </a>
              <ul>
                <li>
                  allows to create user, to add an exercise to any user, to get
                  user's exercise log optionally for selected period.
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
              <img
                src="../images/exercisetracker.png"
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <a href="https://back-end-projects.herokuapp.com/metadata">
                <h3>File Metadata Microservice</h3>
              </a>
              <ul>
                <li>
                  Allows to submit a form object that includes a file upload, on
                  submit receive JSON with file's name, type and size.
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
              <img src="../images/metadata.png" style={{ width: "100%" }}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
