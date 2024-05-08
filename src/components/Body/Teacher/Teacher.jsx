import React, { Fragment } from "react";
import { TeacherSectionContainer, WelcomeText } from "./Teacher.styles";

const Teacher = ({ data }) => {
  return (
    <Fragment>
      <TeacherSectionContainerN>
        <WelcomeText>🙋‍♂️ Xayrli Kun, {data.name}</WelcomeText>
      </TeacherSectionContainerN>
    </Fragment>
  );
};

export default Teacher;
