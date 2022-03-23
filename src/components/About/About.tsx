import React from "react";
import { Wrapper } from "../UploadForm/UploadForm.style";
import about from "./../../assets/about.svg";
import styled from "styled-components";
const About = () => {
  return (
    <>
      <Wrapper>
        <Img src={about} alt='about' />

        <Prof>
          <p>GUIDED BY</p>
          <div className='name'>Dr. D. Vasanth</div>
          <p>(ASST PROFESSOR. DEPT OF BIOTECHNOLOGY)</p>
        </Prof>
        <TeamMembersWrapper>
          <p>TEAM MEMBERS</p>
          <ul>
            <li>Bansuri</li>
            <li>Bhavesh</li>
            <li>Sathish</li>
            <li>Manas</li>
            <li>Rishabh</li>
          </ul>
        </TeamMembersWrapper>
      </Wrapper>
    </>
  );
};

export default About;

const Img = styled.img`
  opacity: 0.35;
`;

const Prof = styled.div`
  text-align: center;
  margin-top: 16px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  & .name {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 8px;
    line-height: 1;
  }
`;

const TeamMembersWrapper = styled.div`
  margin-top: 24px;
  text-align: center;
  & p {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
  }
  & ul {
    list-style: none;
    margin-top: 8px;
  }
  & li {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1;
    display: inline-block;
    &:not(:last-child) {
      margin-right: 12px;
    }
  }
`;
