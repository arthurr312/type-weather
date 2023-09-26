import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background: #121218;
  padding: 10px;
  ${({ theme }) => css`
    .first-container {
      width: 50%;
      background: ${theme.dark_gray["gray-900"]};
      box-shadow: 8px 9px 9px -5px rgba(0, 0, 0, 0.1);
    }
  `}
`;
