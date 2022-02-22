
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
import "../css/flexslider.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 const Silder =()=>{
    const images = [{ url: s1 },{ url: s2 }, { url: s3 },{ url: slider },{ url: slider1 }, { url: slider2 }, { url: slider3 }, { url: slider4 },{ url: slider5 },{ url: slider6 }];
    
    const LoopingImage =()=>{
      let imgName="";
        for(let i=1; i<6; i++){
        imgName ="s"+i;
      }
      return <div><img src={imgName}/></div>
    }
    return(
      <Carousel autoPlay={true}>
      <div><img src={s1} /></div>
      <div><img src={s2} /></div>
      <div><img src={s3} /></div>
      <div><img src={slider1} /></div>
      <div><img src={slider2} /></div>
      <div><img src={slider3} /></div>
      <div><img src={slider4} /></div>
      <div><img src={slider5} /></div>
      <div><img src={slider6} /></div>
     </Carousel>
      
    )
}

export default Silder;