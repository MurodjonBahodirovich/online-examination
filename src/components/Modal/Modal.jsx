import React from "react";
import { ModalBox, ModalBtn, OverlayBox } from "./Modal.styles";

function Modal(props) {
  const btns = [
    {
      element: "x",
      color: "red",
    },
    {
      element: "-",
      color: "yellow",
    },
    {
      element: "+",
      color: "green",
    },
  ];

  return (
    <>
      <OverlayBox />
      <ModalBox>
        <div>
          {btns.map((btn) => (
            <ModalBtn onClick={props.closeModal} btn={btn} key={btn.color} />
          ))}
        </div>

        {props.children}
      </ModalBox>
    </>
  );
}

export default Modal;
