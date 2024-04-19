import React from "react";
import toJson from "enzyme-to-json";
import { shallow, mount } from "enzyme";
import DeleteConfirmDlg from "./DeleteConfirmDlg";
import { Modal, Button, ModalFooter } from "react-bootstrap";

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

  });

//TODO: ОЧЕНЬ МНОГО проверок. Разделить shallow тесты
  it("showDeleteConfirmDlg check structure with SHALLOW", () => {
    const task = {
      id: 100,
      title: "Task 1",
      visible: true,
    };

    const wrapper = shallow(<DeleteConfirmDlg {...task} />);
    const dlg = toJson(wrapper);
//    console.log(dlg);
//    console.log(dlg.node.props);
    expect(dlg.children[0].type).toBe("ModalHeader");
    expect(dlg.children[0].props).toStrictEqual( {"closeButton": true, "closeLabel": "Close"});
    expect(dlg.children[0].props).toEqual( {"closeButton": true, "closeLabel": "Close"});
    expect(dlg.children[1].type).toBe("ModalBody");
    expect(dlg.children[1].node.props.children).toEqual("{id: 100, title: 'Task 1'}?"); // json as string!!!
    expect(dlg.children[2].type).toBe("ModalFooter");

    expect(wrapper.find(Modal.Header)).toHaveLength(1);
    expect(wrapper.find(Modal.Body)).toHaveLength(1);
    expect(wrapper.find(Modal.Footer)).toHaveLength(1);

// https://remarkablemark.org/blog/2017/05/17/testing-react-modal/
    expect(wrapper.find(Modal).prop('show')).toBe(true);    // props.show
    expect(wrapper.find(Modal).prop('className')).toBe("rounded-0"); // props.rounded
    expect(wrapper.find(Modal).text()).toBe("Удалить?{id: 100, title: 'Task 1'}?ДаНет"); // body

    expect(wrapper.find(Modal.Title).text()).toBe("Удалить?"); // header
    expect(wrapper.find(Modal.Body).text()).toBe("{id: 100, title: 'Task 1'}?"); // header
    expect(wrapper.find(Modal.Footer).text()).toBe("ДаНет"); // footer

// test by selector
    expect(wrapper.find({ id: "header" }).text()).toBe("Удалить?"); // by selector
    expect(wrapper.find({ id: "body" }).text()).toBe("{id: 100, title: 'Task 1'}?"); // by selector

    expect(wrapper.find({ id: "ok" }).text()).toBe("Да"); // by selector
    expect(wrapper.find({ id: "cancel" }).text()).toBe("Нет"); // by selector

    expect(wrapper.find(Button)).toHaveLength(2);
  });

});
