import React, { Fragment, useReducer } from "react";
import {
  Button,
  Input,
  InputBox,
  InputLabel,
  LoginBox,
  LoginBoxLabel,
  TeachersLoginContainer,
} from "./TeachersLogin.styles";
import { produce } from "immer";

const ACTION_TYPES = {
  idInput: "idInput",
  pwdInput: "pwdInput",
  pwdIcon: "pwdIcon",
  pwdType: "pwdType",
};

const INITIAL_VALUE = {
  pwdIcon: "🙈",
  pwdType: "password",
  idValue: "",
  pwdValue: "",
};

const inputsReducer = (state, { type, payload }) => {
  switch (type) {
    case ACTION_TYPES.idInput:
      state.idValue = payload;
      break;
    case ACTION_TYPES.pwdIcon:
      state.pwdIcon = payload;
      break;
    case ACTION_TYPES.pwdType:
      state.pwdType = payload;
      break;
    case ACTION_TYPES.pwdInput:
      state.pwdValue = payload;
      break;
    default:
      return;
  }
};

function TeachersLogin() {
  const [state, dispatch] = useReducer(produce(inputsReducer), INITIAL_VALUE);

  const handleChange = (e) => {
    e.target.id === ACTION_TYPES.idInput
      ? dispatch({
          type: ACTION_TYPES.idInput,
          payload: e.target.value,
        })
      : e.target.id === ACTION_TYPES.pwdInput
      ? dispatch({
          type: ACTION_TYPES.pwdInput,
          payload: e.target.value,
        })
      : console.error("You write another input!?");
  };

  const pwdFunc = () => {
    dispatch({
      type: ACTION_TYPES.pwdIcon,
      payload: state.pwdIcon === "🙈" ? "🙉" : "🙈",
    });
    dispatch({
      type: ACTION_TYPES.pwdType,
      payload: state.pwdType === "password" ? "text" : "password",
    });
  };

  const inputInfo = [
    {
      type: "text",
      placeholder: "ID ni kiriting",
      id: "idInput",
      icon: "🆔",
    },
    {
      type: state.pwdType,
      placeholder: "Parolni kiriting",
      id: "pwdInput",
      icon: state.pwdIcon,
    },
  ];

  return (
    <Fragment>
      <TeachersLoginContainer>
        <LoginBoxLabel>O'qituvchi bo'limiga xush kelibsiz!</LoginBoxLabel>
        <LoginBox>
          {inputInfo.map((info) => (
            <InputBox key={info.id}>
              <Input
                id={info.id}
                type={info.type}
                placeholder={info.placeholder}
                required
                key={info.type}
                onChange={handleChange}
                value={info.id === "pwdInput" ? state.pwdValue : state.idValue}
              />
              <InputLabel
                id={info.id}
                onClick={() => (info.id === "pwdInput" ? pwdFunc() : null)}
              >
                {info.icon}
              </InputLabel>
            </InputBox>
          ))}
          <Button>Kirish</Button>
        </LoginBox>
      </TeachersLoginContainer>
    </Fragment>
  );
}

export default TeachersLogin;
