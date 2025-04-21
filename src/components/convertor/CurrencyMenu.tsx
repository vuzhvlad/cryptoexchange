import { Close, Search } from "@mui/icons-material";
import {
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { Crypto } from "./Convertor";

interface CurrencyMenuProps {
  anchorEl: null | HTMLElement;
  onClose: (value: React.SetStateAction<null>) => void;
  onSelect: (currency: any) => void;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  cryptos: Crypto[];
}

const CurrencyMenu = ({
                        anchorEl,
                        onClose,
                        onSelect,
                        cryptos,
                        searchTerm,
                        setSearchTerm,
                      }: CurrencyMenuProps) => {
  const { t } = useTranslation("translation", { keyPrefix: "currency_menu" });

  const filteredCryptos = cryptos?.filter((crypto) => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return (
        crypto?.name?.toLowerCase() !== "first digital usd" &&
        (crypto?.symbol?.toLowerCase().includes(lowerSearchTerm) ||
            crypto?.name?.toLowerCase().includes(lowerSearchTerm))
    );
  });

  const getExtraInfo = (crypto: Crypto) => {
    if (crypto.symbol === 'SOL' || crypto.symbol === 'ETH') {
      return (
          <Typography
              variant="caption"
              sx={{
                color: '#f97316',
                ml: 1,
                fontWeight: 700,
                fontSize: '0.75rem'
              }}
          >
            +3% on USDT/USDC
          </Typography>
      );
    }
    return null;
  };

  return (
      <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={onClose}
          PaperProps={{
            sx: {
              width: 300,
              maxHeight: 400,
              color: "white",
              background: "rgb(22 26 35)",
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                bgcolor: "#2A2A2A",
              },
              "&::-webkit-scrollbar-thumb": {
                bgcolor: "#f97316",
                borderRadius: "8px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                bgcolor: "#f97316",
              },
            },
          }}
      >
        <Box sx={{ p: 2, backgroundColor: "rgb(22, 26, 35)" }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            {t("selectCurrency")}
          </Typography>
          <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: 0.3,
                borderColor: "#2d2d2d",
                borderRadius: "9px",
                padding: 1,
                marginBottom: 2,
              }}
          >
            <Search sx={{ color: "gray", mr: 1 }} />
            <InputBase
                placeholder={t("search")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                sx={{ color: "white", flex: 1 }}
            />
            {searchTerm && (
                <IconButton
                    size="small"
                    onClick={() => setSearchTerm("")}
                    sx={{ color: "gray" }}
                >
                  <Close />
                </IconButton>
            )}
          </Box>
          <Stack spacing={1}>
            {filteredCryptos.map((crypto, index) => (
                <MenuItem
                    key={`${crypto?.symbol}-${index}`}
                    onClick={() => onSelect(crypto)}
                    sx={{
                      borderRadius: 1,
                      "&:hover": { bgcolor: "#2A2A2A" },
                      py: 1.5,
                    }}
                >
                  <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      width="100%"
                  >
                    <Box
                        component="img"
                        src={
                          crypto.symbol === "USDT" || "USDC"
                              ? `src/publick/images/cryptos/${crypto?.slug?.toLowerCase()}-${crypto?.symbol?.toLowerCase()}-logo.png`
                              : `src/publick/images/cryptos/${crypto?.name?.toLowerCase()}-${crypto?.symbol?.toLowerCase()}-logo.png`
                        }
                        alt={crypto?.symbol}
                        sx={{ width: 24, height: 24 }}
                    />
                    <Box>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="body1">{crypto?.symbol}</Typography>
                        {getExtraInfo(crypto)}
                      </Box>
                      <Typography variant="caption" color="gray">
                        {crypto?.name}
                      </Typography>
                    </Box>
                  </Stack>
                </MenuItem>
            ))}
          </Stack>
        </Box>
      </Menu>
  );
};

export { CurrencyMenu };