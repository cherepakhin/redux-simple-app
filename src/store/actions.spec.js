import * as actionTypes from './actionTypes';
import {createAddTaskAction, createToggleTaskAction} from "./actions";

describe("actions tests", () => {
  it("createAddTaskAction.", () => {
      const action = createAddTaskAction("Example task");
      expect(action).toEqual({
                               type: actionTypes.TASK_ADD,
                               payload: "Example task"
                             });
    });

  it("createToggleTaskAction.", () => {
      const ID = 100;
      const action = createToggleTaskAction(ID);
      expect(action).toEqual({
                               type: actionTypes.TASK_TOGGLE,
                               payload: {id: 100}
                             });
    });
});
