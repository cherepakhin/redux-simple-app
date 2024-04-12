import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import TaskList from "./components/TaskList";
import AddNewTask from "./components/AddNewTask";
import { useSelector } from "react-redux";
import './App.css';

function App() {

  const tasks = useSelector(state => state);

  return (
    <Container className="main-app-container">
      <Row className="mt-4">
        <Col className="mt-4">
          <h4>Новая задача</h4>
          <AddNewTask />
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <h4>Список задач</h4>
        </Col>
      </Row>
      <Row>
        <Col className="mt-12">
          <TaskList tasks={ tasks } />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
