import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Alert from "react-popup-alert";

const WelcomePage = (isLogin:any) => {
    const navigate = useNavigate();
    const [alert, setAlert] = useState({
      type: "success",
      text: "Login is successfully.",
      show: true,
    });
    function onShowAlert(type: any) {
      setAlert({
        type: type,
        text: "Demo alert",
        show: true,
      });
    }
    function onCloseAlert() {
      setAlert({
        type: "",
        text: "",
        show: false,
      });
      navigate('/LittleFeetSchool');
    }
    return (
      <>
        
        <div style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
          <Alert
            header={"Message"}
            btnText={"Next"}
            text={alert.text}
            type={alert.type}
            show={alert.show}
            onClosePress={onCloseAlert}
            pressCloseOnOutsideClick={true}
            showBorderBottom={true}
            alertStyles={{}}
            headerStyles={{}}
            textStyles={{}}
            buttonStyles={{}}
          />
        </div>
      </>
    );
  };

  export default WelcomePage;
  