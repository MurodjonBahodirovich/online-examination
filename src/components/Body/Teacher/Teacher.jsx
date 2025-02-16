import React, { Fragment } from "react";
import { TeacherSectionContainer, WelcomeText } from "./Teacher.styles";

const Teacher = ({ data }) => {
  return (
    <Fragment>
      <TeacherSectionContainer>
        <WelcomeText>🙋‍♂️ Xayrli Kun, {data.name}</WelcomeText>
      </TeacherSectionContainer>
    </Fragment>
  );
};

export default Teacher;
