import React, { useState } from 'react';
import { Button, FormControl, InputGroup } from "react-bootstrap";
import * as actions from "../store/actions";
import { useDispatch } from "react-redux";

const AddNewTask = () => {
// Вызовите useState на верхнем уровне вашего компонента, чтобы объявить переменную состояния.
  const [taskTitle, setTaskTitle] = useState('-'); // '-' - значение по умолчанию
  const dispatch = useDispatch();

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  }

  const handleTaskSubmit = () => {
// Variant 1. WORKED!
//    dispatch(actions.addTask({
//      title: taskTitle
//    }));

// Variant 2. WORKED!
    var addTaskAction = actions.createAddTaskAction({ title: taskTitle});
// actionAddTask:
//   type: actions.TASK_ADD,
//   payload: taskTitle

    dispatch(addTaskAction);
    setTaskTitle('');
  }

  return (
    <InputGroup className="mb-3">
      <FormControl placeholder="Название новой задачи" value={taskTitle} onChange={e => handleTaskTitleChange(e)} />
      <InputGroup.Append>
        <Button onClick={handleTaskSubmit}>Сохранить</Button>
      </InputGroup.Append>
    </InputGroup>
  )
}

export default AddNewTask;