import React from "react";
import PropTypes from 'prop-types';
import { Modal, Button } from "react-bootstrap";


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
          <Modal.Title>Удалить?</Modal.Title>
        </Modal.Header>
        <Modal.Body>{"{id: "+id+", title: '"+title+"'}?"}</Modal.Body>
        <Modal.Footer>
            <Button className="col-2" variant="primary" onClick={handleConfirm}>Да</Button>
            <Button className="col-2" variant="secondary" onClick={handleCancel}>Нет</Button>
        </Modal.Footer>
      </Modal>
  );

}

DeleteConfirmDlg.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  fnConfirmDelete: PropTypes.func.isRequired,
  fnCancelDelete: PropTypes.func.isRequired
}

export default DeleteConfirmDlg;