import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterPage from "./MasterPage";
import About from "./About";
import Gallery from "./Gallery";
import Course from "./Course";
import Contact from "./Contact";
import { Navbar } from "react-responsive-navbar-overlay";
import "./Menu.scss";
import Marquee from "react-fast-marquee";
import Login from "./Login";

const Menu = () => {
  return (
    <Router>
      <div>
      <Marquee gradientColor={[240, 128,128]} gradientWidth={10} pauseOnHover={true}><b> Admission open for session 2022-2023. Please call us on <b> 6395082315, 9634061003 </b> for any enquiry <b>{" "}. </b></b> </Marquee>
        <Navbar
          brand="Little Feet School" 
          links={[
            { text: "Home", link: "/LittleFeetSchool" },
            { text: "About", link: "/about" },
            { text: "Gallery", link: "/gallery" },
            { text: "Academic ", link: "/course" },
            { text: "Contact", link: "/contact" },
            { text: "Login", link: "/login" },
          ]}
          backgroundColor="#DE3B69"
        />
        <Routes>
          <Route path="/LittleFeetSchool" element={<MasterPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/course" element={<Course />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Menu;
