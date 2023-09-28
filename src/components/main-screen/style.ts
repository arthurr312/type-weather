import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;

  .autocomplete-container {
    margin-top: 48px;
  }
`;

export const H1 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.light_gray["gray-100"]};
    text-align: center;
  `}
  @media (max-width: 480px) {
    font-size: 1.5em;
  }
  @media (max-width: 360px) {
    font-size: 1.3em;
  }
`;

export const Paragraph = styled.p`
  font-size: 20px;
  margin-top: 8px;
  ${({ theme }) => css`
    color: ${theme.light_gray["gray-200"]};
    text-align: center;
  `}
  @media (max-width: 480px) {
    font-size: 1em;
  }
  @media (max-width: 360px) {
    font-size: 0.9em;
  }
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme["blue-light"]};
  `}
`;
