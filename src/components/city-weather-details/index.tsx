import { Container } from "./style";
import { AutoComplete } from "@/components";
import CloudImage from "@/assets/logo/cloud.svg";
import WeatherIcon from "@/assets/weather-icons/night/few-clouds-night.svg";

function CityWeatherDetails() {
  return (
    <Container>
      <div className="first-container">
        <div className="align-content">
          <div className="image-container">
            <img src={CloudImage} />
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
            <img width={200} height={200} src={WeatherIcon} />
          </div>
        </div>
      </div>
      <div className="first-container">
        <h1>teste</h1>
      </div>
    </Container>
  );
}

export default CityWeatherDetails;
