import React from "react";
import Modal from "react-modal";
import img from "../img/Registration.jpeg";
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
  } from "react-image-magnifiers";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function ModalPopup() {
  let subtitle:any;
  const [modalIsOpen, setIsOpen] = React.useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={closeModal}>close</button> <br/><br/> */}
        <div><div className="closeButton" onClick={closeModal} style={{display:"flex", color:"red", marginLeft:"100px", fontSize:20, cursor:"pointer"}}>x</div> <br/>
        <img src={img} style={{height:"60vh"}} /></div>
       
      </Modal>
    </div>
  );
}

export default ModalPopup;