
import SimpleImageSlider from "react-simple-image-slider";
import s1 from "../img/slides/1.jpg";
import s2 from "../img/slides/2.jpg";
import s3 from "../img/slides/3.jpg";
import slider from "../img/slides/slider.jpeg";
import slider1 from "../img/slides/slider1.jpeg";
import slider2 from "../img/slides/slider2.jpeg";
import slider3 from "../img/slides/slider3.jpeg";
import slider4 from "../img/slides/slider4.jpeg";
import slider5 from "../img/slides/slider5.jpeg";
import slider6 from "../img/slides/slider6.jpeg";

 const Silder =()=>{
    const images = [{ url: s1 },{ url: s2 }, { url: s3 },{ url: slider },{ url: slider1 }, { url: slider2 }, { url: slider3 }, { url: slider4 },{ url: slider5 },{ url: slider6 }];
    return(
        <SimpleImageSlider
        width="100%"
        height={600}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={0.5}
        autoPlay={true}
        navMargin={100}
      />
    )
}

export default Silder;