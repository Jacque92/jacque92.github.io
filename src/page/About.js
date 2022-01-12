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
          Hi, I'm Jacqueline, a self-taught frontend developer based in
          Brisbane, Australia.
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
          few months of 2011, I have been self-taught by doing online courses on
          CodeCademy and FreeCodeCamp related to frontend and backend
          development, and building projects to dive into what I learned and
          hone my skills.
        </p>
      </div>

      <button>
        <a
          className="download"
          href="/images/Resume_Jacqueline_2022.pdf"
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
                <p>JavaScript (ES6+), HTML, CSS/Sass</p>
                <h4>Frameworks and Libraries</h4>
                <p>React, Node.js,Bootstrap, Tailwind Css, MUI, Ant-Design</p>
                <h4>Platform</h4>
                <p>Git/Github, Heroku, WordPress</p>
                <h4>Back-end</h4>
                <p>MongoDB, Express</p>
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
                <p>User Research, Usability Testing</p>
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
                <strong>Cocademy</strong>
              </p>
              <div>
                <p>Front-End Engieer</p>
                <p>Typescript</p>
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
                <p>Book Store Website</p>
                <p>Note Taking Web App</p>
                <p>Portfoilo Website</p>
                <p>FreeCodeCamp Front End Libraries Projects</p>
              </div>
            </div>
            <div className="subcontent">
              <p style={titleStyle}>
                <strong>Back End</strong>
              </p>
              <div>
                <p>FreeCodeCamp APIs and Microservices Projects</p>
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
