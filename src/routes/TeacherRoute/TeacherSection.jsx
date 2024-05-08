import React, { Fragment, useState } from "react";
import TeachersLogin from "../../components/TeachersLogin/TeachersLogin";
import Teacher from "../../components/Body/Teacher/Teacher";

function TeacherSection() {
  localStorage.removeItem("activeTest");
  localStorage.removeItem("currentSubject");
  localStorage.removeItem("answer");
  localStorage.removeItem("questions");
  localStorage.removeItem("activeColor");
  localStorage.removeItem("selectedClass");

  const [data, setData] = useState({
    name: "Murodjon Halilov Bahodirovich",
    12012007: "12012007",
    912639653: "912639653",
  });

  return (
    <Fragment>
      {data ? <Teacher data={data} /> : <TeachersLogin setData={setData} />}
    </Fragment>
  );
}

export default TeacherSection;
