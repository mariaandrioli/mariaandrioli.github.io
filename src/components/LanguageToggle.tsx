import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import ReactCountryFlag from "react-country-flag";

interface Props {
  language: string;
  handleToggleLanguage: (event: React.MouseEvent<HTMLElement>) => void;
}

export const LanguageToggle = ({ language, handleToggleLanguage }: Props) => {
  return (
    <ToggleButtonGroup
      size="small"
      value={language}
      exclusive
      onChange={handleToggleLanguage}
      aria-label="language toggle"
    >
      <ToggleButton value={"en"}>
        <ReactCountryFlag countryCode="US" svg />
      </ToggleButton>
      <ToggleButton value={"pt_br"}>
        <ReactCountryFlag countryCode="BR" svg />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};
