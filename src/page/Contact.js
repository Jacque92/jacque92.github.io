import React from "react";

export const Contact = () => {
  return (
    <div className="container contact">
      <h1 style={{ position: "relative", left: "-1rem" }}>Contact</h1>
      <h3>Let's connect</h3>
      <div class="message">
        <h3>
          Contact me by{" "}
          <a href="mailto:jacquelinezhang92@gmail.com">
            <strong>jacquelinezhang92@gmail.com</strong>
          </a>
        </h3>
        <h3>
          Connect on{" "}
          <a href="https://www.linkedin.com/in/tiexin-zhang-480283190/">
            <strong>LinkedIn</strong>
          </a>
        </h3>
        <h3>
          Find my code on{" "}
          <a href="https://github.com/Jacque92">
            <strong>Github</strong>
          </a>
        </h3>
      </div>
    </div>
  );
};
