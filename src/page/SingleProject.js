import React from "react";
import { BookStore } from "../projects/BookStore";
import { NoteManage } from "../projects/NoteManage";
import { Frontend } from "../projects/Frontend";
import { Backend } from "../projects/Backend";
import { useParams } from "react-router";
import { projectData } from "../projectData";
import { Link } from "react-router-dom";

export const SingleProject = (props) => {
  const { id } = useParams();

  const nextPageHandler = (id) => {
    if (id !== "05") {
      return "0" + `${parseInt(id) + 1}`;
    }
    return "01";
  };
  console.log(id);
  return (
    <div className="container project_details">
      <div className="projectHeader">
        <div class="project_title">
          <h1>{projectData[id].name}</h1>
          <p>{projectData[id].description_short}</p>
          <div className="live_git_btn">
            <a href={projectData[id].liveLink}>
              <button>Live</button>
            </a>
            <a href={projectData[id].GithubLink}>
              <button>Github</button>
            </a>
          </div>
        </div>
        <div className="workPicBox">
          <img src={projectData[id].img}></img>
        </div>
      </div>
      {id === "01" ? (
        <BookStore />
      ) : id === "02" ? (
        <NoteManage />
      ) : id === "03" ? (
        <Frontend />
      ) : id === "04" ? (
        <Frontend />
      ) : (
        <Backend />
      )}

      <footer>
        <Link to={`/work/${nextPageHandler(id)}`}>
          <button>Next Project</button>
        </Link>
      </footer>
    </div>
  );
};
