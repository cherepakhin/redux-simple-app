import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Task from "./Task";

const task = {
  id: 100,
  title: "Task 1",
  completed: false
};

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("<Task />", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Task task={task} />);

    expect(wrapper.props().children[0].props.id).toEqual(task.id);
    expect(wrapper.props().children[0].props.label).toEqual("100. Task 1");
    expect(wrapper.props().children[0].props.checked).toEqual(false);
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
