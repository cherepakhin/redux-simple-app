import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Task0NotDeleteDlg from "./Task0NotDeleteDlg";

describe("<Task0NotDeleteDlg />", () => {
  it("Task0NotDeleteDlg shallow", () => {
    const props = {
      visible: true,
      fnTask0NotDeleteDlgClose: jest.fn()
    };
    const wrapper = shallow(<Task0NotDeleteDlg props={props} />);
//      const taskView = toJson(wrapper);
    expect(wrapper.find("Modal")).toHaveLength(1);
  });
});
