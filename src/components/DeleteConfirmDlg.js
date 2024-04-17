import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";

import { createRemoveTaskAction }  from "../store/actions";

const DeleteConfirmDlg = ({id, title, visible}) => {

  const [visibleDeleteConfirmDlg, setVisibleDeleteConfirmDlg] = useState(false);
  const dispatch = useDispatch();

  const handleCancelDeleteConfirmDlg = () => {
//    console.log("before handleCloseDeleteConfirmDlg showDeleteConfirmDlg=" + visibleDeleteConfirmDlg);
    setVisibleDeleteConfirmDlg(false);
//    console.log("after handleCloseDeleteConfirmDlg showDeleteConfirmDlg=" + visibleDeleteConfirmDlg);
//    console.log("delete task id=" + id);
  }

  const handleConfirmDeleteConfirmDlg = () => {
    setVisibleDeleteConfirmDlg(false);

    if(id < 0) {
//      console.log("i<0 delete task id=" + id);
    } else {
      // delete task
      dispatch(createRemoveTaskAction(id));
    };
  }

  return (
      <Modal show={visibleDeleteConfirmDlg} className="rounded-0">
        <Modal.Header closeButton>
          <Modal.Title>Удалить?</Modal.Title>
        </Modal.Header>
        <Modal.Body>{"{id: "+id+", title: '"+title+"'}?"}</Modal.Body>
        <Modal.Footer>
            <Button className="col-2" variant="primary" onClick={handleConfirmDeleteConfirmDlg}>Да</Button>
            <Button className="col-2" variant="secondary" onClick={handleCancelDeleteConfirmDlg}>Нет</Button>
        </Modal.Footer>
      </Modal>
  );

}

DeleteConfirmDlg.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
}

export default DeleteConfirmDlg;