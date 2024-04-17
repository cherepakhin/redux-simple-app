import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Task from "./Task";

// remove ERROR "could not find react-redux context value
// please ensure the component is wrapped in a <Provider>"
jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("<Task />", () => {

  it("filter map by selected keys", () => {
    const myMap = new Map([["id", 100], ["title", "Task 1"], ["checked", false], ["type", "checkbox"]]);
    const selectedKeys = ["id", "title", "checked"]; // checkbox must be deleted
    const task = Object.fromEntries(myMap);
    expect(task).toEqual({id: 100, title: "Task 1", checked: false, type: "checkbox"});

    const filteredMap = new Map(
      [...myMap]
      .filter(([k, v]) => selectedKeys.includes(k)));

    expect(filteredMap).toEqual(new Map([["id", 100], ["title", "Task 1"], ["checked", false]]));
  });

  it("Check structure view: Form.Check, moreBtn, deleteBtn", () => {
    const task = {
      id: 100,
      title: "Task 1",
      completed: false
    };

    const wrapper = shallow(<Task task={task} />);
    const taskView = toJson(wrapper);

    expect(taskView.type).toEqual("ListGroupItem");
    expect(taskView.children.length).toEqual(5); // showDeleteConfirmDlg, showVisibleMoreDlg, Form.Check, Подробнее, Удалить
  });

  it("Test props render correctly", () => {
    const task = {
      id: 100,
      title: "Task 1",
      completed: false
    };

    const wrapper = shallow(<Task task={task} />);
    const showDeleteConfirmDlg = wrapper.props().children[0];
    expect(showDeleteConfirmDlg.props.show).toEqual(false);

    const showVisibleMoreDlg = wrapper.props().children[1];
    expect(showVisibleMoreDlg.props.show).toEqual(false);

    const formCheck = wrapper.props().children[2]; //Form.Check
    expect(formCheck.props.id).toEqual(task.id);
    expect(formCheck.props.type).toEqual("checkbox");
    expect(formCheck.props.label).toEqual("100. Task 1");
    expect(formCheck.props.checked).toEqual(task.completed);

    const showMoreBtn = wrapper.props().children[3]; //Подробнее
    console.log(showMoreBtn.props); // className: 'list-group-item-actions',
    expect(showMoreBtn.props["className"]).toEqual("list-group-item-actions");

//    expect(wrapper.props().children[0].props.id).toEqual(task.id);
//    expect(wrapper.props().children[0].props.label).toEqual("100. Task 1");
//    expect(wrapper.props().children[0].props.checked).toEqual(false);

//    const selectedProps = ["id", "label", "checked"];
    // props test
    // extract selectedProps from visual component Task:
//    const propsFromVisualTask = Object.entries(wrapper.props().children[0].props).filter(
//          ([k, v]) => selectedProps.includes(k)).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
    // tests props of visual component Task (visual label is: "100. Task 1"!!! not "Task 1" as is in input task)
//    expect(propsFromVisualTask).toEqual({id: 100, label: "100. Task 1", checked: false});
  });

// Example tests:
//    const children = toJson(wrapper.children);
//    console.log(children);


//  it("renders without crashing", () => {
//   shallow(<App />);
//  });
//
//  it("renders Account header", () => {
//    const wrapper = shallow(<App />);
//    const header = <h1>Display Active Users Account Details</h1>;
//   // expect(wrapper.contains(welcome)).toBe(true);
//    expect(wrapper.contains(header)).toEqual(true);
//  });
//
//  it("contains account", () => {
//    const wrapper = mount(<Account user={user} />);
//    const value = wrapper.find("p").text();
//    expect(value).toEqual("david@gmail.com");
//  });
//
//  it("accepts user account props", () => {
//    const wrapper = mount(<Account user={user} />);
//    expect(wrapper.props().user).toEqual(user);
//  });
});
