import { AutoComplete } from "@/components";
import { Container, H1, Span, Paragraph } from "./style";

interface MainScreenProps {
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

function MainScreen({ setCity }: MainScreenProps) {
  const data = [
    {
      city: "Santa Cruz",
      uf: "RN",
      country: "Brasil",
    },
    {
      city: "Natal",
      uf: "RN",
      country: "Brasil",
    },
    {
      city: "Tangará",
      uf: "RN",
      country: "Brasil",
    },
  ];
  return (
    <Container>
      <div className="align-content">
        <H1>
          Boas vindas ao <Span>TypeWeather</Span>
        </H1>
        <Paragraph>Escolha um local para ver a previsão do tempo</Paragraph>
        <div className="autocomplete-container">
          <AutoComplete setCity={setCity} data={data} />
        </div>
      </div>
    </Container>
  );
}

export default MainScreen;
