import { LoadingSpinner } from "@/components";
import {
  AlignSpinner,
  Autocomplete,
  SearchIcon,
  Container,
  OptionsCard,
  OptionsCardContainer,
} from "./style";
import { useNavigate } from "react-router-dom";

interface AutoCompleteProps {
  data: any;
  loading?: boolean;
  setCity: React.Dispatch<React.SetStateAction<string>>;
}

function AutoComplete({ setCity, data, loading = false }: AutoCompleteProps) {
  const navigate = useNavigate();
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
            <SearchIcon onClick={() => navigate("/santa cruz")} />
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
