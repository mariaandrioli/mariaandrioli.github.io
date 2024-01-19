import React from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import { Hero } from "./components/Hero";
import { LanguageToggle } from "./components/LanguageToggle";
import { Topbar } from "./components/Topbar";
import { CssBaseline, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material";

const darkTheme = createTheme({
  typography: {
    fontFamily: "Source Sans 3",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontStyle: 'medium',
          textTransform: "capitalize",
        },
      },
    },
  },
});

function App() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = React.useState<string>("en");

  const handleToggleLanguage = (
    event: React.MouseEvent<HTMLElement>,
    value: string
  ) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Topbar
        LanguageToggle={
          <LanguageToggle
            language={language}
            handleToggleLanguage={handleToggleLanguage}
          />
        }
      />
      <Hero />
    </ThemeProvider>
  );
}

export default App;
