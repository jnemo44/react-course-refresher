import { useState } from 'react';

import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  //useState hook always returns only 2 values the first is the
  //currently stored value. The second is the function that allows you
  //change the value
  const [modalIsOpen, setModalIsOpen ] = useState(false);


  function deleteHandler() {
    setModalIsOpen(true);
  }

  function onCloseModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      { modalIsOpen ? <Modal onCancel={onCloseModalHandler} onConfirm={onCloseModalHandler}/> : null}
      { modalIsOpen && <Backdrop onCancel={onCloseModalHandler}/>}     
    </div>
  );
}

export default Todo;
