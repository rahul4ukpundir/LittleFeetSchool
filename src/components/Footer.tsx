import { useSpring, animated } from "react-spring";
import { useState } from "react";
import FooterContent from "./FooterContent";
import Marquee from "react-fast-marquee";

const Footer = () => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 2000 },
    reset: true,
    reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  })
  return (
    <>
     <FooterContent />
    {/* <Marquee style={{height:"100%"}} pauseOnHover={true} gradientWidth={2}> <FooterSlider /></Marquee> */}
      <div id="sub-footer">
        <div className="container">
          <div className="row" style={{marginBottom:30}}>
            <div className="col-lg-6">
              <div className="copyright">
                <p>
                  <span>
                    &copy; Little Feet School Site All right reserved.
                  </span>
                 
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
    </>
  );
};
export default Footer;
