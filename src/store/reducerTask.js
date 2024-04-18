import * as actions from './actionTypes';

let lastId = 0;
let state0 = [{ id: -1, title: 'позже удалить из показа', completed: false}];
// Здесь разместить REST API

// reducer возвращает новый state c учетом action
// эти функции вызывает dispatch с action
//  AddNewTask: ...
//    const handleTaskSubmit = () => {
//        dispatch(actions.addTask({    // содержимое addTask см.ниже
//          title: taskTitle
//        }));
//        setTaskTitle('');
//      }
//
// actions.js:
//export const addTask = title => ({
//  type: actions.TASK_ADD,
//  payload: title
//});

export default function reducerTask(state = state0, action) {
  console.log("reduserTask.js: BEFORE state:");
  console.log(state);
  console.log("reduserTask.js action:");
  switch (action.type) {
    case actions.TASK_ADD:
      console.log(action);
      //TODO: add rest request
      //TODO: and refresh all tasks

      // Пример простого добавление задачи в state из action.payload
      // ТУТ делается изменение state
      return [...state, {
        id: ++lastId,
        title: action.payload.title,
        completed: false,
      }];

    case actions.TASK_TOGGLE:
      console.log(action);
      return state.map(task => {
        if (task.id === action.payload.id)
          return { ...task, completed: !task.completed }
        return task;
      });

    case actions.TASK_REMOVE:
      console.log(action);
      //TODO: add rest request
      //TODO: and refresh all tasks
      return state.filter(task => action.payload.id !== task.id);

    default:
      return state;
  } // switch
}