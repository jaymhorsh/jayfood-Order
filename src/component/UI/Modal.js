import classes from  "./Modal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => <div className={classes.backdrop}></div>;
const ModalOverlay = (props) => {
  return (
    <div className={classes.content}>
      <div className={classes.modal}>{props.children}</div>
    </div>
  );
};
const modalDom = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, modalDom)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, modalDom)}
    </Fragment>
  );
};

export default Modal;
