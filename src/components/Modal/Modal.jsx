import React from "react";
import { ModalBox, ModalBtn, OverlayBox } from "./Modal.styles";

function Modal(props) {
  return (
    <>
      <OverlayBox />
      <ModalBox>
        <ModalBtn onClick={props.closeModal} />
        {props.children}
      </ModalBox>
    </>
  );
}

export default Modal;
