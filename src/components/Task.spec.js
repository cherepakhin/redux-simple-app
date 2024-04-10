import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Task from "./Task";

// remove ERROR "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("<Task />", () => {
  it("example test mapping shallow props. See test \"renders correctly\".", () => {
    const selectedProps = ["id", "title", "checked"];
    const task0 = {type: "checkbox", id: 100, title: "Task 1", checked: false, label: "100. Task 1"};
    const taskTarget = Object.entries(task0).filter(
        ([k, v]) => selectedProps.includes(k)).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

    expect(taskTarget).toEqual({id: 100, title: "Task 1", checked: false});
  });

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


  it("renders correctly", () => {
    const task = {
      id: 100,
      title: "Task 1",
      completed: false
    };

    const wrapper = shallow(<Task task={task} />);
    const tree = toJson(wrapper);
//    console.log(tree);

    expect(wrapper.props().children[0].props.id).toEqual(task.id);
    expect(wrapper.props().children[0].props.label).toEqual("100. Task 1");
    expect(wrapper.props().children[0].props.checked).toEqual(false);

    const selectedProps = ["id", "label", "checked"];
    // extract selectedProps from visual component Task:
    const propsFromVisualTask = Object.entries(wrapper.props().children[0].props).filter(
          ([k, v]) => selectedProps.includes(k)).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});
    // tests props of visual component Task (visual label is: "100. Task 1"!!! not "Task 1" as is in input task)
    expect(propsFromVisualTask).toEqual({id: 100, label: "100. Task 1", checked: false});

    expect(tree.type).toEqual("ListGroupItem");
    expect(tree.children.length).toEqual(2);
//    console.log(tree.children.children);
//    {
//      node: {
//        nodeType: 'function',
//        type: {
//          '$$typeof': Symbol(react.forward_ref),
//          render: [Function (anonymous)],
//          defaultProps: [Object],
//          displayName: 'ListGroupItem'
//        },
//        props: {
//          className: false,
//          children: [Array],
//          variant: undefined,
//          active: false,
//          disabled: false
//        },
//        key: undefined,
//        ref: null,
//        instance: null,
//        rendered: [ [Object], [Object] ]
//      },
//      type: 'ListGroupItem',
//      props: { className: false, active: false, disabled: false },
//      children: [
//        {
//          node: [Object],
//          type: 'FormCheck',
//          props: [Object],
//          children: null,
//          '$$typeof': Symbol(react.test.json)
//        },
//        {
//          node: [Object],
//          type: 'div',
//          props: [Object],
//          children: [Array],
//          '$$typeof': Symbol(react.test.json)
//        }
//      ],
//      '$$typeof': Symbol(react.test.json)
//    }


//    const children = toJson(wrapper.children);
//    console.log(children);
  });


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
