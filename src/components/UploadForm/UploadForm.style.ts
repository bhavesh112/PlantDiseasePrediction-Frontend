import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  & img {
    height: 40px;
  }
`;
interface CardTitleProps {
  mar?: boolean;
}
export const CardTitle = styled.div<CardTitleProps>`
  font-size: 24px;
  font-weight: 700;
  color: #ffffffb2;
  text-align: center;
  margin-top: ${(props) => props.mar && "24px"};

  @media (max-width: 767px) {
    font-size: 18px;
  }
`;

export const UploadButton = styled.label`
  display: inline-flex;
  cursor: pointer;
  margin: 40px auto 0;
  background: rgba(255, 255, 255, 0.5);
  mix-blend-mode: normal;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
  padding: 20px 16px;
  gap: 12px;
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

  @media (max-width: 767px) {
    margin: 20px auto 0;
    padding: 16px;
    font-size: 16px;
    & img {
      height: 30px;
    }
  }
`;
export const FileWrapper = styled.div`
  border: 2px solid rgba(255, 255, 255, 0.35);
  box-sizing: border-box;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  padding: 6px;
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: 767px) {
    margin-top: 20px;
    flex-direction: column;
    gap: 12px;
  }
`;
export const FileName = styled.div`
  & span {
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  & .close {
    cursor: pointer;
    height: 28px;
    margin-top: 4px;
    margin-left: -8px;
  }
  color: rgba(255, 255, 255, 0.7);
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 6px;
`;
export const FileSubmit = styled.button`
  background: rgba(255, 255, 255, 0.5);
  mix-blend-mode: normal;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: inline-flex;
  height: 100%;
  padding: 12px 20px;
  border: none;
  color: #454545;
  font-size: 18px;
  font-weight: 700;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  & img {
    height: 30px;
  }
  @media (max-width: 767px) {
    font-size: 16px;
  }
`;
