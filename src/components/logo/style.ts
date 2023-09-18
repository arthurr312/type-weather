import styled, { css } from "styled-components";
import CloudImage from "@/assets/logo/cloud.svg";

export const Container = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const Cloud = styled.img.attrs({
  src: CloudImage,
  alt: "Nuvem",
  width: "40px",
  height: "40px",
})``;

export const Name = styled.h1`
  ${({ theme }) => css`
    color: ${theme.light_gray["gray-100"]};
    font-size: 22px;
  `}
`;
