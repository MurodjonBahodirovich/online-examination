import React, { Fragment } from "react";
import { NoTestingTimeText } from "./TestPage.styles";
import Loading from "../Loading/Loading";
import Tests from "../TestsSection/Tests";

function TestingSection({
  data,
  classSelected,
  currentSubject,
  currentSubjectFunc,
}) {
  return (
    <Fragment>
      {!classSelected ? (
        <NoTestingTimeText>
          ✅Testni boshlash uchun sinfingizni tanlang⚠️
        </NoTestingTimeText>
      ) : data ? (
        <Tests
          data={data}
          currentSubject={currentSubject}
          currentSubjectFunc={currentSubjectFunc}
        />
      ) : (
        <Loading />
      )}
    </Fragment>
  );
}

export default TestingSection;
