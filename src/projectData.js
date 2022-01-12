import bookstore from "./images/bookstore.png";
import test from "./images/test.png";
import portfolio from "./images/portfolio.png";
import frontend from "./images/frontend.png";
import backend from "./images/backend.png";

export const projectData = {
  "01": {
    name: "Book Store Website",
    techs: ["React", "Redux", "MongoDB", "Express", "MUI"],
    description:
      "A simplistic bookstore website displayed books' information fetched from New York Times Books API, allowing users to register/login to account, search books, add, remove and change quantity of books in their shopping cart.",
    description_short: "Built with React, Redux and MongoDB",
    img: bookstore,
    liveLink: "https://book-store-with-api.herokuapp.com/",
    GithubLink: "https://book-store-with-api.herokuapp.com/",
  },
  "02": {
    name: "Note Taking Website",
    techs: ["React"],
    description:
      "A Note Manage System that allows users to keep their reading notes trackable and editable ",
    img: test,
    liveLink: "https://book-store-with-api.herokuapp.com/",
    GithubLink: "https://book-store-with-api.herokuapp.com/",
  },
  "03": {
    name: "Portfolio",
    techs: ["React"],
    description: "My Portfolio Website",
    img: portfolio,
    liveLink: "https://book-store-with-api.herokuapp.com/",
    GithubLink: "https://book-store-with-api.herokuapp.com/",
  },
  "04": {
    name: "Front End Projects",
    techs: ["Heroku", "React"],
    description:
      "A website showcases five front end development libraries projects including Random Quote Machine, Markdown Previewer, Drum Machine, JavaScript Calculator and 25+5 Clock.",
    description_short: "Built with React",
    img: frontend,
    liveLink: "https://front-end-projects.herokuapp.com/",
    GithubLink: "https://book-store-with-api.herokuapp.com/",
  },
  "05": {
    name: "Back End Projects",
    techs: [
      "React",
      "bootstrap",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Heroku",
    ],
    description:
      "A website displays five APIs and Microservice projects including Timestamp Microservice, Request Header Parser Microservice, URL Shortener Microservice, Exercise Tracker and File Metadata Microservice. ",
    img: backend,
    liveLink: "https://back-end-projects.herokuapp.com/",
    GithubLink: "https://book-store-with-api.herokuapp.com/",
  },
};
