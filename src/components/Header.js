import logo from "../images/logo.png";
import linkedin from "../images/linkedin.png";
import send from "../images/send.png";

import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="logo" height="40" width="40"></img>
      </Link>
      <nav>
        <ul>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <li>Home </li>
          </Link>

          <Link to="/work" style={{ textDecoration: "none", color: "black" }}>
            <li> Work </li>
          </Link>

          <Link to="/about" style={{ textDecoration: "none", color: "black" }}>
            <li>About </li>
          </Link>

          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <li> Contact </li>
          </Link>
        </ul>
        <div className="socialLink">
          <a href="https://www.linkedin.com/in/tiexin-zhang-480283190/">
            <img src={linkedin} alt="linkedin" height="28" width="28"></img>
          </a>
          <a href="mailto:jacquelinezhang92@gmail.com">
            <img src={send} alt="send" height="28" width="28"></img>
          </a>
        </div>
      </nav>
    </header>
  );
};
