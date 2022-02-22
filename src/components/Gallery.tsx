import React from "react";
import img1 from "../img/gallery/1.jpeg";
import img2 from "../img/gallery/2.jpeg";
import img3 from "../img/gallery/3.jpeg";
import img4 from "../img/gallery/4.jpeg";
import img5 from "../img/gallery/5.jpeg";
import img6 from "../img/gallery/6.jpeg";
import img7 from "../img/gallery/7.jpeg";
import img8 from "../img/gallery/8.jpeg";
import img9 from "../img/gallery/9.jpeg";
import img10 from "../img/gallery/10.jpeg";
import img11 from "../img/gallery/11.jpeg";

class Gallery extends React.Component {
  render() {
    return (
      <div className="container">
          <br/>  <br/>  <br/>
          <h1 className="aligncenter">Festival cellebration photos</h1>
        <section>
          <div className="">
            <div className="row">
              <div className="col-lg-12">
                <div className="clearfix"></div>
                <div className="col-lg-4 work design">
                  {" "}
                  <img src={img1} alt="" height={300} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img2} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img3} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img4} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img5} alt="" width={300} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img6} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img7} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img8} alt="" />
                </div>

                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img9} alt="" width={300} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img10} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img1} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={img11} alt="" />
                </div>

                {/* <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={slider1} alt="" width={300} />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={slider1} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={slider1} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={slider1} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={slider1} alt="" />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 work design">
                  {" "}
                  <img src={slider1} alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Gallery;
