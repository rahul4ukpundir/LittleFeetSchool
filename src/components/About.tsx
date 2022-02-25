import React from "react";
import Silder from "./Slider";
import school from "../img/school.jpg";
import slider2 from "../img/slides/slider2.jpeg";

class About extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="col-lg-6">
                  <h3>Our Vision: </h3> 
                 <p> We believe that a personalized and adaptive education is the
                  key to the development of a student. </p>
                  <br />
                  <img src={slider2} width={450} height={350} />{" "}
                </div>
                <div className="col-lg-6">
                  <h1>About Little Feet School</h1>
                  <p style={{ textAlign: "justify" }}>
                    Our management philosophy is based on responsibility and
                    mutual respect. People who come to [LITTLE FEET SCHOOLS]
                    want to work here because we have created an environment
                    that encourages creativity and achievement. LITTLE FEET
                    SCHOOLS aims to become a leader in producing the best
                    quality education standards in Meerut and across UP. The
                    mainstay of our strategy will be to offer a level of client
                    focus that is superior to that offered by our competitors.
                    <br />
                    <br />
                    To help achieve this objective, [LITTLE FEET SCHOOLS] seeks
                    to attract highly motivated individuals that want to work as
                    a team and share in the commitment, responsibility, risk
                    taking and discipline required to achieve our vision. Part
                    of attracting these special individuals will be to build a
                    culture that promotes both uniqueness and a bias for action.
                    While we will be realistic in setting goals and
                    expectations, [LITTLE FEET SCHOOLS] will also be aggressive
                    in reaching its objectives. This success will in turn enable
                    [LITTLE FEET SCHOOLS] to give its employees above average
                    compensation and innovative benefits or rewards, key
                    elements in helping us maintain our leadership position in
                    the worldwide marketplace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
