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

class FooterContent extends React.Component {
  render() {
    return (
      <div className="container">
     <div className="row">
			<div className="col-lg-4">
				<div className="widget">
					<h5 className="widgetheading">Our Contact</h5>
					<strong>Little Feet School</strong><br />
          4/A -101, Raksha Puram, Mawana Road, Meerut<br />
					 Pin-250001, Near Meerut Club. <br /><br />
					<p>
						<i className="icon-phone"></i>6395082315, 9634061003 <br />
            <i className="icon-envelope-alt"></i> director@littlefeetschool.in <br/>
						<i className="icon-envelope-alt"></i> principal@littlefeetschool.in 
					</p>
				</div>
			</div>
			<div className="col-lg-4">
				<div className="widget">
					<h5 className="widgetheading">Quick Links</h5>
					<ul className="link-list">
						<li><a href="#">Latest Events</a></li>
						<li><a href="#">Terms and conditions</a></li>
						<li><a href="#">Privacy policy</a></li>
						<li><a href="#">Career</a></li>
						<li><a href="#">Contact us</a></li>
					</ul>
				</div>
			</div>
			<div className="col-lg-">
				<div className="widget">
					<h5 className="widgetheading">Latest posts</h5>
					<ul className="link-list">
            <li>The school aims to encourage a child to do wonders, to think, to feel, and to imagine by out Quality Education.</li>
						<li><a href="#">Our School Provides Your Child the quality material so that the study will not bother him..</a></li>
					  <li>Our School always try to appreciate students so that they can motivate them to achieve more and more in their life</li>
          </ul>
				</div>
			</div>
			
		</div>
    </div>
    );
  }
}

export default FooterContent;
