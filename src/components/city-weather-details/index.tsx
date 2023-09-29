import {
  CloudImage,
  CloudRainIcon,
  Container,
  DropIcon,
  SunDimIcon,
  ThermometerSimpleIcon,
  WeatherIcon,
  WindIcon,
} from "./style";
import { AutoComplete } from "@/components";
import StormyDay from '@/assets/weather-icons/day/stormy-day.svg';

function CityWeatherDetails() {
  return (
    <Container>
      <div className="first-container">
        <div className="align-content">
          <div className="image-container">
            <CloudImage />
          </div>
          <div className="autocomplete-container">
            <AutoComplete data={[]} setCity={() => {}} />
          </div>
        </div>
        <div className="weather-container">
          <div className="header-container">
            <div className="info-alignment">
              <div className="city-info">
                <p>Porto Alegre, RS</p>
                <span>Segunda-feira, 15 de maio de 2023</span>
              </div>
            </div>
            <div className="hour-info">
              <p>21:39</p>
            </div>
          </div>
          <div className="temperature-container">
            <div className="align-info">
              <p>28ºC</p>
              <p>32ºc / 26ºc - Poucas Nuvens</p>
            </div>
            <WeatherIcon />
          </div>
        </div>
      </div>
      <div className="second-container">
        <div className="weather-details-container">
          <h4>Detalhes do clima hoje</h4>
          <div className="info-alignment">
            <div className="icon-label-alignment">
              <ThermometerSimpleIcon />
              <p>Sensação Térmica</p>
            </div>
            <p>26ºC</p>
          </div>
          <div className="info-alignment">
            <div className="icon-label-alignment">
              <CloudRainIcon />
              <p>Probabilidade de chuva</p>
            </div>
            <p>0%</p>
          </div>
          <div className="info-alignment">
            <div className="icon-label-alignment">
              <WindIcon />
              <p>Velocidade do vento</p>
            </div>
            <p>8 km/h</p>
          </div>
          <div className="info-alignment">
            <div className="icon-label-alignment">
              <DropIcon />
              <p>Umidade do ar</p>
            </div>
            <p>40%</p>
          </div>
          <div className="info-alignment">
            <div className="icon-label-alignment">
              <SunDimIcon />
              <p>Índice UV</p>
            </div>
            <p>5</p>
          </div>
        </div>
        <div className="weather-details-container">
          <h4>Previsão para 5 dias</h4>
          <p>Amanhã</p>
          <img width={130} height={130} src={StormyDay} />
        </div>
      </div>
    </Container>
  );
}

export default CityWeatherDetails;
