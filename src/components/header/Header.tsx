import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Typography,
  Container,
  Popper,
  Paper,
  ClickAwayListener,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { LanguageSwitch } from "./LanguageSwitch";
import { useNavigate } from "react-router-dom";
import darkTheme from "../../theme";

const Header = () => {
  const { t } = useTranslation("translation", { keyPrefix: "header" });
  const navigate = useNavigate();
  const [supportAnchor, setSupportAnchor] = useState<null | HTMLElement>(null);
  const [legalAnchor, setLegalAnchor] = useState<null | HTMLElement>(null);

  const supportItems = [
    {
      title: t("contact_us"),
      description: t("contact_us_description"),
      path: "/contact",
    },
    {
      title: t("about"),
      description: t("about_description"),
      path: "/about",
    },
    {
      title: t("how_it_works"),
      description: t("how_it_works_description"),
      path: "/how-it-works",
      isNew: true,
    },
  ];

  const legalItems = [
    {
      title: t("terms_of_service"),
      description: t("terms_of_service_description"),
      path: "/terms",
    },
    {
      title: t("privacy_policy"),
      description: t("privacy_policy_description"),
      path: "/privacy",
    },
    {
      title: t("aml_kyc"),
      description: t("aml_kyc_description"),
      path: "/cookies",
    },
  ];

  const handleMenuClick = (
      event: React.MouseEvent<HTMLElement>,
      type: "support" | "legal"
  ) => {
    if (type === "support") {
      setSupportAnchor(supportAnchor ? null : event.currentTarget);
    } else {
      setLegalAnchor(legalAnchor ? null : event.currentTarget);
    }
  };

  const handleClose = (type: "support" | "legal") => {
    if (type === "support") {
      setSupportAnchor(null);
    } else {
      setLegalAnchor(null);
    }
  };

  const handleItemClick = (path: string, type: "support" | "legal") => {
    navigate(path);
    handleClose(type);
  };

  return (
      <AppBar position="static" color="transparent" elevation={0}>
        <Container maxWidth="lg">
          <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                py: 2,
              }}
          >
            <Typography
                variant="h5"
                sx={{
                  color: "primary.main",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/")}
            >
              cryptoExchange
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button
                  onClick={(e) => handleMenuClick(e, "support")}
                  sx={{ color: "text.primary" }}
              >
                {t("support")}
              </Button>
              <Popper
                  open={Boolean(supportAnchor)}
                  anchorEl={supportAnchor}
                  placement="bottom-start"
                  sx={{ zIndex: 1300 }}
              >
                <ClickAwayListener onClickAway={() => handleClose("support")}>
                  <Paper
                      sx={{
                        width: 400,
                        mt: 1,
                        borderRadius: 1,
                        boxShadow: 3,
                        bgcolor: darkTheme.palette.background.default,
                      }}
                  >
                    <Box sx={{ p: 2 }}>
                      {supportItems.map((item) => (
                          <Box
                              key={item.title}
                              onClick={() => handleItemClick(item.path, "support")}
                              sx={{
                                p: 2,
                                cursor: "pointer",
                                "&:hover": { bgcolor: "action.hover" },
                                borderRadius: 1,
                                mb: 1,
                              }}
                          >
                            <Box
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  mb: 0.5,
                                }}
                            >
                              <Typography
                                  variant="subtitle1"
                                  sx={{ fontWeight: "medium" }}
                              >
                                {item.title}
                              </Typography>
                              {item.isNew && (
                                  <Typography
                                      variant="caption"
                                      sx={{
                                        ml: 1,
                                        px: 1,
                                        py: 0.5,
                                        bgcolor: "warning.main",
                                        borderRadius: 1,
                                        color: "warning.contrastText",
                                      }}
                                  >
                                    New
                                  </Typography>
                              )}
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </Box>
                      ))}
                    </Box>
                  </Paper>
                </ClickAwayListener>
              </Popper>

              <Button
                  onClick={(e) => handleMenuClick(e, "legal")}
                  sx={{ color: "text.primary" }}
              >
                {t("legal")}
              </Button>
              <Popper
                  open={Boolean(legalAnchor)}
                  anchorEl={legalAnchor}
                  placement="bottom-start"
                  sx={{ zIndex: 1300 }}
              >
                <ClickAwayListener onClickAway={() => handleClose("legal")}>
                  <Paper
                      sx={{
                        width: 400,
                        mt: 1,
                        bgcolor: darkTheme.palette.background.default,
                        borderRadius: 1,
                        boxShadow: 3,
                      }}
                  >
                    <Box sx={{ p: 2 }}>
                      {legalItems.map((item) => (
                          <Box
                              key={item.title}
                              onClick={() => handleItemClick(item.path, "legal")}
                              sx={{
                                p: 2,
                                cursor: "pointer",
                                "&:hover": { bgcolor: "action.hover" },
                                borderRadius: 1,
                                mb: 1,
                              }}
                          >
                            <Typography
                                variant="subtitle1"
                                sx={{ fontWeight: "medium" }}
                            >
                              {item.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.description}
                            </Typography>
                          </Box>
                      ))}
                    </Box>
                  </Paper>
                </ClickAwayListener>
              </Popper>

              <LanguageSwitch />
              <Button variant="contained" color="primary">
                {t("connect_wallet")}
              </Button>
            </Box>
          </Box>
        </Container>
      </AppBar>
  );
};

export default Header;
