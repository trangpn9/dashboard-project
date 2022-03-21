import { useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import "./Login.scss";
import Logo from './../../assets/images/logo.png';
import useAuth from './../../Hooks/useAuth';
import { useNavigate, Navigate, useLocation } from 'react-router-dom';
import { Col, Row, Container, Button, Form, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt,
  faKey,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import ErrorBoundary from './../../utils/ErrorBoundary';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();
  let location: any = useLocation();
  let auth = useAuth();

  let from = location.state?.from?.pathname || "/dashboard";

  useEffect(() => {
    console.log('Pathname: ', location.state?.from?.pathname);
    if (auth.user) return navigate(from, { replace: true });
  }, [])

  const handleOnSubmit = (values: any) => {
    auth.signin(values.username, () => {
      // Send them back to the page they tried to visit when they were
      // redirected to the login page. Use { replace: true } so we don't create
      // another entry in the history stack for the login page.  This means that
      // when they get to the protected page and click the back button, they
      // won't end up back on the login page, which is also really nice for the
      // user experience.
      navigate(from, { replace: true });
      console.log('Check Pathname: ', location);
    });
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

  return auth.isAuthenticated ? <Navigate to={from} /> : (
    <div id="idWrapLoginForm" className="h-100">
      <div className="header bg-gradient-info py-7 py-lg-8">
        <div className="space-free-login">          
        </div>
        <div className="separator separator-bottom separator-skew zindex-100"><svg xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
          <polygon className="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg></div>
      </div>
      <Container fluid className="containerFormLogin">
        <Row className="justify-content-center loginForm">
          <Col xs={10} sm={6} lg={4} xxl={3} className="wrapLoginForm p-5">
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
                    <Button className="px-5" variant="primary" type="submit" disabled={!(isValid && dirty) ? true : false}>Login</Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container >
    </div>
  );
};

export default Login;
