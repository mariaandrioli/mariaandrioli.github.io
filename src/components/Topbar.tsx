import {
  Box,
  Button,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import Grid from "@mui/system/Unstable_Grid";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

const headingFont = createTheme({
  typography: {
    fontFamily: "Young Serif, serif",
  },
});

interface Props {
  LanguageToggle: ReactNode;
}

export const Topbar = ({ LanguageToggle }: Props) => {
  const { t } = useTranslation();

  const buttonCustomStyle = {
    borderRadius: "3rem",
    px: "1.5rem",
    backgroundColor: "#fff",
    color: "#563d80",
    letterSpacing: '0.005rem',
    "&:hover": {
      backgroundColor: "#bd98e0", // Change the hover background color
      color: "#fff",
    },
  };

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <Grid xs={2}>
          <ThemeProvider theme={headingFont}>
            <Typography
              variant="h6"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Maria Teresa Andrioli
            </Typography>
          </ThemeProvider>
        </Grid>
        <Grid xs={8}>
          <Box display={"flex"} gap={1} justifyContent={"center"}>
            <Button sx={buttonCustomStyle}>{t("menuHome")}</Button>
            <Button sx={buttonCustomStyle}>{t("menuAbout")}</Button>
            <Button sx={buttonCustomStyle}>{t("menuContact")}</Button>
          </Box>
        </Grid>
        <Grid xs={2}>
          <Box display={"flex"} justifyContent={"right"}>
            {LanguageToggle}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
