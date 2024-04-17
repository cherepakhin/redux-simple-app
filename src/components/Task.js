import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, ListGroup, Modal, Button } from "react-bootstrap";
import { createToggleTaskAction, }  from "../store/actions";

import DeleteConfirmDlg from "./DeleteConfirmDlg";
import PropTypes from "prop-types";

const Task = ({ task }) => {
// for testing use props uncomment
//  console.log("props=", task);
  const { id, title, completed } = {...task};
  const dispatch = useDispatch();

  const [visibleDeleteConfirmDlg, setVisibleDeleteConfirmDlg] = useState(false);
  const [visibleMoreDlg, setVisibleMoreDlg] = useState(false);

// show more dialog
  const handleShowMore= (id) => {
    setVisibleMoreDlg(true);
  }

  const handleShowMoreDlgClose = () => {
    setVisibleMoreDlg(false);
  }

  const handleDeleteConfirmDlg = (task) => {
    console.log("before handleShowDeleteConfirmDlg visibleDeleteConfirmDlg=" + visibleDeleteConfirmDlg);
    setVisibleDeleteConfirmDlg(true);
    if(id < 0) {
      return
    };
  }

  return (
    <ListGroup.Item className={completed && 'task-completed'}>
      <DeleteConfirmDlg id={id} title={title} visible={visibleDeleteConfirmDlg} />

      <Modal show={visibleMoreDlg} className="rounded-0">
        <Modal.Header closeButton>
          <Modal.Title>Подробнее о задаче</Modal.Title>
        </Modal.Header>
        <Modal.Body>{"{id: "+id+", title: '"+title+"'}?"}</Modal.Body>
        <Modal.Footer>
            <Button className="col-2" variant="primary" onClick={handleShowMoreDlgClose}>Закрыть</Button>
        </Modal.Footer>
      </Modal>

      <Form.Check
        id={id}
        type="checkbox"
        label={id+". "+title}
        checked={completed}
        onChange={ () => dispatch(createToggleTaskAction(id)) }
      />
      <div className="list-group-item-actions" align="left">
        <span onClick={() => handleShowMore(id)}>Подробнее</span>
      </div>
      <div className="list-group-item-actions" align="center">
        <span onClick={() => handleDeleteConfirmDlg(id)}>Удалить</span>
      </div>
    </ListGroup.Item>
  )
}

Task.propTypes = {
    task: PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
  }).isRequired
}
//const defaultProps = {
//  id: 0,
//  title: "- - -",
//  completed: false
//}

export default Task;