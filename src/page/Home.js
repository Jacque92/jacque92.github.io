import React from "react";
import { Link } from "react-router-dom";

const linkStyle = { textDecoration: "none", color: "#843602" };

export const Home = () => {
  return (
    <div className="container home">
      <h1>
        Jacqueline
        <br />
        zhang
      </h1>
      <h3 style={{ color: "#843602" }}>Self-taught Web Developer</h3>
      <h3 style={{ color: "#843602" }}> UX Designer</h3>

      <h3 className="location">Brisbane</h3>

      <div className="worksList">
        <h2>Selected Works</h2>
        <ul>
          <li>
            <Link to="/work/01" style={linkStyle}>
              <h3>01 Book Store Website</h3>
            </Link>
          </li>
          <li>
            <Link to="/work/02" style={linkStyle}>
              <h3>02 Note Management System</h3>
            </Link>
          </li>
          <li>
            <Link to="/work/03" style={linkStyle}>
              <h3>03 Frontend Projects</h3>
            </Link>
          </li>
          <li>
            <Link to="/work/04" style={linkStyle}>
              <h3>04 APIs and Microservices</h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
