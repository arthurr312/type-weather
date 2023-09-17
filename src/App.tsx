import MainScreen from "@/components/main-screen";
import GlobalStyle from "./styles/global";
import { ThemeProvider } from "styled-components";
import colors from "./styles/colors";
function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <MainScreen />
      </ThemeProvider>
    </>
  );
}

export default App;
