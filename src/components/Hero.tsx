import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { UnderConstruction } from "./UnderConstruction";

const headingFont = createTheme({
  typography: {
    fontFamily: "Young Serif, serif",
  },
});

export const Hero: React.FC = () => {
  const { t } = useTranslation();
  const title = t("heroTitle1");
  const name = t("heroTitle2");
  const subtitle = t("heroSubtitle");

  return (
    <Container maxWidth={"lg"}>
      <Box
        sx={{
          height: "60vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
          my: 6,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: "2rem",
              sm: "3rem",
              md: "4rem",
              lg: "5rem",
              xl: "6rem",
            },
            fontWeight: 800,
          }}
        >
          {title}
        </Typography>
        <ThemeProvider theme={headingFont}>
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "4rem",
                lg: "5rem",
                xl: "6rem",
              },
              fontWeight: 800,
              lineHeight: 0.8,
              marginBottom: 3,
            }}
          >
            {name}
          </Typography>
        </ThemeProvider>
        <Typography
          sx={{
            fontSize: "lg",
            color: "gray.500",
            maxWidth: "54ch",
          }}
        >
          {subtitle}
        </Typography>
        <UnderConstruction />
      </Box>
    </Container>
  );
};
