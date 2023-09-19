import { LoadingSpinner } from "@/components";
import {
  AlignSpinner,
  Autocomplete,
  Container,
  OptionsCard,
  OptionsCardContainer,
} from "./style";

interface AutoCompleteProps {
  loading?: boolean;
}

function AutoComplete({ loading }: AutoCompleteProps) {
  return (
    <>
      <Container>
        <Autocomplete />
        {loading && (
          <AlignSpinner>
            <LoadingSpinner />
          </AlignSpinner>
        )}
      </Container>
      <OptionsCardContainer>
        <OptionsCard>
          <p>Porto Alegre, RS - Brasil</p>
        </OptionsCard>
        <OptionsCard>
          <p>Porto Alegre, RS - Brasil</p>
        </OptionsCard>
        <OptionsCard>
          <p>Porto Alegre, RS - Brasil</p>
        </OptionsCard>
      </OptionsCardContainer>
    </>
  );
}

export default AutoComplete;
