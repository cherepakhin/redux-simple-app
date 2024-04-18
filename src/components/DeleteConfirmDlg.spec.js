import React from "react";
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import { Modal, Button } from "react-bootstrap";

import DeleteConfirmDlg from "./DeleteConfirmDlg";

jest.mock('react-redux', () => ({
   useDispatch: jest.fn(),
   useSelector: jest.fn(),
}));

describe("DeleteConfirmDlg test", () => {
  it("showDeleteConfirmDlg check structure with MOUNT", () => {
    const task = {
      id: 100,
      title: "Task 1",
      visible: true,
    };
//    const wrapper = shallow(<DeleteConfirmDlg id='100' title="Task 1"/>);
    const wrapper = mount(<DeleteConfirmDlg {...task} />);
    const dlg = toJson(wrapper);
    console.log(dlg);
    console.log(dlg.node.props);
    expect(dlg.children[0].type).toBe("Modal");
    expect(dlg.children[0].props.show).toBe(true);
    expect(dlg.children[0].props.className).toBe("rounded-0");

    expect(dlg.node.props).toEqual(task);

//    expect(dlg.children[1].type).toBe("ModalBody");
//    expect(dlg.children[2].type).toBe("ModalFooter");
//    expect(dlg.children[1].node.props.children).toBe("{id: 100, title: 'Task 1'}?");
//
//    const body = wrapper.find("[forwardedRef]");
//    console.log(body);
  });

  it("showDeleteConfirmDlg check structure with SHALLOW", () => {
    const task = {
      id: 100,
      title: "Task 1",
      visible: true,
    };

    const wrapper = shallow(<DeleteConfirmDlg {...task} />);
    const dlg = toJson(wrapper);
    console.log(dlg);
    console.log(dlg.node.props);
    expect(dlg.children[0].type).toBe("ModalHeader");
    expect(dlg.children[1].type).toBe("ModalBody");
    expect(dlg.children[2].type).toBe("ModalFooter");

//    expect(dlg.node.props).toEqual(task);
  });

});
