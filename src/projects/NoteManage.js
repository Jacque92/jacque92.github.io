import React from "react";

export const NoteManage = () => {
  return (
    <div className="project_main">
      <div className="project_intro part">
        <h2>Intro</h2>
        <p>
          A web application managing reading notes for helping establish
          personal knowledge system and structure writing. It's inspired by the
          note-managing method mentioned in the book named "How to take smart
          notes: one simple technique to boost writing, learning and thinking".
        </p>
      </div>

      <div className="project_features part">
        <h2>Features</h2>
        <div>
          <div className="feature">
            <div className="left">
              <h3>Add note.</h3>
              <ul>
                <li>
                  Data can be stored and deleted from database provided by
                  MongoDB.
                </li>
                <li>Automatically generate index</li>
                <li>
                  Autofill the author and title information when creatign
                  sequencial reference note.
                </li>
              </ul>
            </div>
            <div
              style={{
                width: 700,
                height: 400,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img
                src="../../public/images/newNote.png"
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <h3>
                Choose between "List" and "Gallery" view when browsing notes.
              </h3>
              <ul>
                <li>
                  Index is displayed on each note item, indicating connections
                  among notes.
                </li>
                <li>
                  Sequencial notes or thought notes can be add by clicking on
                  the corresponding button.
                </li>
              </ul>
            </div>
            <div
              style={{
                width: 400,
                height: 360,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img
                src="../../public/images/chooseview.png"
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
          <div className="feature">
            <div className="left">
              <h3>View and delete note</h3>
              <ul>
                <li>
                  Browse note details and trace back to reference note by
                  clicking on it's reference note index.
                </li>
              </ul>
            </div>
            <div
              style={{
                width: 700,
                height: 190,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img
                src="../../public/images/oneNote.png"
                style={{ width: "100%" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
