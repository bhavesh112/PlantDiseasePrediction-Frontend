import React from "react";
import styled, { keyframes } from "styled-components";
import leaf from "./../assets/leaf.svg";
import { CardTitle } from "./UploadForm/UploadForm.style";
const Loader = () => {
  return (
    <>
      <LoaderWrapper>
        <img src={leaf} alt='loader' />
        <CardTitle>This might take some time...</CardTitle>
      </LoaderWrapper>
    </>
  );
};

export default Loader;
const breathe = keyframes`
0%{
    transform: scale(1);
}
75%{
    transform: scale(1.5);
}
100%{
    transform:scale(1);
}
`;
const LoaderWrapper = styled.div`
  height: 200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    height: 40px;
    margin: auto;
    animation: ${breathe} infinite linear 1s;
  }
`;
