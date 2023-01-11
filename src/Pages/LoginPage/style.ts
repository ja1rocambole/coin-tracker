import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  height: 100vh;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const StyledSectionAnimation = styled.section`
  background: var(--color-gray);
  width: 45%;
  height: 100%;
  display: flex;
  position: relative;

  .wave {
    position: absolute;
    right: -140px;
    height: 100%;
  }

  @media (max-width: 1155px) {
    display: none;
  }
`;

export const StyledSectionForm = styled.section`
  width: 100%;
  height: 100%;
  background: var(--color-primary);
`;
