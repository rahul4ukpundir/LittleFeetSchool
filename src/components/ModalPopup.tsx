import React from "react";
import Modal from "react-modal";
import img from "../img/Registration.jpeg";

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
      >
        <div className="myButton" onClick={closeModal} style={{color:"red", float:"right",marginRight:30, cursor:"pointer", padding:5}}>Close Me</div> <br/>
        <img src={img} style={{height:"60vh"}} />
       
      </Modal>
    </div>
  );
}

export default ModalPopup;