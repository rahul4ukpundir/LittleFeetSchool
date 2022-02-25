import SimpleImageSlider from "react-simple-image-slider";

import slider from "../img/slides/slider.jpeg";
import slider1 from "../img/slides/slider1.jpeg";
import slider2 from "../img/slides/slider2.jpeg";
import slider3 from "../img/slides/slider3.jpeg";
import slider4 from "../img/slides/slider4.jpeg";
import slider5 from "../img/slides/slider5.jpeg";
import slider6 from "../img/slides/slider6.jpeg";
import "../css/flexslider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Silder = () => {
  return (
    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
      <div>
        <img src={slider2} />
      </div>
      <div>
        <img src={slider3} />
      </div>
      <div>
        <img src={slider2} />
      </div>
      <div>
        <img src={slider5} />
      </div>
    </Carousel>
  );
};

export default Silder;
