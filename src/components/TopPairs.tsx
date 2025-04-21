import {
  Box,
  Typography,
  Tabs,
  Tab,
  Card,
  CardContent,
  styled,
} from "@mui/material";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const StyledTab = styled(Tab)({
  color: "#fff",
  "&.Mui-selected": {
    color: "#F7931A",
    background: "#2A2419",
    borderRadius: "20px",
    padding: "0",
  },
  minWidth: "200px",
  borderRadius: "8px",
  textTransform: "none",
  fontSize: "16px",
});

const CryptoCard = styled(Card)({
  background: "rgba(255, 255, 255, 0.05)",
  borderRadius: "12px",
  cursor: "pointer",
  transition: "all 0.3s ease",
  border: "1px solid transparent",
  flex: "1 1 0",
  minWidth: "220px",
  maxWidth: "220px",
  "&:hover": {
    border: "1px solid #f7931a",
    background: "rgba(255, 255, 255, 0.1)",
  },
});

const pairs = [
  {
    from: "BTC",
    to: "USDC",
    fromName: "Bitcoin",
    toName: "USD Coin",
    fromImage: "src/publick/images/cryptos/bitcoin-btc-logo.png",
    toImage: "src/publick/images/cryptos/usd-coin-usdc-logo.png",
  },
  {
    from: "ETH",
    to: "TRX",
    fromName: "Ethereum",
    toName: "TRON",
    fromImage: "src/publick/images/cryptos/ethereum-eth-logo.png",
    toImage: "src/publick/images/cryptos/tron-trx-logo.png",
  },
  {
    from: "USDT",
    to: "ADA",
    fromName: "Tether (ERC20)",
    toName: "Cardano",
    fromImage: "src/publick/images/cryptos/tether-usdt-logo.png",
    toImage: "src/publick/images/cryptos/cardano-ada-logo.png",
  },
  {
    from: "XRP",
    to: "ZIL",
    fromName: "Ripple",
    toName: "ZIL",
    fromImage: "src/publick/images/cryptos/xrp-xrp-logo.png",
    toImage: "src/publick/images/cryptos/zilliqa-zil-logo.png",
  },
  {
    from: "LTC",
    to: "DOT",
    fromName: "Litecoin",
    toName: "Polkadot",
    fromImage: "src/publick/images/cryptos/litecoin-ltc-logo.png",
    toImage: "src/publick/images/cryptos/polkadot-new-dot-logo.png",
  },
];

const TopPairs = () => {
  const { t } = useTranslation("translation", { keyPrefix: "top_pairs" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Box
      sx={{

        display: "flex",
        flexDirection: "column",
        alignItems: "center",

        py: 0,
        px: 4,
          pb: 16,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: "#fff",
          textAlign: "center",
          mb: 1,
          fontSize: { xs: "2rem", md: "3.75rem" },
        }}
      >
        {t("title")}
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{
          color: "#888",
          mb: 6,
          textAlign: "center",
        }}
      >
        {t("subtitle")}
      </Typography>

      <Box
        sx={{
          mb: 4,
          width: "100%",
          maxWidth: 1200,
          "& .MuiTabs-root": {
            minHeight: "48px",
          },
        }}
      >
        <Tabs
          value={0}
          centered
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
            padding: "4px",
          }}
        >
          <StyledTab
            label={t("convertTab")}
            onClick={scrollToTop}
            sx={{
              background: "#2A2419",
              color: "#F7931A",
              borderRadius: "20px",
              "&:hover": {
                background: "#2A2419",
              },
            }}
          />
        </Tabs>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "16px",
          width: "100%",
          maxWidth: 1200,
          justifyContent: "space-between",
          flexWrap: "nowrap",
          overflowX: "auto",
          pb: 2,
          "&::-webkit-scrollbar": {
            height: "8px",
          },
          "&::-webkit-scrollbar-track": {
            background: "rgba(255, 255, 255, 0.05)",
            borderRadius: "4px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "rgba(255, 255, 255, 0.1)",
            borderRadius: "4px",
            "&:hover": {
              background: "rgba(255, 255, 255, 0.2)",
            },
          },
        }}
      >
        {pairs.map((pair, index) => (
          <CryptoCard key={index} onClick={scrollToTop}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                color: "#fff",
                p: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <img
                    src={pair.fromImage}
                    alt={pair.from}
                    style={{ width: 24, height: 24 }}
                  />
                  <img
                    src={pair.toImage}
                    alt={pair.to}
                    style={{ width: 24, height: 24 }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h6" component="div">
                    {pair.from} / {pair.to}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="rgba(255,255,255,0.7)"
                    sx={{ fontSize: "0.75rem" }}
                  >
                    {pair.fromName} / {pair.toName}
                  </Typography>
                </Box>
                <ArrowRight color="#f7931a" size={20} />
              </Box>
            </CardContent>
          </CryptoCard>
        ))}
      </Box>
    </Box>
  );
};

export default TopPairs;
