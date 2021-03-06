import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src="../images/logo.png" alt="logo" height="40" width="40"></img>
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
          <a
            href="https://www.linkedin.com/in/tiexin-zhang-480283190/"
            target="_blank"
          >
            <img
              src="../images/linkedin.png"
              alt="linkedin"
              height="28"
              width="28"
            ></img>
          </a>
          <a href="mailto:jacquelinezhang92@gmail.com">
            <img
              src="../images/send.png"
              alt="send"
              height="28"
              width="28"
            ></img>
          </a>
        </div>
      </nav>
    </header>
  );
};
