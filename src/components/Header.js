import logo from "../images/logo.png";
import linkedin from "../images/linkedin.png";
import send from "../images/send.png";

import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="logo" height="40" width="40"></img>
      <nav>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" style={{ textDecoration: "none", color: "black" }}>
              Work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className="socialLink">
          <a href="https://www.linkedin.com/in/tiexin-zhang-480283190/">
            <img src={linkedin} alt="linkedin" height="28" width="28"></img>
          </a>
          <a href="https://github.com/Jacque92">
            <img src={send} alt="send" height="28" width="28"></img>
          </a>
        </div>
      </nav>
    </header>
  );
};
