import React from "react";
import QueryForm from "./QueryForm";
import "./Contact.scss";
class Contact extends React.Component<any, any> {
  render() {
    return (
      <div className="container contact" style={{backgroundColor:"#152733"}}>
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-6">
              <div className="title-box clearfix ">
                <h3 className="title-box_primary">Send Query</h3>
              </div>
              <QueryForm />
            </div>
            <div className="col-lg-6">
              <div className="span4">
                <div className="title-box clearfix ">
                  <h3 className="title-box_primary">Contact info</h3>
                </div>
                <h5 className="contactDetails">Below are contact details.</h5>
                <b>Little Feet School</b>
                <br />
                4/A -101, Raksha Puram, Mawana Road, Meerut
                <br />
                Near Meerut Club
                <br />
                Telephone: 6395082315, 9634061003
                <br />
                E-mail US: -{" "}{" "}
                <a href="director@littlefeetschool.in"> director@littlefeetschool.in </a>{","}
                <a href="principal@littlefeetschool.in"> principal@littlefeetschool.in </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
