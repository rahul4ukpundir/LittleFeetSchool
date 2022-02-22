
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { useState } from "react";
import MasterPage from "./MasterPage";
import Home from "./Home";
import About from "./About";
import Gallery from "./Gallery"
import Course from "./Course";
import logo from "../img/SchoolLogo.png"
import Contact from "./Contact";

const Menu = () => {
  const [key, setKey] = useState(1);
  const [collapse, setCollapse] = useState("nav navbar-nav collapse");

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
  const collapseClass =["nav navbar-nav"];
  return (
    
      <div className="navbar navbar-default navbar-static-top">
          <div className="navbar-header">
            <button
              type="button"
               className="navbar-toggle"
              data-toggle="collapse"
              //onClick={()=>setCollapse("nav navbar-nav ")}
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
                  <Link to="/LittleFeetSchool">Home</Link>
                </li>
                <li>
                  <Link to="/about">About US</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/course">Course</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <Routes>
                <Route path="/LittleFeetSchool"  element={<MasterPage />} />
                <Route path="/about"  element={<About />} />
                <Route path="/gallery"  element={<Gallery />} />
                <Route path="/course"  element={<Course />} />
                <Route path="/contact"  element={<Contact />} />
              </Routes>
              </div>
          </Router>
        </div>
    
  );
};

export default Menu;
