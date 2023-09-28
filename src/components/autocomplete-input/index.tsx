import { LoadingSpinner } from "@/components";
import {
  AlignSpinner,
  Autocomplete,
  SearchIcon,
  Container,
  OptionsCard,
  OptionsCardContainer,
} from "./style";

interface AutoCompleteProps {
  data: any;
  loading?: boolean;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

function AutoComplete({ setCity, data, loading = false }: AutoCompleteProps) {
  return (
    <Container>
      <div className="field-icon-alignment">
        <Autocomplete
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCity(event.target.value)
          }
        />
        <AlignSpinner>
          {loading ? (
            <LoadingSpinner />
          ) : (
            <SearchIcon
              onClick={() => window.location.href = "/santa cruz"}
            />
          )}
        </AlignSpinner>
      </div>
      {data && (
        <OptionsCardContainer>
          {data.map((item: any) => (
            <OptionsCard key={item.city}>
              <p>{`${item.city}, ${item.uf} - ${item.country}`}</p>
            </OptionsCard>
          ))}
        </OptionsCardContainer>
      )}
    </Container>
  );
}

export default AutoComplete;
