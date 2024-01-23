import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const UnderConstruction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundImage: "linear-gradient(to right, #8d90e2, #bd98e0)",
        width: "92.5vw",
        marginTop: "3rem",
        padding: "3rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "10px 10px rgba(0,0,0,0.15)",
        alignItems: "center",
        color: 'white'
      }}
    >
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography variant="h5" fontWeight={800}>
          {t("underConstruction")}
        </Typography>
        <ConstructionOutlinedIcon />
      </Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        <Typography
          sx={{
            fontSize: "lg",
            color: "gray.500",
            maxWidth: "54ch",
          }}
        >
          {"In the meantime, check out my social links! 😉"}
        </Typography>
      </Stack>
    </Box>
  );
};
