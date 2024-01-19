import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import Face3OutlinedIcon from "@mui/icons-material/Face3Outlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Button,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Typography,
  createTheme,
  useMediaQuery,
} from "@mui/material";
import { ReactNode, useState } from "react";
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

  const [openDrawer, toggleDrawer] = useState(false);

  const isMobile = useMediaQuery("(max-width:600px)");

  const buttonCustomStyle = {
    borderRadius: "3rem",
    px: "1.5rem",
    backgroundColor: "#fff",
    color: "#563d80",
    letterSpacing: "0.005rem",
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
        {!isMobile && (
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
        )}

        <Hidden smDown>
          <Grid xs={8}>
            <Box display={"flex"} gap={1} justifyContent={"center"}>
              <Button sx={buttonCustomStyle}>{t("menuHome")}</Button>
              <Button sx={buttonCustomStyle}>{t("menuAbout")}</Button>
              <Button sx={buttonCustomStyle}>{t("menuContact")}</Button>
            </Box>
          </Grid>
        </Hidden>

        <Hidden smUp>
          <IconButton onClick={() => toggleDrawer(!openDrawer)}>
            <MenuIcon />
          </IconButton>
        </Hidden>

        <Drawer
          anchor={"bottom"}
          open={openDrawer}
          onClose={() => toggleDrawer(!openDrawer)}
        >
          <Box
            role="presentation"
            onClick={() => toggleDrawer(!openDrawer)}
            onKeyDown={() => toggleDrawer(!openDrawer)}
            component="div"
            sx={{
              width: "auto",
            }}
          >
            <List>
              <ListItem key={"home"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={t("menuHome")} />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem key={"about"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Face3OutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={t("menuAbout")} />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem key={"contact"} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ContactPageOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary={t("menuContact")} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Grid xs={2}>
          <Box display={"flex"} justifyContent={"right"}>
            {LanguageToggle}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
