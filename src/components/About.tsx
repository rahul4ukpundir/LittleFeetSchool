import React from "react";
import Silder from "./Slider";

class About extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <section>
          <div className="row">
            <div className="col-lg-12" style={{ backgroundColor: "red" }}>
              <Silder />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
