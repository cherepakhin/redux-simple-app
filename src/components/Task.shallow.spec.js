import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Task from "./Task";

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
    expect(taskView.children.length).toBe(6); // showDeleteConfirmDlg, showVisibleMoreDlg, Form.Check, Подробнее, Удалить, dlg task -1
  });

//TODO: move to DeleteConfirmDlg.spec.js
  it("showDeleteConfirmDlg hidden in Task", () => {
    const task = {
      id: 100,
      title: "Task 1",
      completed: false
    };

    const wrapper = shallow(<Task task={task} />);
    expect(wrapper.props().children[0].type.displayName).toEqual("Modal");

    expect(wrapper.props().children[1].props).toEqual(
        expect.objectContaining(
        {
            id: 100,
            title: "Task 1",
            visible: false,
        })
    );
  });

//TODO: move to MoreDlg.spec.js
//  it("showVisibleMoreDlg hidden in Task", () => {
//    const task = {
//      id: 100,
//      title: "Task 1",
//      completed: false
//    };
//
//    const wrapper = shallow(<Task task={task} />);
//    const showVisibleMoreDlg = wrapper.props().children[1];
//
//    expect(showVisibleMoreDlg.props["className"]).toEqual("rounded-0"); // dlg have className="rounded-0"
//    expect(showVisibleMoreDlg.props.show).toBe(false);
//  });

  it("check props formCheck in Task", () => {
    const task = {
      id: 100,
      title: "Task 1",
      completed: false
    };

    const wrapper = shallow(<Task task={task} />);
    const formCheck = wrapper.props().children[3];

    expect(formCheck.props.id).toBe(task.id);
    expect(formCheck.props.type).toBe("checkbox");
    expect(formCheck.props.label).toBe("100. Task 1");
    expect(formCheck.props.checked).toBe(task.completed);
  });

//TODO: move to DeleteConfirmDlg.spec.js
//  it("showDeleteConfirmDlg NOT visible in Task ", () => {
//    const task = {
//      id: 100,
//      title: "Task 1",
//      completed: false
//    };
//
//    const wrapper = shallow(<Task task={task} />);
//    const showDeleteConfirmDlg = wrapper.props().children[0];
//
//    expect(showDeleteConfirmDlg.props["className"]).toEqual("rounded-0");
//    expect(showDeleteConfirmDlg.props.show).toBe(false);
//  });

  it("check showMoreBtn props in Task", () => {
    const task = {
      id: 100,
      title: "Task 1",
      completed: false
    };

    const wrapper = shallow(<Task task={task} />);
    const showMoreBtn = wrapper.props().children[4];

    expect(showMoreBtn.props["className"]).toEqual("list-group-item-actions");
    expect(showMoreBtn.props["align"]).toBe("left"); // align in cell
    expect(showMoreBtn.props["children"].props.children).toBe("Подробнее");
  });

  it("check deleteBtn props in Task", () => {
    const task = {
      id: 100,
      title: "Task 1",
      completed: false
    };

    const wrapper = shallow(<Task task={task} />);

    const deleteBtn = wrapper.props().children[5];
//    console.log(wrapper.props());
    expect(deleteBtn.props["className"]).toBe("list-group-item-actions");
    expect(deleteBtn.props["align"]).toBe("center"); // align in cell
    expect(deleteBtn.props["children"].props.children).toBe("Удалить");
  });

// Example tests:
//    const children = toJson(wrapper.children);
//    console.log(children);


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
