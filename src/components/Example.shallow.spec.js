import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Task from "./Task";

// Example SHALLOW test (поверхностное тестирование)  on SIMPLE component Task
// SHALLOW: При копировании объектов или массивов JavaScript копирует данные только на один уровень вглубь.

// remove ERROR "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("Example Shallow on component <Task />", () => {
  it("Shallow check structure view: Form.Check, moreBtn, deleteBtn", () => {
    const task = {
      id: 100,
      title: "Task 1",
      completed: false
    };

    const wrapper = shallow(<Task task={task} />); //SHALLOW!!!
    console.log(wrapper.debug()); // for demo shallow
    const taskView = toJson(wrapper);

    expect(taskView.type).toEqual("ListGroupItem");
    expect(taskView.children.length).toEqual(3); // Form.Check, moreBtn, deleteBtn

    expect(taskView.children[0].type).toEqual("FormCheck");
    expect(taskView.children[0].props.id).toEqual(100);
    expect(taskView.children[0].props.type).toEqual('checkbox');
    expect(taskView.children[0].props.label).toEqual('100. Task 1');
    expect(taskView.children[0].props.checked).toEqual(false);
  });
});