import React from "react";
import PropTypes from 'prop-types';
import { Modal, Button } from "react-bootstrap";

// Этот диалог никак не связан с Redux.
// Присвоение параметров, управление видимостью и реакция на нажатие кнопок сделано снаружи в компоненте Task.js
const DeleteConfirmDlg = ({id, title, visible, fnTaskDeleteConfirm, fnTaskDeleteCancel}) => {

  const handleCancel = () => {
    fnTaskDeleteCancel(id);
  }

  const handleConfirm = () => {
    fnTaskDeleteConfirm(id);
  }

  return (
      <Modal show={visible} className="rounded-0">
        <Modal.Header closeButton>
          <Modal.Title id="header">Удалить?</Modal.Title>
        </Modal.Header>
        <Modal.Body id="body">{"{id: "+id+", title: '"+title+"'}?"}</Modal.Body>
        <Modal.Footer>
            <Button id="ok" className="col-2" variant="primary" onClick={handleConfirm}>Да</Button>
            <Button id="cancel" className="col-2" variant="secondary" onClick={handleCancel}>Нет</Button>
        </Modal.Footer>
      </Modal>
  );

}

DeleteConfirmDlg.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  fnTaskDeleteConfirm: PropTypes.func.isRequired,
  fnTaskDeleteCancel: PropTypes.func.isRequired
}

export default DeleteConfirmDlg;