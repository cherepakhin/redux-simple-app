import React from "react";
import { useDispatch } from "react-redux";
import { Form, ListGroup, Modal, Button } from "react-bootstrap";
import { createToggleTaskAction, createRemoveTaskAction }  from "../store/actions";
import { useState } from 'react';
//import {PropTypes} from "prop-types";

const Task = ({ task }) => {
  console.log("props=", task);
  const { id, title, completed } = {...task};
  const dispatch = useDispatch();

  const [showDeleteConfirmDlg, setShowDeleteConfirmDlg] = useState(false);
  const [showVisibleMoreDlg, setVisibleShowMoreDlg] = useState(false);

// show more dialog
  const handleShowMore= (id) => {
    console.log("ShowMoreDlg task id="+id);
    setVisibleShowMoreDlg(true);
  }

  const handleShowMoreDlgClose = () => {
    console.log("handleShowMoreDlgClose " + showVisibleMoreDlg);
    setVisibleShowMoreDlg(false);
  }

  const handleDeleteConfirmDlg = (task) => {
    console.log("before handleShowDeleteConfirmDlg showDeleteConfirmDlg=" + showDeleteConfirmDlg);
    setShowDeleteConfirmDlg(true);
    console.log("after handleDeleteConfirmDlg showDeleteConfirmDlg=" + showDeleteConfirmDlg);
    console.log("delete task id=" + id);

    if(id < 0) {
      console.log("delete task id=" + id);
      return
    };
  }

  const handleCancelDeleteConfirmDlg = (task) => {
    console.log("before handleCloseDeleteConfirmDlg showDeleteConfirmDlg=" + showDeleteConfirmDlg);
    setShowDeleteConfirmDlg(false);
    console.log("after handleCloseDeleteConfirmDlg showDeleteConfirmDlg=" + showDeleteConfirmDlg);
    console.log("delete task id=" + id);
  }

  const handleConfirmDeleteConfirmDlg = (task) => {
    console.log("before handleConfirmDeleteConfirmDlg showDeleteConfirmDlg=" + showDeleteConfirmDlg);
    setShowDeleteConfirmDlg(false);
    console.log("after  handleConfirmDeleteConfirmDlg showDeleteConfirmDlg=" + showDeleteConfirmDlg);
    console.log("delete task id=" + id);

    if(id < 0) {
      console.log("i<0 delete task id=" + id);
    } else {
      console.log("delete task id=" + id);
      // delete task
      dispatch(createRemoveTaskAction(id));
    };
  }

  return (
    <ListGroup.Item className={completed && 'task-completed'}>
      <Modal show={showDeleteConfirmDlg} className="rounded-0">
        <Modal.Header closeButton>
          <Modal.Title>Удалить?</Modal.Title>
        </Modal.Header>
        <Modal.Body>{"{id: "+id+", title: '"+title+"'}?"}</Modal.Body>
        <Modal.Footer>
            <Button className="col-2" variant="primary" onClick={handleConfirmDeleteConfirmDlg}>Да</Button>
            <Button className="col-2" variant="secondary" onClick={handleCancelDeleteConfirmDlg}>Нет</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showVisibleMoreDlg} className="rounded-0">
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

//Task.propTypes = {
//    task: PropTypes.shape({
//            id: React.PropTypes.number.isRequired,
//            title: React.PropTypes.string.isRequired,
//            completed: React.PropTypes.bool.isRequired
//  }).isRequired
//const defaultProps = {
//  id: 0,
//  title: "- - -",
//  completed: false
//}

export default Task;