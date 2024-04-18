import * as actionTypes from './actionTypes';

// actions это просто контейнер для переноса данных(payload) и команды для обработки этих данных(type)
// вызывается из формы AddNewTask dispatch(actions.addTask({title: taskTitle}));
// сама обработка action происходит в reducer.js
export const createAddTaskAction = title => ({
  type: actionTypes.TASK_ADD,
  payload: title
});

export const createToggleTaskAction = id => ({
  type: actionTypes.TASK_TOGGLE,
  payload: { id }
});

export const createRemoveTaskAction = id => ({
  type: actionTypes.TASK_REMOVE,
  payload: { id }
})

export const createShowDeleteConfirmDlgAction = task => ({
  type: actionTypes.SHOW_DELETE_CONFIRM_DLG,
  payload: { task }
})

