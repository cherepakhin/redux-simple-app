import * as actionTypes from './actionTypes';
import {createAddTaskAction} from "./actions";

describe("actions tests", () => {
  it("createAddTaskAction.", () => {
      const action = createAddTaskAction("Example task");
      expect(action).toEqual({
                               type: actionTypes.TASK_ADD,
                               payload: "Example task"
                             });
    });
});
