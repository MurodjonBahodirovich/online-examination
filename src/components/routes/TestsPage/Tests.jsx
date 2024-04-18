import React from "react";
import { TestPageContainer } from "./Tests.styles";
import ClassSelectingContainer from "../../TestsPage/ClassSelectingContainer";

function Tests() {
  return (
    <>
        <TestPageContainer>
          <ClassSelectingContainer />
        </TestPageContainer>
    </>
  );
}

export default Tests;
