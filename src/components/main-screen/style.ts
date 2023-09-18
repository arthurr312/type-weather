import styled, { css } from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const H1 = styled.h1`
  ${({ theme }) => css`
    color: ${theme.light_gray["gray-100"]};
  `}
`;

export const Paragraph = styled.p`
  ${({ theme }) => css`
    color: ${theme.light_gray["gray-200"]};
  `}
`;

export const Span = styled.span`
  ${({ theme }) => css`
    color: ${theme["blue-light"]};
  `}
`;