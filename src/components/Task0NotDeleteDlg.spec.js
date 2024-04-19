import React from "react";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";
import Task0NotDeleteDlg from "./Task0NotDeleteDlg";

describe("<Task0NotDeleteDlg />", () => {
  it("Task0NotDeleteDlg", () => {
    const props = {
      visible: true,
      fnTask0NotDeleteDlgClose: jest.fn()
    };
    const wrapper = shallow(<Task0NotDeleteDlg {...props} />);
    expect(wrapper.find({ id: "task0NotDeleteDlg" })).toHaveLength(1);
  });

  it("Task0NotDeleteDlg header", () => {
    const props = {
      visible: true,
      fnTask0NotDeleteDlgClose: jest.fn()
    };

    const wrapper = shallow(<Task0NotDeleteDlg {...props} />);

    expect(wrapper.find({ id: "header" }).text()).toBe("Внимание!");
  });

  it("Task0NotDeleteDlg body", () => {
    const props = {
      visible: true,
      fnTask0NotDeleteDlgClose: jest.fn()
    };

    const wrapper = shallow(<Task0NotDeleteDlg {...props} />);

    expect(wrapper.find({ id: "task0NotDeleteDlg" })).toHaveLength(1);
    expect(wrapper.find({ id: "body" }).text()).toBe("Задачу -1 нельзя удалять.");
  });

  it("Task0NotDeleteDlg footer", () => {
    const props = {
      visible: true,
      fnTask0NotDeleteDlgClose: jest.fn()
    };

    const wrapper = shallow(<Task0NotDeleteDlg {...props} />);

    expect(wrapper.find({ id: "task0NotDeleteDlg" })).toHaveLength(1);
    expect(wrapper.find({ id: "ok" }).text()).toBe("Закрыть");
  });

});
