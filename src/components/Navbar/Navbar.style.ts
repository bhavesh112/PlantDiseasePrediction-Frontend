import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 40px;
  align-items: center;
`;
export const Title = styled.div`
  display: flex;
  flex-direction: column;

  & h1 {
    color: #fff;
    font-size: 48px;
    font-weight: 700;
  }
  & p {
    font-size: 22px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  gap: 12px;
  & img {
    height: 100px;
    width: auto;
  }
`;
interface NavItemProps {
  active: boolean;
}
export const NavItem = styled.img<NavItemProps>`
  opacity: ${(props) => (props.active ? "1" : "0.35")};
  height: 40px;
`;
export const NavButtons = styled.div`
  display: flex;
  gap: 28px;
`;
