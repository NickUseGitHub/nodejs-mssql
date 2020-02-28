import React, { useState, useEffect } from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

import { apis, exportCsvOrExcel } from '../utils'
import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

function handleButtonOnClick(data) {
  return function(e) {
    e.preventDefault()
    if (!data || data.length === 0) return

    exportCsvOrExcel(data)
  }
}

const App = () => {
  const [todoList, setTodoList] = useState([])

  useEffect(function() {
    apis.get('/todo').then(response => {
      setTodoList(response.data)
    })
  }, [])

  return (
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To React-Bootstrap</h1>
        <ExampleToast className="toast">
          We now have Toasts
          <span role="img" aria-label="tada">
            🎉
          </span>
        </ExampleToast>
  
        <Button onClick={handleButtonOnClick(todoList)}>Download</Button>
  
        <br />
        <br />
  
        <ListGroup>
          {todoList && todoList.map(({ id, name }) => <ListGroup.Item key={id}>{name}</ListGroup.Item>)}
        </ListGroup>
      </Jumbotron>
    </Container>
  )
};

export default App;
