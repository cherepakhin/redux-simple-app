import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, ListGroup, Modal, Button } from "react-bootstrap";
import { createToggleTaskAction, }  from "../store/actions";

import DeleteConfirmDlg from "./DeleteConfirmDlg";
import Task0NotDeleteDlg from "./Task0NotDeleteDlg";

import PropTypes from "prop-types";
import * as actions from "../store/actions";

const Task = ({ task }) => {
// for testing use props uncomment
//  console.log("props=", task);
  const { id, title, completed } = {...task};
  const dispatch = useDispatch();

  const [visibleMoreDlg, setVisibleMoreDlg] = useState(false);
  const [visibleDeleteConfirmDlg, setVisibleDeleteConfirmDlg] = useState(false);
  const [visibleTask0NotDeleteDlg, setVisibleTask0NotDeleteDlg] = useState(false);

// show more dialog
  const openMoreDlg= (id) => {
    setVisibleMoreDlg(true);
//    setVisibleTask0NotDeleteDlg(true);
  }

  const closeMoreDlg = () => {
    setVisibleMoreDlg(false);
  }

  const openDeleteConfirmDlg = (task) => {
    if(task === -1) {
        console.log("task.id === -1");
        //TODO: show -1 not deleted
        setVisibleTask0NotDeleteDlg(true);
        return
    }
    console.log("before handleDeleteConfirmDlg visibleDeleteConfirmDlg:" );
    console.log(visibleDeleteConfirmDlg);
    console.log("before handleDeleteConfirmDlg task:");
    console.log(task);
    // в state устанавливается состояние диалога - visible=true через переменную visibleDeleteConfirmDlg.
    // из usestate() через переменную visibleDeleteConfirmDlg  приходит новое состояние,
    // видимость компоненты DeleteConfirmDlg "привязана" к переменной visibleDeleteConfirmDlg

    // DeleteConfirmDlg ничего не знает о Redux, store, state. ВСЕ управление  сделано в Task.js.

    // DeleteConfirmDlg ДОЛЖЕН БЫТЬ встроен в HTML(!!!) страницы Task.js.
    // и НЕ может существовать как совершенно независимый компонент (это не windows).
    setVisibleDeleteConfirmDlg(true);

    // Само удаление задачи (TASK) делать в этой компоненте (Task.js), НЕ в диалоге.
    // КАК принять ответ от диалога? Через ПЕРЕДАЧУ функции удаления (handleTaskDeleteConfirm) в диалог.
    //      <DeleteConfirmDlg id={id} title={title} visible={visibleDeleteConfirmDlg}
    //        fnTaskDeleteConfirm={handleTaskDeleteConfirm}
    //        fnTaskDeleteCancel={handleTaskDeleteCancel}
    //      />
  }

  const cancelDeleteConfirmDlg = () => {
    console.log("handleTaskDeleteCancel" );
    setVisibleDeleteConfirmDlg(false);
  }

  const confirmDeleteConfirmDlg = (id) => {
    console.log("confirmDeleteConfirmDlg id=" + id);
    setVisibleDeleteConfirmDlg(false);
    // dispatch to REST API!!!
    dispatch(actions.createRemoveTaskAction(id));
  }

  const closeTask0NotDeleteDlg = () => {
    setVisibleTask0NotDeleteDlg(false);
  }

  // MoreDlg - пример диалога, встроенного в компоненту Task.js
  // DeleteConfirmDlg.js - пример диалога в отдельной компоненте
  return (
    <ListGroup.Item className={completed && 'task-completed'}>
      <Modal show={visibleMoreDlg} className="rounded-0">
        <Modal.Header closeButton>
          <Modal.Title>Подробнее о задаче</Modal.Title>
        </Modal.Header>
        <Modal.Body>{"JSON: {id: "+id+", title: '"+title+"'}"}</Modal.Body>
        <Modal.Footer>
            <Button className="col-2" variant="primary" onClick={closeMoreDlg}>Закрыть</Button>
        </Modal.Footer>
      </Modal>

      <DeleteConfirmDlg id={id} title={title} visible={visibleDeleteConfirmDlg}
        fnTaskDeleteConfirm={(id) => confirmDeleteConfirmDlg(id)}
        fnTaskDeleteCancel={cancelDeleteConfirmDlg}
      />

      <Task0NotDeleteDlg visible={visibleTask0NotDeleteDlg}
        fnTask0NotDeleteDlgClose={closeTask0NotDeleteDlg}
      />

      <Form.Check
        id={id}
        type="checkbox"
        label={id+". "+title}
        checked={completed}
        onChange={ () => dispatch(createToggleTaskAction(id)) }
        title="title Form.Check"
      />
      <div id="idMoreBtn" className="list-group-item-actions" title="Подробнее о задаче">
        <span onClick={() => openMoreDlg(id)}>Подробнее</span>
      </div>
      <div className="list-group-item-actions" title="Удалить задачу">
        <span onClick={() => openDeleteConfirmDlg(id)}>Удалить</span>
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