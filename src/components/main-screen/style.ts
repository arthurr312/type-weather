import styled, { css } from "styled-components";

export const Container = styled.div``;

export const H1 = styled.h1`
  ${({theme}) => css`
    color: ${theme.dark_gray["gray-600"]};
  `}
`;
