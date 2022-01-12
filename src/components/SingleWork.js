import React from "react";
import { Link } from "react-router-dom";

export const SingleWork = ({ projectInfo, id }) => {
  const { name, techs, description, img, liveLink, githubLink } = projectInfo;
  return (
    <div className="singleWork">
      <div>
        <h2 style={{ padding: "0 5rem" }}>{id}</h2>
      </div>

      <div className="singleWorkDescription">
        <h3>{name}</h3>
        <div className="workPicBox" style={{ position: "relative" }}>
          <a
            href={
              "https://github.com/Jacque92/book-store/blob/master/src/app/App.js"
            }
          >
            <img src={img} alt="work" />
          </a>
          <div className="live_detail_btn">
            <a href={liveLink}>
              <button>Live</button>
            </a>
            {/* <a href={githubLink}>
              <button>Github</button>
            </a> */}
            <Link to={`/work/${id}`}>
              <button>Details</button>
            </Link>
          </div>
        </div>

        <div className="Techniques">
          {techs.map((tech) => {
            return (
              <h6 className="techBadge" key={tech}>
                {tech}
              </h6>
            );
          })}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
