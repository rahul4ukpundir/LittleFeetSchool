import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import MasterPage from "./MasterPage";
import About from "./About";
import Gallery from "./Gallery";
import Course from "./Course";
import Contact from "./Contact";
import { Navbar } from "react-responsive-navbar-overlay";
import "./Menu.scss";

const Menu = () => {
  return (
    <Router>
      <div>
        <Navbar
          brand="Little Feet School"
          links={[
            { text: "Home", link: "/LittleFeetSchool" },
            { text: "About", link: "/about" },
            { text: "Gallery", link: "/gallery" },
            { text: "Course", link: "/course" },
            { text: "Contact", link: "/contact" },
          ]}
          backgroundColor="#DE3B69"
        />
        <Routes>
          <Route path="/LittleFeetSchool" element={<MasterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Menu;
