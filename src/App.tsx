import { ThemeProvider } from "styled-components";
import { Logo, MainScreen } from "@/components";
import { colors, GlobalStyle } from "@/styles";
function App() {
  return (
    <>
      <ThemeProvider theme={colors}>
        <GlobalStyle />
        <Logo />
        <MainScreen />
      </ThemeProvider>
    </>
  );
}

export default App;
