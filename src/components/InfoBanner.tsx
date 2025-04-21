import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import { TrendingUp, Zap, ShieldCheck } from "lucide-react";
import CryptoConverter from "./convertor/Convertor";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#f7931a",
      light: "#ffa540",
      dark: "#c76e00",
    },
    background: {
      default: "#0a0e17",
      paper: "rgb(22 26 35)",
    },
    text: {
      primary: "#E1E1E1",
      secondary: "#B0B0B0",
    },
  },
  typography: {
    h1: {
      fontSize: "3.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        },
      },
    },
  },
});

function FeatureCard({
                       icon,
                       title,
                       description,
                     }: {
  icon: JSX.Element;
  title: string;
  description: string;
}) {
  return (
      <Paper
          elevation={0}
          sx={{
            p: 4,
            height: "100%",
            borderRadius: 3,
            transition: "transform 0.2s, box-shadow 0.2s",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 30px rgba(255, 255, 255, 0.08)",
            },
            backgroundColor: darkTheme.palette.background.paper,
          }}
      >
        <Box sx={{ display: "flex", alignItems: "flex-start" }}>
          <Box
              sx={{
                p: 1.5,
                borderRadius: 2,
                backgroundColor: darkTheme.palette.primary.light,
                mr: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
          >
            {icon}
          </Box>
          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              {title}
            </Typography>
            <Typography
                variant="body2"
                color="text.secondary"
                sx={{ lineHeight: 1.7 }}
            >
              {description}
            </Typography>
          </Box>
        </Box>
      </Paper>
  );
}

function InfoBanner() {
  const [fromCurrency, setFromCurrency] = useState<string>("USDT");
  const [toCurrency, setToCurrency] = useState<string>("BTC");

  const { t } = useTranslation(); // Инициализация useTranslation

  const handleSpecialOfferInput = () => {
    setToCurrency("USDT");
    setFromCurrency("ETH");
  };

  return (
      <ThemeProvider theme={darkTheme}>
        <Box
            sx={{
              minHeight: "100vh",
              bgcolor: "background.default",
              pb: { xs: 22, md: 32 },
            }}
        >
          <div className="mt-o  mb-20">
            <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-4">
              <div className="max-w-7xl mx-auto flex items-center justify-between px-4">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="text-white" size={24} />
                  <p className="text-white font-bold">
                    {t("specialOffer.title")}
                  </p>
                </div>
                <button
                    className="bg-white text-orange-500 px-4 py-1 rounded-full text-sm font-semibold hover:bg-opacity-90 transition"
                    onClick={handleSpecialOfferInput}
                >
                  {t("specialOffer.buttonText")}
                </button>
              </div>
            </div>
          </div>

          <Container maxWidth="lg">
            <Grid container spacing={8} alignItems="center">
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: { xs: 4, md: 8 } }}>
                  <Typography
                      variant="h1"
                      gutterBottom
                      sx={{
                        color: "primary.main",
                        mb: 3,
                      }}
                  >
                    {t("banner.heading")}
                  </Typography>
                  <Typography
                      variant="h6"
                      sx={{
                        color: "text.secondary",
                        fontWeight: "normal",
                        mb: 6,
                        lineHeight: 1.8,
                      }}
                  >
                    {t("banner.subHeading")}
                  </Typography>
                </Box>

                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <FeatureCard
                        icon={<TrendingUp size={32} style={{ stroke: "white" }} />}
                        title={t("features.marketRates.title")}
                        description={t("features.marketRates.description")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FeatureCard
                        icon={<Zap size={32} style={{ color: "white" }} />}
                        title={t("features.instantExchange.title")}
                        description={t("features.instantExchange.description")}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FeatureCard
                        icon={<ShieldCheck size={32} style={{ color: "white" }} />}
                        title={t("features.securePayments.title")}
                        description={t("features.securePayments.description")}
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} md={6}>
                <Box
                    sx={{
                      position: "relative",
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        top: -40,
                        right: -40,
                        bottom: 40,
                        left: 40,
                        background:
                            "linear-gradient(135deg, rgba(255, 147, 26, 0.1), rgba(255, 147, 26, 0))",
                        borderRadius: 4,
                        zIndex: 0,
                      },
                    }}
                >
                  <Paper
                      elevation={0}
                      sx={{
                        position: "relative",
                        zIndex: 1,
                        p: 4,
                        borderRadius: 4,
                        backgroundColor: "background.paper",
                      }}
                  >
                    <CryptoConverter
                        fromCurrency={fromCurrency}
                        toCurrency={toCurrency}
                        setFromCurrency={setFromCurrency}
                        setToCurrency={setToCurrency}
                    />
                  </Paper>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
  );
}

export default InfoBanner;
