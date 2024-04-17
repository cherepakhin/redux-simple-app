//import React from "react";
//import { mount } from "enzyme";
import toJson from "enzyme-to-json";
//import Task from "./Task";

// Example MOUNT test on SIMPLE component Task

// remove ERROR "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

//TODO: delete test
describe("Exmplde Mount <Task />", () => {
  it("Mount check structure view: Form.Check, moreBtn, deleteBtn", () => {
    const task = {
      id: 100,
      title: "Task 1",
      completed: false
    };

//TODO: repair test after test DeleteConfirmDlg
//    const wrapper = mount(<Task task={task} />); // MOUNT!!!
// for testing use props uncomment line below
//    console.log(wrapper.debug()); // for demo mount

//    const taskView = toJson(wrapper);

//TODO: repair test after test DeleteConfirmDlg
//    expect(taskView.type).toEqual("Task");
//    expect(taskView.children.length).toEqual(1); // Form.Check, moreBtn, deleteBtn
//
//    expect(taskView.props).toEqual({"task": {...task}}); // copy props
//    expect(taskView.props).toEqual({"task": task}); // without copy props
  });
});