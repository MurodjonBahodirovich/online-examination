import React, { Fragment } from "react";
import TeachersLogin from "../../Body/TeachersLogin/TeachersLogin";

function TeacherSection() {
  localStorage.clear();
  return (
    <Fragment>
      <TeachersLogin />
    </Fragment>
  );
}

export default TeacherSection;
