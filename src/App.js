import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./page/Home";
import { Work } from "./page/Work";
import { About } from "./page/About";
import { Contact } from "./page/Contact";
import { SingleProject } from "./page/SingleProject";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/work/:id" element={<SingleProject />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
