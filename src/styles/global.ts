import { createGlobalStyle } from "styled-components";
import Background from "@/assets/background.svg";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    background-image: url(${Background});
    font-family: "Nunito", sans-serif;
  }
`;
