import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .field-icon-alignment {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const Autocomplete = styled.input.attrs({
  placeholder: "Buscar Local",
})`
  margin-top: 48px;
  height: 8px;
  width: 40%;
  border-radius: 8px;
  outline: none;
  padding: 24px;
  box-shadow: 8px 9px 9px -5px rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-family: inherit;
  ${({ theme }) => css`
    background: ${theme.dark_gray["gray-600"]};
    color: ${theme.light_gray["gray-200"]};
  `}
`;

export const AlignSpinner = styled.div`
  position: relative;
  top: 60px;
  right: 50px;
`;

export const OptionsCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 43.8%;
  gap: 1px;
  & > :first-of-type {
    margin-top: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  & > :last-of-type {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

export const OptionsCard = styled.button`
  padding: 16px;
  cursor: pointer;

  ${({ theme }) => css`
    background: ${theme.dark_gray["gray-500"]};
    color: ${theme.light_gray["gray-100"]};
  `}

  p {
    font-family: inherit;
    font-size: 16px;
    text-align: left;
  }
`;
