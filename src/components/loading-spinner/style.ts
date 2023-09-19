import styled from "styled-components";
import { Spinner } from "@phosphor-icons/react";

export const SpinnerIcon = styled(Spinner).attrs({
  size: 32,
  color: "gray",
})`
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  animation: spin 1.5s linear infinite;
  background: transparent;
`;
