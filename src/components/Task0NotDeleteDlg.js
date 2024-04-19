import React from "react";
import PropTypes from 'prop-types';
import { Modal, Button } from "react-bootstrap";

// Этот компонент никак не связан с Redux.
// Присвоение параметров, управление видимостью и реакция на нажатие кнопок сделано снаружи в компоненте Task.js
const Task0NotDeleteDlg = ({visible, fnTask0NotDeleteDlgClose}) => {

  const handleClose = () => {
    console.log(visible);
    fnTask0NotDeleteDlgClose();
  }

  return (
      <Modal id="task0NotDeleteDlg" show={visible} className="rounded-0">
        <Modal.Header closeButton>
          <Modal.Title id="header">Внимание!</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">Задачу -1 нельзя удалять.</Modal.Body>
        <Modal.Footer>
            <Button id="ok" className="col-2" variant="primary" onClick={handleClose}>Закрыть</Button>
        </Modal.Footer>
      </Modal>
  );

}

Task0NotDeleteDlg.propTypes = {
  visible: PropTypes.bool.isRequired,
  fnTask0NotDeleteDlgClose: PropTypes.func.isRequired
}

export default Task0NotDeleteDlg;