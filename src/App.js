import React from 'react';
import { Container, Col, Row } from "react-bootstrap";
import TaskList from "./components/TaskList";
import AddNewTask from "./components/AddNewTask";
import { useSelector } from "react-redux";
import './App.css';

function App() {

  const tasks = useSelector(state => state);

  return (
    <Container className="main-app-container ml-4"> {/*  "ml-4" Margin Left (ml!) (https://react-bootstrap.github.io/docs/layout/grid)*/}
      <Row className="mt-4">    {/* "mt-4"  top margin (https://react-bootstrap.github.io/docs/layout/grid)*/}
        <Col xs={6}>           {/* xs={6} 10 cells (https://react-bootstrap.github.io/docs/layout/grid)*/}
          <h4>Новая задача</h4>
          <AddNewTask />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Список задач</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskList tasks={ tasks } />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
