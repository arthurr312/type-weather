import { Container, H1, Span, Paragraph } from "./style";
function MainScreen() {
  return (
    <Container>
      <H1>
        Boas vindas ao <Span>TypeWeather</Span>
      </H1>
      <Paragraph>Escolha um local para ver a previsão do tempo</Paragraph>
    </Container>
  );
}

export default MainScreen;
