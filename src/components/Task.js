import React from "react";
import { useDispatch } from "react-redux";
import { Form, ListGroup } from "react-bootstrap";
import { createToggleTaskAction, createRemoveTaskAction }  from "../store/actions";

const Task = ({ task }) => {
  const { id, title, completed } = task;
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    console.log("delete task id="+id);
    dispatch(createRemoveTaskAction(id));
  }
  const handleShowMore= (id) => {
    console.log("show more task id="+id);
// TODO: show more task
//    dispatch(createRemoveTaskAction(id));
  }

  return (
    <ListGroup.Item className={completed && 'task-completed'}>
      <Form.Check
        id={id}
        type="checkbox"
        label={id+". "+title}
        checked={completed}
        onChange={ () => dispatch(createToggleTaskAction(id)) }
      />
      <div className="list-group-item-actions">
        <span onClick={() => handleShowMore(id)}>Подробнее</span>
      </div>
      <div className="list-group-item-actions">
        <span onClick={() => handleDeleteTask(id)}>Удалить</span>
      </div>
    </ListGroup.Item>
  )
}

export default Task;