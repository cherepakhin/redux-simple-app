import * as actions from './actionTypes';

// actions это просто контейнер для переноса данных(payload) и команды для обработки этих данных(type)
// вызывается из формы AddNewTask dispatch(actions.addTask({title: taskTitle}));
// сама обработка action происходит в reducer.js
export const addTaskAction = title => ({
  type: actions.TASK_ADD,
  payload: title
});

export const toggleTaskAction = id => ({
  type: actions.TASK_TOGGLE,
  payload: { id }
});

export const removeTaskAction = id => ({
  type: actions.TASK_REMOVE,
  payload: { id }
})