import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Copyright = styled.div`
  margin-left: 0.5rem;
  @media (max-width: 260px) {
    a {
      display: none;
    }
  }
`;

export const ThemeControls = styled.div`
  display: flex;
  align-items: center;
`;
