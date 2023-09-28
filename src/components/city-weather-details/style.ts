import styled, { css } from "styled-components";
import WeatherImage from "@/assets/weather-images/few-clouds-night.svg";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  background: #121218;
  ${({ theme }) => css`
    .first-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 8px;
      margin: 16px;
      height: 90%;
      width: 50%;
      background: ${theme.dark_gray["gray-800"]};
      box-shadow: 8px 9px 9px -5px rgba(0, 0, 0, 0.1);
      border-radius: 8px;

      .align-content {
        display: flex;
        align-items: flex-start;
        width: 100%;
        gap: 8px;

        .image-container {
          padding: 13px;
          border-radius: 8px;
          background: ${theme.dark_gray["gray-600"]};
        }

        .autocomplete-container {
          width: 100%;
        }
      }

      .weather-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        margin-top: 16px;
        border-radius: inherit;
        height: 100%;
        width: 100%;
        background-image: url(${WeatherImage});
        background-repeat: no-repeat;
        color: ${theme.light_gray["gray-100"]};

        .header-container {
          display: inherit;
          justify-content: space-between;
          align-items: center;
          width: 95%;
        }

        .info-alignment {
          display: flex;
          flex-direction: column;
          .city-info,
          .hour-info {
            margin: 32px;
          }
        }

        p {
          font-weight: bold;
          font-size: 20px;
        }

        .temperature-container {
          width: 100%;
          margin: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 20px;
          p:first-of-type {
            font-size: 72px;
            font-weight: bold;
          }
          .align-info {
            flex-direction: column;
          }
        }
      }
    }
  `}
`;
