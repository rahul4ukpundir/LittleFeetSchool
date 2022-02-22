import React from "react";
import Silder from "./Slider";
import school from "../img/school.jpg"

class About extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="col-lg-6 col-md-4"><br/><img src={school} width={350}/> </div>
                <div className="col-lg-6">
                  <h1>About Little Feet School</h1>
                  <p style={{textAlign:"justify"}}>
                    Founded in 2010,Little Feet School is an offshoot of the
                    engineering conglomerate Meerut Institute of Engineering and
                    Technology. The Founder Chairman Shri Vishnu Saran
                    possesses, an illustrious and envious experience in the
                    education field and has been instrumental in conceiving and
                    setting up the school to give a concrete shape to the vision
                    of his father Shri Chandra Sen the great educationist. His
                    remarkable self discipline, positive mental attitude and
                    cheerful demeanor make him a role model to students of all
                    ages. <br/><br/>The primary focus of MIET is to provide complete all
                    round development to every student entering its portals A
                    child centered activity based curriculum is the highlight of
                    the school and the curriculum is very meticulously planned
                    keeping in mind the age-group of the children and their
                    heterogeneous mental levels. Contemporary teaching
                    methodologies and infrastructure further facilitate faster
                    and better learning. The curriculum is also scientifically
                    designed to coincide with the key personality areas. This is
                    being achieved through a unique and well-defined curriculum,
                    as well as a strong emphasis on "learning beyond the
                    classroom", a curriculum followed right through the school
                    combining sound academics, games and sports and an array of
                    compulsory extra curricular activities. Idyllically located,
                    the school campus is set in the back drop of nature which
                    offers a lush green and tranquil environment most conducive
                    for young learners' health, growth and learning. The School
                    boasts of an indigenous infrastructure and provides the best
                    facilities by way of RO drinking water, GPS supported
                    private fleet of school buses, multi functional mobile App,
                    sprawling playing fields, CCTV cameras and a host of other
                    necessities to make the school stay of a student comfortable
                    and convenient. To ensure the most delightful ambience for
                    learning, the school offers a fully air-conditioned K G
                    Section. The splish-splash of our cool pool, is a delight
                    for every beholder. The cheerful dips in the pool, provide a
                    respite from the heat when little children enjoy, under the
                    protective surveillance and affectionate care of an
                    experienced coach.<br/><br/>
                    Our vocal and instrumental room is
                    superbly furnished with sound systems that ensure an
                    aromatic ambience of highest order to let the children
                    internalize and master these skills. A vivid range of
                    outdoor games have taekwondo, cricket, hockey, table tennis,
                    skating, football, athletics and volleyball at the offing.
                    In the arena of indoor games, the school offers proficient
                    guidance in judo and yoga. Safety, security and sanity of
                    each member of the school is amongst our prime agendas.
                    Hence, the school houses an Infirmary equipped with a nurse
                    to provide immediate medical assistance to the students and
                    staff. The very first Class 10 CBSE results were very
                    encouraging with all the students securing between 8 to 10
                    CGPA. This year (2017) we are presenting our very first
                    class XII batch comprising Science and Commerce streams.
                    MIET has grown into an unbelievably vibrant and successful
                    academic institution that manages to combine cutting edge
                    instruction with its growing student body. Never complacent,
                    the school has always shown exponential growth in every area
                    and today, We are a community…inclusive of all learning
                    profiles, welcoming of multiple perspectives, engaged in a
                    continuous conversation among all learning partners about
                    how to sustain and improve quality of learning and life at
                    MIET. We warmly welcome everyone to come and taste the
                    flavour of a unique educational system which embodies the
                    traditional, the modern, the patriotic and the religious
                    aspects of a unified whole.
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
