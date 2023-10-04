import styled, { css } from "styled-components";
import Cloud from "@/assets/logo/cloud.svg";
import Weather from "@/assets/weather-icons/night/few-clouds-night.svg";
import WeatherImage from "@/assets/weather-images/few-clouds-night.svg";
import {
  CloudRain,
  Drop,
  SunDim,
  ThermometerSimple,
  Wind,
} from "@phosphor-icons/react";

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
      height: 93%;
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

    .second-container {
      display: flex;
      gap: 16px;
      flex-direction: column;
      height: 96%;
      width: 50%;
      padding: 8px;
      margin: 16px;

      .weather-details-container {
        padding: 22px;
        border-radius: 8px;
        height: 100%;
        background: ${theme.dark_gray["gray-800"]};
        box-shadow: 8px 9px 9px -5px rgba(0, 0, 0, 0.1);

        .info-alignment {
          border-bottom: 1px solid ${theme.dark_gray["gray-600"]};
          padding: 8px;
          margin-top: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .icon-label-alignment {
            display: flex;
            align-items: center;
            gap: 8px;
          }
        }
        & > :last-of-type {
          border-bottom: none;
        }

        .weather-container-alignment {
          display: flex;
          height: 100%;
          gap: 24px;
          justify-content: center;
          align-items: center;

          .weather-detail {
            display: inherit;
            flex-direction: column;
            align-items: center;

            .day {
              color: ${theme.light_gray["gray-200"]};
              font-weight: bold;
            }

            p {
              color: ${theme.light_gray["gray-200"]};
              font-weight: 400;
              text-align: center;
              font-size: 14px;
            }

            span {
              color: ${theme.light_gray["gray-400"]};
            }
          }
        }
      }

      h4 {
        font-weight: lighter;
        color: ${theme.light_gray["gray-400"]};
      }

      p {
        font-weight: bold;
        color: ${theme.light_gray["gray-200"]};
      }
    }
  `}
`;

export const CloudImage = styled.img.attrs({
  src: Cloud,
})``;

export const WeatherIcon = styled.img.attrs({
  width: 200,
  height: 200,
  src: Weather,
})``;

export const CloudRainIcon = styled(CloudRain).attrs({
  color: "gray",
  size: 24,
})``;

export const DropIcon = styled(Drop).attrs({
  color: "gray",
  size: 24,
})``;

export const SunDimIcon = styled(SunDim).attrs({
  color: "gray",
  size: 24,
})``;

export const ThermometerSimpleIcon = styled(ThermometerSimple).attrs({
  color: "gray",
  size: 24,
})``;

export const WindIcon = styled(Wind).attrs({
  color: "gray",
  size: 24,
})``;
