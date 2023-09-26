import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Logo, MainScreen } from "@/components";
import { colors, GlobalStyle } from "@/styles";
import { useSearchCityWeather } from "@/services/weather";
import { useState } from "react";
import CityWeatherDetails from "./components/city-weather-details";
function App() {
  const [city, setCity] = useState<string>("");
  const { data } = useSearchCityWeather(city);
  console.log(data);
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        {window.location.pathname === "/" && <Logo />}
        <Routes>
          <Route path="/" element={<MainScreen setCity={setCity} />} />
          <Route path="/santa cruz" element={<CityWeatherDetails />} />
        </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
