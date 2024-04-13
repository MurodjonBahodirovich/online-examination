import React, { Fragment } from "react";
import { TestPageContainer } from "./Tests.styles";
import ClassSelectingContainer from "../../TestsPage/ClassSelectingContainer";

function Tests() {
  return (
    <Fragment>
        <TestPageContainer>
          <ClassSelectingContainer />
        </TestPageContainer>
    </Fragment>
  );
}

export default Tests;
