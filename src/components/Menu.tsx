
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import MasterPage from "./MasterPage";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery"


const Menu = () => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 2000 },
    reset: true,
    reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    },
  });
  return (
    
      <div className="navbar navbar-default navbar-static-top">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <animated.div style={scrolling}>
              <h1 style={{ color: "#FF0066" }}> LITTLE FEET SCHOOL </h1>
            </animated.div>
          </div>
          <Router>
            <div className="navbar-collapse collapse ">
              <ul className="nav navbar-nav">
                <li className="active">
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About US</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/">Course</Link>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
              <Routes>
                <Route path="/"  element={<MasterPage />} />
                <Route path="/about"  element={<About />} />
                <Route path="/gallery"  element={<Gallery />} />
              </Routes>
            </div>
          </Router>
        </div>
    
  );
};

export default Menu;
