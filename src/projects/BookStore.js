import React from "react";
import search from "../images/search.png";
import sort from "../images/sort.png";
import login from "../images/login.png";
import cart from "../images/cart.png";
import book from "../images/book.png";

export const BookStore = () => {
  return (
    <div className="project_main">
      <div className="project_intro part">
        <h2>Intro</h2>
        <p>
          This project was built aiming to dive into React and combined basic
          knowledge including Redux, APIs and Database into a "real-world"
          project. Books's data is fetched from New York Times Bestsellers API,
          and the website is hosted on Heroku.
        </p>
      </div>

      {/* <div className="project_design">
        <h2>Design</h2>
        <p>
          This project was built aming to put theory into practice by making a
          "real-world" application with React for frontend, Redux for state
          management, MongoDB for database.
        </p>
      </div> */}
      <div className="project_features part">
        <h2>Features</h2>
        <div>
          <div className="feature">
            <h3>View Books and details page.</h3>
            <div
              style={{
                width: 600,
                height: 330,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img src={book} style={{ width: "100%" }}></img>
            </div>
          </div>
          <div className="feature">
            <h3>User authentication.</h3>
            <div
              style={{
                width: 330,
                height: 450,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img src={login} style={{ width: "100%" }}></img>
            </div>
          </div>
          <div className="feature">
            <h3>Sort books by category, fiction or none-fiction.</h3>
            <div
              style={{
                width: 310,
                height: 350,
                border: "1px solid black",
                overflow: "hidden",
              }}
            >
              <img src={sort} style={{ height: "100%" }}></img>
            </div>
          </div>
          <div className="feature">
            <h3>Add/remove books to/from shopping cart.</h3>
            <div
              style={{
                width: 620,
                height: 350,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img src={cart} style={{ height: "100%" }}></img>
            </div>
          </div>
          <div className="feature">
            <h3>Search book through database</h3>
            <div
              style={{
                width: 400,
                height: 330,
                overflow: "hidden",
                border: "1px solid black",
              }}
            >
              <img src={search} style={{ height: "100%" }}></img>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="techniques part">
        <h2>techniques</h2>
        <p>
          This project was built aming to put theory into practice by making a
          "real-world" application with React for frontend, Redux for state
          management, MongoDB for database.
        </p>
      </div> */}
    </div>
  );
};
