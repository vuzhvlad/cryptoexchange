import { useCallback, useState } from "react";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import i18n from "../../i18n";
import { Language } from "@mui/icons-material";
import darkTheme from "../../theme";

interface Languages {
  name: string;
  language: "en" | "ru";
}

const languages: Languages[] = [
  {
    name: "English",
    language: "en",
  },
  {
    name: "Русский",
    language: "ru",
  },
];

const LanguageSwitch = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpenLanguageMenu = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseLanguageMenu = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
    handleCloseLanguageMenu();
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignSelf: "center",
        }}
      >
        <Button
          size="small"
          sx={{ minWidth: "unset" }}
          onClick={handleOpenLanguageMenu}
        >
          <Language />
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseLanguageMenu}
          sx={{ mt: 1, ml: -5 }}
        >
          {languages.map((lng) => (
            <MenuItem
              key={lng.language}
              onClick={() => handleLanguageChange(lng.language)}
              sx={{
                borderLeft: lng.language === i18n.language ? 1.5 : 0,
                borderLeftColor:
                  lng.language === i18n.language
                    ? darkTheme.palette.primary.main
                    : "inherit",
              }}
            >
              <Box display="flex" alignItems="center" minWidth={110}>
                <Typography>{lng.name}</Typography>
              </Box>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};

export { LanguageSwitch };
