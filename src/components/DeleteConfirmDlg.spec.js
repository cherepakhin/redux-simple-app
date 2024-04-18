import React from "react";
import toJson from "enzyme-to-json";
import { shallow } from "enzyme";
import DeleteConfirmDlg from "./DeleteConfirmDlg";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("DeleteConfirmDlg test", () => {
  it("showDeleteConfirmDlg check structure", () => {
    const task = {
      id: 100,
      title: "Task 1",
    };
    const wrapper = shallow(<DeleteConfirmDlg {...task}/>);
    const dlg = toJson(wrapper);
    console.log(dlg);
    expect(dlg.props.show).toBe(false);
  });
});
