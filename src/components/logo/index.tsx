import { Container, Cloud, Name, CenteredContainer } from "./style";
export default function Logo() {
  return (
    <CenteredContainer>
      <Container>
        <Cloud />
        <Name>TypeWeather</Name>
      </Container>
    </CenteredContainer>
  );
}
