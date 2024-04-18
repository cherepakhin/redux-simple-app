import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form, ListGroup, Modal, Button } from "react-bootstrap";
import { createToggleTaskAction, }  from "../store/actions";

import DeleteConfirmDlg from "./DeleteConfirmDlg";
import PropTypes from "prop-types";
import * as actions from "../store/actions";

const Task = ({ task }) => {
// for testing use props uncomment
//  console.log("props=", task);
  const { id, title, completed } = {...task};
  const dispatch = useDispatch();

  const [visibleMoreDlg, setVisibleMoreDlg] = useState(false);
  const [visibleDeleteConfirmDlg, setVisibleDeleteConfirmDlg] = useState(false);

// show more dialog
  const showMoreDlg= (id) => {
    setVisibleMoreDlg(true);
  }

  const showMoreDlgClose = () => {
    setVisibleMoreDlg(false);
  }

  const showDeleteConfirmDlg = (task) => {
    console.log("before handleDeleteConfirmDlg visibleDeleteConfirmDlg=" + visibleDeleteConfirmDlg);
    console.log("before handleDeleteConfirmDlg task=" + task);
//TODO: uncomment after testing
//    if(id < 0) {
//      console.log("error id < 0");
//      return
//    };

    // в state устанавливается состояние диалога - visible=true через переменную visibleDeleteConfirmDlg.
    // из usestate() через переменную visibleDeleteConfirmDlg  приходит новое состояние,
    // видимость компоненты DeleteConfirmDlg "привязана" к переменной visibleDeleteConfirmDlg

    // DeleteConfirmDlg ничего не знает о Redux, store, state. ВСЕ управление  сделанов Task.js.

    // DeleteConfirmDlg ДОЛЖЕН БЫТЬ встроен в HTML(!!!) страницы Task.js.
    // и НЕ может существовать как совершенно независимый компонент (это не windows).
    setVisibleDeleteConfirmDlg(true);

    // Само удаление задачи (TASK) делать в компоненте Task.js, НЕ в диалоге.
    // КАК принять ответ от диалога? Через ПЕРЕДАЧУ функции удаления (handleTaskDeleteConfirm) в диалог.
    //      <DeleteConfirmDlg id={id} title={title} visible={visibleDeleteConfirmDlg}
    //        fnTaskDeleteConfirm={handleTaskDeleteConfirm}
    //        fnTaskDeleteCancel={handleTaskDeleteCancel}
    //      />

//
//    let taskAction = {...task, visible: true};
//    let showDeleteConfirmDlgAction = actions.createShowDeleteConfirmDlgAction({ taskAction });
//    // delete task
//    dispatch(showDeleteConfirmDlgAction);
  }

  const handleTaskDeleteConfirm = (id) => {
    console.log("handleTaskDeleteConfirm id=" + id);
    setVisibleDeleteConfirmDlg(false);
    //TODO: realize delete task
    dispatch(actions.createRemoveTaskAction(id));
  }

  const handleTaskDeleteCancel = () => {
    console.log("handleTaskDeleteCancel" );
    setVisibleDeleteConfirmDlg(false);
  }

  // Example inline dialog - MoreDlg. Example separate component - DeleteConfirmDlg
  // Example dialog as separate component - DeleteConfirmDlg
  return (
    <ListGroup.Item className={completed && 'task-completed'}>
      <Modal show={visibleMoreDlg} className="rounded-0">
        <Modal.Header closeButton>
          <Modal.Title>Подробнее о задаче</Modal.Title>
        </Modal.Header>
        <Modal.Body>{"{id: "+id+", title: '"+title+"'}?"}</Modal.Body>
        <Modal.Footer>
            <Button className="col-2" variant="primary" onClick={showMoreDlgClose}>Закрыть</Button>
        </Modal.Footer>
      </Modal>

      <DeleteConfirmDlg id={id} title={title} visible={visibleDeleteConfirmDlg}
        fnTaskDeleteConfirm={handleTaskDeleteConfirm}
        fnTaskDeleteCancel={handleTaskDeleteCancel}
      />

      <Form.Check
        id={id}
        type="checkbox"
        label={id+". "+title}
        checked={completed}
        onChange={ () => dispatch(createToggleTaskAction(id)) }
      />

      <div className="list-group-item-actions" align="left">
        <span onClick={() => showMoreDlg(id)}>Подробнее</span>
      </div>
      <div className="list-group-item-actions" align="center">
        <span onClick={() => showDeleteConfirmDlg(id)}>Удалить</span>
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