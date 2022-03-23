import React from "react";
import { CardTitle, Wrapper } from "../UploadForm/UploadForm.style";
import paper from "./../../assets/paper.svg";
import styled from "styled-components";
import download from "./../../assets/download.svg";
import doc from "./../../assets/Paper.docx";
const Download = () => {
  return (
    <>
      <Wrapper>
        <img style={{ opacity: "0.35" }} src={paper} alt='document' />
        <CardTitle mar>Documentation</CardTitle>
        <DownloadButton href={doc} target={"_blank"}>
          <img src={download} alt='download' /> Download
        </DownloadButton>
        <p className='disclaimer'>* The paper is under progress</p>
      </Wrapper>
    </>
  );
};

export default Download;

const DownloadButton = styled.a`
  text-decoration: none;
  display: inline-flex;
  cursor: pointer;
  margin: 40px auto 0;
  background: rgba(255, 255, 255, 0.5);
  mix-blend-mode: normal;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
  padding: 20px 16px;
  gap: 12px;
  border: none;
  font-size: 20px;
  align-items: center;
  color: #454545;
  font-weight: 700;
  border-radius: 20px;
  text-transform: uppercase;
  & span {
    display: inline-block;
    padding-top: 4px;
  }
`;
