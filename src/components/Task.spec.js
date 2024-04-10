import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Task from "./Task";

const task = {
  id: 100,
  title: "Task 1",
  completed: false
};

// remove ERROR "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("<Task />", () => {
  it("mapping", () => {
    const selectedProps = ["id", "title", "checked"];
    const task0 = {type: "checkbox", id: 100, title: "Task 1", checked: false, label: "100. Task 1"};
    const taskTarget = Object.entries(task0).filter(
        ([k, v]) => selectedProps.includes(k)).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

    expect(taskTarget).toEqual({id: 100, title: "Task 1", checked: false});
  });

  it("renders correctly", () => {
    const wrapper = shallow(<Task task={task} />);
    const tree = toJson(wrapper);
    console.log(tree);

    expect(wrapper.props().children[0].props.id).toEqual(task.id);
    expect(wrapper.props().children[0].props.label).toEqual("100. Task 1");
    expect(wrapper.props().children[0].props.checked).toEqual(false);
    const props = wrapper.props().children[0].props;
//TODO: протестировать значения props
//    expect(props).toEqual(
//        {type: "checkbox", id: 100, title: "Task 1", checked: false, label: "100. Task 1"}
//        );

    expect(tree.type).toEqual("ListGroupItem");
//    expect(tree.children.length).toEqual(2);
    console.log(tree.children.children);
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
