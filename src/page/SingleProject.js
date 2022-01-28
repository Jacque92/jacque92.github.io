import React from "react";
import { BookStore } from "../projects/BookStore";
import { NoteManage } from "../projects/NoteManage";
import { Frontend } from "../projects/Frontend";
import { Backend } from "../projects/Backend";
import { useParams } from "react-router";
import { projectData } from "../projectData";
import { Link } from "react-router-dom";
import { ToDoList } from "../projects/ToDoList";
import { Portfolio } from "../projects/Portfolio";

export const SingleProject = (props) => {
  const { id } = useParams();

  const nextPageHandler = (id) => {
    if (id !== "06") {
      return "0" + `${parseInt(id) + 1}`;
    }
    return "01";
  };

  return (
    <div className="container project_details">
      <div className="projectHeader">
        <div class="project_title">
          <h1>{projectData[id].name}</h1>
          <p>{projectData[id].description_short}</p>
          <div className="live_git_btn">
            <button>
              <a
                href={projectData[id].liveLink}
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                Live
              </a>
            </button>
            <button>
              <a
                href={projectData[id].GithubLink}
                target="_blank"
                style={{ color: "white", textDecoration: "none" }}
              >
                Github
              </a>
            </button>
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
        <Backend />
      ) : id === "05" ? (
        <Portfolio />
      ) : (
        <ToDoList />
      )}

      <footer>
        <button>
          <Link
            to={`/work/${nextPageHandler(id)}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            Next Project
          </Link>
        </button>
      </footer>
    </div>
  );
};
