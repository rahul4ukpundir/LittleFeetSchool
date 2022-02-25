import React from "react";
import Menu from "./Menu";
import Silder from "./Slider";
import Course from "./Course";
import Footer from "./Footer";
import team1 from "../img/Staff/Director.jpeg";
import team2 from "../img/Staff/Principal.jpeg";
import ModalPopup from "./ModalPopup";

class MasterPage extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div>
        <section>
          <ModalPopup />
        </section>
        <section>
          <div style={{ backgroundColor: "#DE3B69" }}>
            <div className="row">
              <div className="col-lg-12">
                <Silder />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div>
                  <h1 className="aligncenter">Little Feet School</h1>
                  <span className="clear spacer_responsive_hide_mobile">
                    The Director Geeta Raghuvanshi possesses, an illustrious and
                    envious experience in the education field and has been
                    instrumental in the conceiving. <br />
                    <p>
                      Little Feet School prides itself on the quality of its
                      educational programmes, the professionalism of its staff,
                      the enthusiasm of its students and the high level of
                      support provided by parents and community members. We are
                      an open school and we actively seek participation and
                      involvement from the whole school community.{" "}
                    </p>
                    <br></br>
                    <br></br>
                    <b>School Values</b> <br />
                    <p>
                      These values were developed in consultation with the
                      school community. The school values a
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                        A high standard of teaching and learning{" "}
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                        A safe and welcoming environment
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                        Family and community involvement
                      </li>
                    </ul>
                    <br></br>
                    <b>School Motto</b> <br />
                    <p>
                      The school motto was adopted on Harmony Day 2005 where a
                      new school song, created by Ken Brodie, was performed.
                      CARE in the school motto stands for:
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                        Commitment to Learning{" "}
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                        Accepting Responsibility
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                        Respect for self, others and the environment
                      </li>
                      <li>
                        <i className="fa fa-arrow-circle-right pr-10 colored"></i>{" "}
                        Excellence in all we do{" "}
                      </li>
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="skill-home">
                {" "}
                <div className="skill-home-solid clearfix">
                  <div className="col-md-4 text-center">
                    <span className="icons c1">
                      <i className="fa fa-book"></i>
                    </span>{" "}
                    <div className="box-area">
                      <h3>Quality Eduction</h3>{" "}
                      <p>
                        The school aims to encourage a child to do wonders, to
                        think, to feel, and to imagine by out Quality Education.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <span className="icons c2">
                      <i className="fa fa-thumbs-up"></i>
                    </span>{" "}
                    <div className="box-area">
                      <h3>Quality Material</h3>{" "}
                      <p>
                        Our School Provides Your Child the quality material so
                        that the study will not bother him.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <span className="icons c3">
                      <i className="fa fa-desktop"></i>
                    </span>{" "}
                    <div className="box-area">
                      <h3> Boost Their Learning </h3>{" "}
                      <p>
                        Our School always try to appreciate students so that
                        they can motivate them to achieve more and more in their
                        life
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <img
                  src={team1}
                  alt=""
                  width={300}
                  height={300}
                  style={{ borderRadius: 10 }}
                />
                <br />
                <div>
                  <b>Geeta Raghuvanshi (Director)</b>
                </div>
              </div>
              <div className="col-md-6">
                <p>
                  <b>Director Message</b>
                </p>
                <p>
                  Happy and active children are creative children who are
                  willing to learn. <br/><br/> All our programmes are designed to stimulate
                  learning through the five senses; smell, touch, taste, hear,
                  and sight. Cognitive stimulation of the mind is also
                  important, and this is achieved through imagination, creative
                  thinking, social interaction, and most of all learning through
                  play and fun. Our Montessori education principle approach
                  recognizes; Fun, Learning, Friends, and Creativity as
                  essential components of learning process.<br/><br/> We believe that a
                  genuine alliance between parents and teachers creates the best
                  climate for a child’s first learning experience away from home
                  and as such, communication and collaboration with parents is
                  ongoing. Teachers are able to know, honor and nurture the
                  unique character and spirit of each child because of our low
                  student to teacher ratio.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4">
                <img
                  src={team2}
                  alt=""
                  width={300}
                  height={300}
                  style={{ borderRadius: 10 }}
                />
                <br />
                <div>
                  <b>Rekha Singh (Principal)</b>
                </div>
              </div>
              <div className="col-md-6">
                <p>
                  <b>Principal Message</b>
                </p>
                <p>
                  As I walk down the hallways of the school everyday, I can hear
                  the chatter of eager minds, the shouts of excitement from the
                  victorious athletes, the thump of dancer feet and the sound of
                  melodious voices harmonizing. The perpetual energy, movement
                  and enthusiasm permeate the atmosphere at Little Feet School.
                  We are a school with a difference! We value individualism,
                  creativity and innovation and strive to nurture them in our
                  students.
                  <br />
                  <br />
                  Our motto “Spread the Light” is at the heart of everything we
                  do at the school. We aim to not just impart knowledge to the
                  students, but also to inculcate in them – wisdom, compassion,
                  and a humanitarian spirit. We have a multi-cultural student
                  population; hence we teach children the importance of
                  tolerance and respecting each other’s culture. Discipline,
                  values, and integrity are the very foundation of this school.
                </p>
              </div>
            </div>
          </div>
        </section>
        <footer>
          {/* <h3 className="aligncenter">School Celebration Photos</h3> */}
          <Footer />
        </footer>
      </div>
    );
  }
}

export default MasterPage;
