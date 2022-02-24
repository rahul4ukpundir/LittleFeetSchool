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

class FooterSlider extends React.Component {
  render() {
    return (
      <div className="container">
        <section>
          <div className="">
            <div className="row">
              <div className="col-lg-12">
                <div className="clearfix"></div>
                <div className="col-lg-3 work design">
                     <img src={img1} alt="" height={300}/>
                </div>
                <div className="col-lg-2 work design">
                     <img src={img10} alt="" height={300} />
                </div>
                <div className="col-lg-2 work design">
                     <img src={img3} alt="" height={300} />
                </div>
                <div className="col-lg-2 work design">
                     <img src={img4} alt="" height={300} />
                </div>
                <div className="col-lg-3 work design">
                     <img src={img5} alt="" height={300} />
                </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FooterSlider;
