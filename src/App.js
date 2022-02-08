import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faKey } from '@fortawesome/free-solid-svg-icons'

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">Dashboard Toast</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To Dashboard Project</h1>
      <ExampleToast>
        We have Toasts now
        <span role="img" aria-label="tada">
          🎉 <FontAwesomeIcon icon={faUserAlt} /> <FontAwesomeIcon icon={faKey} />
        </span>
      </ExampleToast>
    </Container>
  </Container>
);

export default App;
