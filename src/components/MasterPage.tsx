import React from "react";
import Menu from "./Menu";
import Silder from "./Slider";
import Course from "./Course";
import Footer from "./Footer";
import team1 from "../img/team1.jpg";

class MasterPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
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
        <section className="hero-text">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <h1 className="aligncenter">Little Feet School</h1>
                  <span className="clear spacer_responsive_hide_mobile">
                    Founded in 2019, Little Feet School is an offshoot of
                    the engineering conglomerate Meerut Institute of Engineering
                    and Technology. The Director Geeta Raghuvanshi possesses, an
                    illustrious and envious experience in the education field
                    and has been instrumental in the conceiving. <br />
                    Little Feet School prides itself on the quality of its
                    educational programmes, the professionalism of its staff,
                    the enthusiasm of its students and the high level of support
                    provided by parents and community members. We are an open
                    school and we actively seek participation and involvement
                    from the whole school community. <br></br>
                    <br></br>
                    <b>School Values</b> <br />
                    <p>
                      These values were developed in consultation with the
                      school community. The school values a
                    </p>
                    <ul className="list-unstyled">
                      <li><i className="fa fa-arrow-circle-right pr-10 colored"></i> A high standard of teaching and learning </li>
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i> A safe and welcoming environment
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i> Family and community involvement
                      </li>
                    </ul>
                    <br></br>
                    <b>School Motto</b> <br />
                    <p>
                    The school motto was adopted on Harmony Day 2005 where a new school song, created by Ken Brodie, was performed. CARE in the school motto stands for:
                    </p>
                    <ul className="list-unstyled">
                      <li><i className="fa fa-arrow-circle-right pr-10 colored"></i> Commitment to Learning </li>
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i> Accepting Responsibility
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i> Respect for self, others and the environment
                      </li>
                      <li><i className="fa fa-arrow-circle-right pr-10 colored"></i> Excellence in all we do </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <Course />
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <img src={team1} alt="" width={300} height={300} />
                <br /> <br />
                <div style={{marginLeft:30}}>
                  <b>Geeta Raghuvanshi (Director)</b>
                </div>
              </div>
              <div className="col-md-6">
                <p>
                  <b>Director Message</b>
                </p>
                <p>
                  "EDUCATION IS A SHARED COMMITMENT BETWEEN DEDICATED TEACHERS,
                  MOTIVATED STUDENTS AND ENTHUSIASTIC PARENTS WITH HIGH
                  EXPECTATIONS" <br />
                  Today, the role of a school is not only to pursue the academic
                  excellence but also to motivate and empower the students to be
                  lifelong learners, critical thinkers, and productive members
                  of an ever-changing global society. Converting every
                  individual into a self-reliant and independent citizen, our
                  school provides an amalgam of scholastic and co-scholastic
                  activities. <br />
                  The world today is changing at such an accelerated rate and we
                  as educators need to pause and reflect on this entire system
                  of Education."To Motivate the Late bloomers, To mold the
                  Mediocre and To Challenge the Gifted” is the teaching notion.
                  Providing good quality modern education including a strong
                  component of cultural values, environment awareness and
                  physical education to talented children in rural areas
                  irrespective of their family’s socio-economic condition is the
                  prime motto of Thaai. A committed and supportive management,
                  dedicated teachers, caring and co-operative parents blend
                  harmoniously to create this school as a child-centric school.
                </p>
              </div>
            </div>
          </div>
        </section>
        
          <Footer />
        
      </div>
    );
  }
}

export default MasterPage;
