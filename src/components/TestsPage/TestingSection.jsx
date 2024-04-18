import React, { Fragment } from "react";
import { NoTestingTimeText, SubjectBox } from "./TestPage.styles";
import Loading from "../Loading/Loading";

function TestingSection({ data, classSelected }) {
  return (
    <Fragment>
      {!classSelected ? (
        <NoTestingTimeText>
          ✅Testni boshlash uchun sinfingizni tanlang⚠️
        </NoTestingTimeText>
      ) : data ? (
        data?.map((test) => (
          <SubjectBox key={test.subject}>{test.subject}</SubjectBox>
        ))
      ) : (
        <Loading />
      )}
    </Fragment>
  );
}

export default TestingSection;
