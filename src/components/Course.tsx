import Syllabus from "./Syllabus"

const Course = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="aligncenter">
            <h2 className="aligncenter">Courses We Offer</h2>
            <span className="clear spacer_responsive_hide_mobile"></span>
            
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="textbox clour1">
            <h3>Pre-Nersery Class</h3>
            <Syllabus />
          </div>{" "}
        </div>
        <div className="col-md-4">
          <div className="textbox clour2">
            <h3>Nersery Class</h3>
            <Syllabus />
          </div>{" "}
        </div>
        <div className="col-md-4">
          <div className="textbox clour3">
            <h3>First Class</h3>
            <Syllabus />
          </div>{" "}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="textbox clour1">
            <h3>Second Class</h3>
            <Syllabus />
          </div>{" "}
        </div>
        <div className="col-md-4">
          <div className="textbox clour2">
            <h3>Thired Class</h3>
            <Syllabus />
          </div>{" "}
        </div>
        <div className="col-md-4">
          <div className="textbox clour3">
            <h3>Fourth Course</h3>
            <Syllabus />
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Course;
