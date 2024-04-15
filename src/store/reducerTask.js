import * as actions from './actionTypes';

let lastId = 0;
let state0 = [{ id: -1, title: '----- позже удалить из показа', completed: false}];
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
  console.log("reducerTask. state:");
  console.log(state);
  switch (action.type) {
    case actions.TASK_ADD:
      // добавляет данные в state из action.payload
      return [...state, {
        id: ++lastId,
        title: action.payload.title,
        completed: false,
      }];

    case actions.TASK_TOGGLE:
      console.log("actions.TASK_TOGGLE");
      console.log(action.payload);
      return state.map(task => {
        if (task.id === action.payload.id)
          return { ...task, completed: !task.completed }
        return task;
      });

    case actions.TASK_REMOVE:
      console.log("actions.TASK_REMOVE");
      console.log(action.payload);
      return state.filter(task => action.payload.id !== task.id);

    default:
      return state;
  } // switch
}