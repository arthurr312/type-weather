import { LoadingSpinner } from "@/components";
import {
  AlignSpinner,
  Autocomplete,
  Container,
  OptionsCard,
  OptionsCardContainer,
} from "./style";
import { CaretCircleRight } from "@phosphor-icons/react";

interface AutoCompleteProps {
  data: any;
  loading?: boolean;
}

function AutoComplete({ data, loading = false }: AutoCompleteProps) {
  return (
    <>
      <Container>
        <div className="field-icon-alignment">
          <Autocomplete />
          <AlignSpinner>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <CaretCircleRight
                color="gray"
                style={{ position: "absolute", opacity: "50%" }}
                size={32}
              />
            )}
          </AlignSpinner>
        </div>
        {data && (
          <OptionsCardContainer>
            {data.map((item: any) => (
              <OptionsCard>
                <p>{`${item.city}, ${item.uf} - ${item.country}`}</p>
              </OptionsCard>
            ))}
          </OptionsCardContainer>
        )}
      </Container>
    </>
  );
}

export default AutoComplete;
