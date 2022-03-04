import "./Login.scss";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { useState } from "react";
import WelcomePage from "./Welcome";

const SignupSchema = yup.object().shape({
  userName: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter user name."),
  password: yup
    .string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter password."),
});


const Login = () => {
  const [isLogin, setLogin] = useState(false);
  return (
    <Formik
      initialValues={{
        userName: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
          if(values.userName ==="littlefeet" && values.password ==="littlefeet@123"){
            setLogin(true);
          }
          else{
              alert("Login failed!.")
          }
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="container  loginPage">
            {isLogin && <WelcomePage isLogin ={isLogin}  />}
            <div className="row">
              <div className="col-lg-4">
                <h3>Login under construction</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <label>
                  User Name:<span className="validationMsg">*</span>{" "}
                </label>
                <Field name="userName" />
                {errors.userName && touched.userName && (
                  <div className="validationMsg">{errors.userName}</div>
                )}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <label>
                  Password:<span className="validationMsg">*</span>{" "}
                </label>
                <Field name="password" />
                {errors.password && touched.password && (
                  <div className="validationMsg">{errors.password}</div>
                )}
              </div>
            </div>
            <div className="row">
              <br />
              <div className="col-lg-4">
                <button type="submit">Login</button>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
