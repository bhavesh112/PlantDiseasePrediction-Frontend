import styled from "styled-components";
interface ResultCardProps {
  isHealthy: boolean;
}
export const ResultCard = styled.div<ResultCardProps>`
  background: ${(props) => (props.isHealthy ? "#195839" : "#EE3737")};
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.35);
  box-sizing: border-box;
  border-radius: 20px;
  padding: 10px 18px;
  gap: 12px;
  display: flex;
  align-items: center;
  margin-top: 20px;
  & img {
    height: 60px;
  }
  & .plant-name {
    font-size: 22px;
    font-weight: 700;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 4px;
  }
  & a {
    color: rgba(255, 255, 255, 0.5);
    font-size: 22px;
    text-decoration: none;
    font-style: italic;
  }
`;
