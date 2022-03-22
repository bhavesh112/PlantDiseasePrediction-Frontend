import React from "react";
import styled from "styled-components";
import nit from "./../assets/nit.svg";
const College = () => {
  return (
    <>
      <CollegeWrapper>
        <div className='name'>NIT Raipur</div>
        <div className='branch'>Biotechnology</div>
      </CollegeWrapper>
      <LogoWrapper>
        <img src={nit} alt='NIT' />
      </LogoWrapper>
    </>
  );
};
export default College;
const CollegeWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  font-size: 40px;
  font-weight: 700;
  & .name {
    color: rgba(255, 255, 255, 0.7);
  }
  & .branch {
    color: rgba(255, 255, 255, 0.5);
  }
`;
const LogoWrapper = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;
