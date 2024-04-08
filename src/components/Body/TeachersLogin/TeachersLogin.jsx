import React, { Fragment } from "react";
import {
  Button,
  Input,
  LoginBox,
  LoginBoxLabel,
  TeachersLoginContainer,
} from "./TeachersLogin.styles";

function TeachersLogin() {
  const inputInfo = [
    {
      type: "text",
      placeholder: "ID ni kiriting",
    },
    {
      type: "password",
      placeholder: "Parolni kiriting",
    },
  ];

  return (
    <Fragment>
      <TeachersLoginContainer>
        <LoginBoxLabel>O'qituvchi bo'limiga xush kelibsiz!</LoginBoxLabel>
        <LoginBox>
          {inputInfo.map((info) => (
            <Input type={info.type} placeholder={info.placeholder} required />
          ))}
          <Button>Kirish</Button>
        </LoginBox>
      </TeachersLoginContainer>
    </Fragment>
  );
}

export default TeachersLogin;
