import { AutoComplete } from "@/components";
import { Container, H1, Span, Paragraph } from "./style";
function MainScreen() {
  const data = [
    {
      city: "Santa Cruz",
      uf: "RN",
      country: "Brasil"
    },
    {
      city: "Natal",
      uf: "RN",
      country: "Brasil"
    },
    {
      city: "Tangará",
      uf: "RN",
      country: "Brasil"
    }
  ]
  return (
    <Container>
      <H1>
        Boas vindas ao <Span>TypeWeather</Span>
      </H1>
      <Paragraph>Escolha um local para ver a previsão do tempo</Paragraph>
      <AutoComplete data={data} />
    </Container>
  );
}

export default MainScreen;
