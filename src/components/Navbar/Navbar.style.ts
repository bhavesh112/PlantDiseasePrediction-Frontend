import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;
  align-items: center;
  @media (max-width: 767px) {
    padding: 10px 20px;
  }
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    @media (max-width: 767px) {
      font-size: 28px;
    }
  }
  & p {
    font-size: 22px;
    @media (max-width: 767px) {
      font-size: 12px;
    }
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  gap: 12px;
  & img {
    height: 100px;
    width: auto;
  }
  @media (max-width: 767px) {
    & img {
      height: 60px;
    }
  }
`;
interface NavItemProps {
  active: boolean;
}
export const NavItem = styled.img<NavItemProps>`
  opacity: ${(props) => (props.active ? "1" : "0.35")};
  height: 40px;
  @media (max-width: 767px) {
    height: 28px;
  }
`;
export const NavButtons = styled.div`
  display: flex;
  gap: 28px;
  @media (max-width: 767px) {
    gap: 12px;
  }
`;
