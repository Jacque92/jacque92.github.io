import React from "react";
import { SingleWork } from "../components/SingleWork";
import { projectData } from "../projectData";

export const Work = () => {
  return (
    <div className="container work">
      <h1>
        Selected <br />
        Works
      </h1>
      <h3>I hone my programing skills by doing various projects</h3>
      <section>
        {Object.keys(projectData).map((projectKey) => {
          return (
            <SingleWork
              key={projectKey}
              id={projectKey}
              projectInfo={projectData[projectKey]}
            />
          );
        })}
      </section>
    </div>
  );
};
