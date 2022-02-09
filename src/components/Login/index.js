import React, { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import "./Login.css";
import logo from "./../../assets/images/logo.png";

import { Col, Row, Container, Button, Form, InputGroup } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faKey,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleOnSubmit = (values) => {
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

  return (
    <Container className="h-100">
      <Row className="justify-content-center loginForm">
        <Col md="4">
          <img src={logo} width="150" alt="Logo Dashboard Project" />
          <h1>Login Form</h1>
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
              handleChange,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <InputGroup hasValidation>
                    <InputGroup.Text id="unsername">
                      <FontAwesomeIcon icon={faUserAlt} />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="unsername"
                      name="username"
                      value={values.username}
                      onChange={handleChange}
                      isInvalid={!!errors.username}
                      className="shadow-none"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.username}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3">
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
                      isInvalid={!!errors.password}
                      className="shadow-none inputPassword"
                    />
                    <InputGroup.Text id="iconShowPassword" onClick={handleShowPassword}>
                      <FontAwesomeIcon
                        icon={showPassword ? faEye : faEyeSlash}
                      />
                    </InputGroup.Text>
                    <Form.Control.Feedback type="invalid">
                      {errors.password}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check
                    name="rememberMe"
                    label="Remember Me!"
                    onChange={handleChange}
                    id="validationFormik0"
                  />
                </Form.Group>
                <Button type="submit" disabled={errors.username || errors.password ? "disabled" : null }>Submit form</Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
