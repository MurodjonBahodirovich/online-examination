import React from "react";
import {
  LoadingAnimation,
  LoadingContainer,
  LoadingText,
} from "./Loading.styles";

function Loading() {
  return (
    <LoadingContainer>
      <LoadingAnimation />
      <LoadingText>Yuklanmoqda</LoadingText>
    </LoadingContainer>
  );
}

export default Loading;
