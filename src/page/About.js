import React from "react";

const titleStyle = {
  borderBottom: "2px solid #5a4a42",
  marginBottom: "0.5rem",
};

export const About = () => {
  return (
    <div className="container about">
      <h1>About</h1>
      <div style={{ width: "60%", textAlign: "justify" }}>
        <h3>
          Hi, I'm Jacqueline, a self-taught web developer based in Brisbane,
          Australia.
        </h3>
        <br />
        <p>
          Completed the master degree of Interaction Design at UQ two years ago,
          I have been working as an admin officer in a college for a while.
          Having less pressure and more flexible time at current position makes
          me keep thinking my career development and looking for ways improve
          myself.
        </p>
        <p>
          With the knowledge of UX design and having a background of Mechanical
          Engineer, I started considering being a web developer. Since the last
          few months of 2021, I have been self-taught by doing frontend and
          backend development courses on CodeCademy and FreeCodeCamp , and
          building projects to dive into what I learned and hone my skills.
        </p>
      </div>

      <button>
        <a
          className="download"
          href="https://drive.google.com/file/d/1Wvl2I-TEMJxnQ9RjsHqroddjAF43-ZA0/view?usp=sharing"
          download="Jacqueline_resume"
        >
          Download Resume
        </a>
      </button>

      <div className="skillSet">
        <section>
          <h3>
            <strong>Skills</strong>
          </h3>

          <div className="content">
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>Web Development</strong>
              </p>
              <div>
                <h4>Language</h4>
                <p>JavaScript (ES6+), HTML, CSS, Python, PHP, C</p>
                <h4>Frameworks and Libraries</h4>
                <p>
                  React, Redux, Node.js,MongoDB, Express, Bootstrap, Tailwind
                  Css, Material Design, Ant-Design
                </p>
                <h4>Tools and Platform</h4>
                <p>Git/Github, Heroku, WordPress, Google Analytics</p>
              </div>
            </div>
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>UX Design</strong>
              </p>
              <div>
                <h4>Prototyping</h4>
                <p>Figma, Adobe XD, Sketch</p>
                <h4>Graphic Design</h4>
                <p>Illustrator, InDesign</p>
                <h4>Methods</h4>
                <p>User Research, Usability Testing, Prototyping</p>
              </div>
            </div>
          </div>
        </section>
        {/* certificate--------------------*/}
        <section className="certificate">
          <h3>
            <strong>Certificate</strong>
          </h3>
          <div className="content">
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>FreeCodecamp</strong>
              </p>
              <div>
                <p>Responsive Web Design</p>
                <p>JavaScript Algorithms and Data Structures</p>
                <p>Frontend Development Libraries </p>
                <p>Back End Development and APIs </p>
              </div>
            </div>
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>CodeCademy / Google Academy</strong>
              </p>
              <div>
                <p>Intermediate JavaScript</p>
                <p>Front-End Engieer</p>
                <p>Typescript</p>
                <p>Advanced Google Analytics</p>
              </div>
            </div>
          </div>
        </section>
        {/* projects--------------------*/}
        <section className="projects">
          <h3>
            <strong>Projects</strong>
          </h3>
          <div className="content">
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>Front End</strong>
              </p>
              <div>
                <p>FreeCodeCamp Front End Libraries Projects</p>
                <p>Portfoilo Website</p>
                <p>To Do List Web App</p>
              </div>
            </div>
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>Front End + Back End</strong>
              </p>
              <div>
                <p>FreeCodeCamp APIs and Microservices Projects</p>
                <p>Note Management Web App</p>
                <p>Book Store Website</p>
              </div>
            </div>
          </div>
        </section>
        {/* education --------------------*/}
        <section className="education">
          <h3>
            <strong>Education</strong>
          </h3>
          <div className="content">
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>Master of Interaction Design</strong>
              </p>
              <p>The University of Queensland, Australia </p>
              <p>02/2018 - 12/2019</p>
            </div>
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>Master of Mechanical Engineering</strong>
              </p>
              <p>Harbin Institute of Technology, China </p>
              <p>09/2013 - 07/2015</p>
            </div>
          </div>
        </section>
        {/* employment--------------------*/}
        <section className="employment">
          <h3>
            <strong>Employment History</strong>
          </h3>
          <div className="content">
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>Admin officer</strong>
              </p>
              <p>Newton College - Australia</p>
              <p>02/2020 - Present</p>
            </div>
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>Powertrain NVH Engineer</strong>
              </p>
              <p>BAIC Motor Corporation., Ltd - China</p>
              <p>08/2015 - 12/2016</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
