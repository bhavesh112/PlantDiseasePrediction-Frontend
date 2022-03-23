import styled from "styled-components";

const StyledCard = styled.div`
  background: linear-gradient(
    111.76deg,
    rgba(255, 255, 255, 0.161) 5.47%,
    rgba(255, 255, 255, 0.0455) 90.07%
  );
  backdrop-filter: blur(30px);
  border-radius: 30px;
  position: absolute;
  left: calc(50% - 280px);
  top: 200px;
  width: 560px;
  padding: 40px 20px;
  border: 3px solid #ffffff4d;

  @media (max-width: 767px) {
    left: 0;
    top: 140px;
    width: 99%;
    padding: 20px 10px;
  }
`;

export default StyledCard;
