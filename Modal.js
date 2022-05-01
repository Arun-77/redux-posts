import React from 'react';
import classes from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { closeModal } from '../features/modalSlice';
const Modal = () => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <main
        className={classes.shade}
        onClick={() => {
          dispatch(closeModal());
        }}
      >
        <article className={classes.modal}>
          <h2>Oops!!</h2>
          <hr className={classes.line} />
          <p>You Can't Add Empty Posts!</p>
          <p>Try adding some Posts</p>
          <div>
            <button
              type="button"
              className={classes.ok}
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              Okay
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch(closeModal);
              }}
              className={classes.cancel}
            >
              Cancel
            </button>
          </div>
        </article>
      </main>
    </React.Fragment>
  );
};

export default Modal;
