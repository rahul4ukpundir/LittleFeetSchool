const bindPoints = (text: any) => {
    return (
      <li>
        <i className="fa fa-arrow-circle-right pr-10 colored"> {text}</i>{" "}
      </li>
    );
  };

const Syllabus =()=>{
    return(
        <div className="syllabus">
        <b>English </b> <br />
        <ul className="list-unstyled">
          {bindPoints(" Oral A to Z  ")}
          {bindPoints("  Recognition- A to J  ")}
        </ul>
        <b>Poem -</b>
        <ul className="list-unstyled">
          {bindPoints(" 1. Two little hands go clap clap clap  ")}
          {bindPoints(" 2. Teddy bear Teddy bear ")}
        </ul>
        
        <b>Hindi</b> - <br />
        <ul className="list-unstyled">
          {bindPoints(" Oral - अ से अः तक  ")}
          {bindPoints(" Recognition - अ से  अः   तक  ")}
        </ul>
        <b>Poem -</b>
        <ul className="list-unstyled">
          {bindPoints("  1. मिट्ठू मिट्ठू तोता  ")}
          {bindPoints(" 2. इंसी विंसी मकड़ा ऊपर चढ़ गया ")}
        </ul>
       
        <b>Maths - </b> <br />
        <ul className="list-unstyled">
          {bindPoints(" Oral counting 1 to  20 ")}
          {bindPoints(" Recognition - 1 to 10 ")}
        </ul>
        <b>GK</b> <br />
        <ul className="list-unstyled">
          {bindPoints("Fruits name")}
          {bindPoints("Vegetable's name")}
          {bindPoints("Animal's name")}
          {bindPoints("Means of transport")}
        </ul>
      </div>
    )
}

export default Syllabus;