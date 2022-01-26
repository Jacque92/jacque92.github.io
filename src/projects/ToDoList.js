import React from "react";

export const ToDoList = () => {
  return (
    <div className="project_main">
      <div className="project_intro part">
        <h2>Intro</h2>
        <p>An application used to take quick notes.</p>
      </div>

      <div className="project_features part">
        <h2>Features</h2>
        <div>
          <div className="feature">
            <div className="left">
              <ul>
                <li>Add a list of items that you are planning to do</li>
                <li>
                  Delete the item that you are not going to keep in the list
                </li>
                <li>Count the number of unfinished tasks</li>
                <li>
                  Reorder all the items according to their status by keeping
                  unfinished tasks at the top of the list
                </li>
                <li>Check the item that you've done</li>
              </ul>
            </div>
            <div
              style={{
                width: 600,
                height: 280,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img src="../images/todolist.png" style={{ width: "100%" }}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
