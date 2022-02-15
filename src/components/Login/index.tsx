import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import "./Login.scss";
import * as Logo from "./../../assets/images/logo.png";

import { Col, Row, Container, Button, Form, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faKey,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import ErrorBoundary from './../../utils/ErrorBoundary';
import { log } from "console";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleOnSubmit = (values: any) => {
    console.log("check submit", values);
  };

  const schema = yup.object().shape({
    username: yup
      .string()
      .max(15, "Must be 15 characters or lsss!")
      .required("Username is required!"),
    password: yup
      .string()
      .max(15, "Must be 15 characters or lsss!")
      .required("Password is required!"),
    rememberMe: yup.bool(),
  });

  const handleShowPassword = () => {
    return setShowPassword(!showPassword);
  };

  console.log("test: ", Logo);
  
  return (
    <Container className="h-100" id="wrapLoginForm" fluid>
      <Row className="justify-content-center loginForm">
        <Col md="4" className="wrapLoginForm p-5">
          <div className="d-flex justify-content-center m-4">
            <div className="brand_logo_container">
              <ErrorBoundary>
                <img src={Logo} className="brand_logo" alt="Logo Dashboard Project" />
              </ErrorBoundary>
            </div>
          </div>
          <h1 className="textWelcome mt-5 mb-4 text-center">Welcome to Jackie CMS!</h1>
          <Formik
            validationSchema={schema}
            onSubmit={handleOnSubmit}
            initialValues={{
              username: "",
              password: "",
              rememberMe: false,
            }}
          >
            {({
              handleSubmit,
              handleBlur,
              handleChange,
              values,
              touched,
              isValid,
              dirty,
              errors
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3 mx-4">
                  <InputGroup hasValidation>
                    <InputGroup.Text id="username">
                      <FontAwesomeIcon icon={faUserAlt} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="unsername"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username && touched.username}
                      className="shadow-none"
                      onBlur={handleBlur}
                    />
                    <Form.Control.Feedback type="invalid">
                      {!!errors.username && touched.username ? errors.username : null}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 mx-4">
                  <InputGroup hasValidation>
                    <InputGroup.Text id="password">
                      <FontAwesomeIcon icon={faKey} />
                    </InputGroup.Text>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      aria-describedby="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      isInvalid={!!errors.password && touched.password}
                      className="shadow-none inputPassword"
                      onBlur={handleBlur}
                    />
                    <InputGroup.Text id="iconShowPassword" className={!!errors.password && touched.password ? "isInvalid" : "isValid"} onClick={handleShowPassword}>
                      <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                      />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">              
                      {!!errors.password && touched.password ? errors.password : null}

                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3 mx-4">
                  <Form.Check
                    name="rememberMe"
                    label="Remember me!"
                    onChange={handleChange}
                    id="rememberMe"
                    className="shadow-none checkboxRemember"
                  />
                </Form.Group>
                <div className="d-flex justify-content-center">
                  <Button className="px-5" variant="danger" type="submit" disabled={!(isValid && dirty) ? true : false }>Submit form</Button>
                </div>
              </Form>
            )}
        </Formik>
      </Col>
    </Row>
    </Container >
  );
};

export default Login;
