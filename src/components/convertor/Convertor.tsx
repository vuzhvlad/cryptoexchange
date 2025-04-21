import React from 'react';
import {
    useState,
    useEffect,
    useCallback,
    Dispatch,
    SetStateAction,
} from "react";
import {
    Box,
    Button,
    Grid,
    InputAdornment,
    Paper,
    TextField,
    Typography,
    IconButton,
    Select,
    MenuItem,
    Tooltip,
} from "@mui/material";
import { SwapVert } from "@mui/icons-material";
import { CurrencyMenu } from "./CurrencyMenu";
import { styled } from "@mui/system";
import { useTranslation } from "react-i18next";
import { fetchTopCryptos } from "../../api/crypto";
import darkTheme from "../../theme";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, AlertCircle } from "lucide-react";
import { networks } from "./networks";
import { useNavigate } from "react-router-dom";

const StyledTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
        borderRadius: 8,
        backgroundColor: "#161a23",
        color: "white",
        "& fieldset": {
            borderColor: "#F7931A",
        },
        "&:hover fieldset": {
            borderColor: "#F7931A",
        },
        "&.Mui-focused fieldset": {
            borderColor: "#F7931A",
        },
    },
    "& input": {
        color: "white",
        fontSize: "1rem",
    },
    "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
        display: "none",
    },
    "& input[type=number]": {
        MozAppearance: "textfield",
    },
});

const BonusChip = styled(Box)({
    display: 'inline-flex',
    alignItems: 'center',
    padding: '4px 8px',
    borderRadius: '16px',
    backgroundColor: 'rgba(234, 179, 8, 0.1)',
    border: '1px solid rgba(234, 179, 8, 0.5)',
    color: '#eab308',
    gap: '4px',
    fontSize: '0.75rem',
    marginTop: '4px',
});

const BonusAmount = styled(Typography)({
    color: '#eab308',
    fontSize: '0.75rem',
    marginTop: '2px',
    marginLeft: '8px',
});

const MinimumAmountWarning = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 12px',
    borderRadius: '8px',
    backgroundColor: 'rgba(220, 38, 38, 0.1)',
    border: '1px solid rgba(220, 38, 38, 0.2)',
    color: '#ef4444',
    marginTop: '8px',
});

const totalSteps = 4;

export interface Crypto {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    num_market_pairs: number;
    date_added: string;
    tags: string[];
    max_supply: number | null;
    circulating_supply: number;
    total_supply: number;
    platform: {
        id: number;
        name: string;
        symbol: string;
        slug: string;
        token_address: string;
    } | null;
    cmc_rank: number;
    quote: {
        USD: {
            price: number;
            volume_24h: number;
            volume_change_24h: number;
            percent_change_1h: number;
            percent_change_24h: number;
            percent_change_7d: number;
            percent_change_30d: number;
            percent_change_60d: number;
            percent_change_90d: number;
            market_cap: number;
            market_cap_dominance: number;
            fully_diluted_market_cap: number;
        };
    };
}

interface CryptoConverterProps {
    fromCurrency: string;
    toCurrency: string;
    setFromCurrency: Dispatch<SetStateAction<string>>;
    setToCurrency: Dispatch<SetStateAction<string>>;
}

const CryptoConverter = ({
                             fromCurrency,
                             toCurrency,
                             setFromCurrency,
                             setToCurrency,
                         }: CryptoConverterProps) => {
    const getNetworksForCrypto = (crypto: string): string[] => {
        return networks[crypto]
            ? Object.keys(networks[crypto]).map((network) =>
                network.replace(/_/g, " ")
            )
            : [];
    };

    const [fromAmount, setFromAmount] = useState("");
    const [toAmount, setToAmount] = useState("");
    const [bonusAmount, setBonusAmount] = useState("0");
    const [searchTerm, setSearchTerm] = useState("");
    const [anchorFrom, setAnchorFrom] = useState(null);
    const [anchorTo, setAnchorTo] = useState(null);
    const [cryptos, setCryptos] = useState<Crypto[]>([]);
    const [activeStep, setActiveStep] = useState(1);
    const [networkReceive, setNetworkReceive] = useState<string>(
        Object.keys(networks[fromCurrency])[0]
    );
    const [networkMerchant, setNetworkMerchant] = useState<string>(
        Object.keys(networks[toCurrency])[0]
    );
    const [receivingAddress, setReceivingAddress] = useState<string>("");

    const { t } = useTranslation("translation", { keyPrefix: "convertor" });

    const hasBonus = (fromCurrency === "ETH" || fromCurrency === "SOL") &&
        (toCurrency === "USDT" || toCurrency === "USDC");

    const isAmountBelowMinimum = () => {
        if (!fromAmount || !fromCurrency || !toCurrency) return false;

        const fromValue = parseFloat(fromAmount);
        if (isNaN(fromValue)) return false;

        const fromCrypto = cryptos.find(crypto => crypto.symbol === fromCurrency);
        const toCrypto = cryptos.find(crypto => crypto.symbol === toCurrency);

        if (!fromCrypto || !toCrypto) return false;

        // Calculate the USD value of the amount being converted
        const usdValue = fromValue * fromCrypto.quote.USD.price;

        // If converting to USDC/USDT, check if it's below 50
        if (toCurrency === "USDC" || toCurrency === "USDT") {
            return usdValue < 50;
        }

        // For other currencies, convert their minimum amounts to USD for comparison
        const minUsdValue = 50; // We want all conversions to be worth at least 50 USD
        return usdValue < minUsdValue;
    };

    const getMinimumAmountMessage = (): string => {
        if (!fromCurrency || !toCurrency || cryptos.length === 0) return '';

        const fromCrypto = cryptos.find(crypto => crypto.symbol === fromCurrency);
        if (!fromCrypto) return '';

        // Calculate how much of the fromCurrency is needed to equal 50 USD
        const minUsdValue = 50;
        const minFromAmount = minUsdValue / fromCrypto.quote.USD.price;

        return `Minimum amount: ${minFromAmount.toFixed(6)} ${fromCurrency} (≈ $50)`;
    };

    useEffect(() => {
        fetchTopCryptos()
            .then((response) => {
                console.log("Fetched Cryptos:", response.data);
                const filteredCryptos = response.data.filter((crypto: Crypto) =>
                    [
                        "BTC",
                        "SOL",
                        "ETH",
                        "USDT",
                        "XRP",
                        "BNB",
                        "USDC",
                        "DOGE",
                        "ADA",
                        "TRX",
                        "TON",
                        "LINK",
                        "XLM",
                        "AVAX",
                        "SHIB",
                        "SUI",
                        "LTC",
                        "UNI",
                        "APT",
                        "NEAR",
                        "PEPE",
                        "Ondo",
                        "ARB",
                        "OP",
                    ].includes(crypto.symbol)
                );
                setCryptos(filteredCryptos);
            })
            .catch((err) => {
                console.error("Error:", err);
            });
    }, []);

    useEffect(() => {
        localStorage.setItem("fromCurrency", fromCurrency);
        localStorage.setItem("toCurrency", toCurrency);
    }, [fromCurrency, toCurrency]);

    useEffect(() => {
        if (fromCurrency && toCurrency && cryptos.length > 0) {
            const fromCrypto = cryptos.find(
                (crypto) => crypto.symbol === fromCurrency
            );
            const toCrypto = cryptos.find((crypto) => crypto.symbol === toCurrency);

            if (fromCrypto && toCrypto && fromAmount !== "") {
                const parsedAmount = parseFloat(fromAmount);
                if (!isNaN(parsedAmount)) {
                    let conversionRate = fromCrypto.quote.USD.price / toCrypto.quote.USD.price;
                    let baseAmount = parsedAmount * conversionRate;

                    if (toCurrency === "USDT" || toCurrency === "USDC") {
                        if (baseAmount < 50) {
                            setToAmount(baseAmount.toFixed(6));
                            setBonusAmount("0");
                            return;
                        }

                        if (fromCurrency === "ETH" || fromCurrency === "SOL") {
                            const bonusMultiplier = 1.05;
                            const withBonus = baseAmount * bonusMultiplier;
                            const bonusValue = withBonus - baseAmount;
                            setBonusAmount(bonusValue.toFixed(6));
                            setToAmount(withBonus.toFixed(6));
                        } else {
                            setBonusAmount("0");
                            setToAmount(baseAmount.toFixed(6));
                        }
                    } else {
                        setBonusAmount("0");
                        setToAmount(baseAmount.toFixed(6));
                    }
                } else {
                    setBonusAmount("0");
                    setToAmount("0");
                }
            } else {
                setBonusAmount("0");
                setToAmount("0");
            }
        }
    }, [fromCurrency, toCurrency, cryptos, fromAmount]);

    const handleAmountChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const value = e.target.value;
            setFromAmount(value);
        },
        []
    );

    const handleOpenMenu = useCallback(
        (
            event: React.MouseEvent<HTMLElement>,
            setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>
        ) => {
            setAnchor(event.currentTarget);
            setSearchTerm("");
        },
        []
    );

    const handleSelectCurrency = useCallback(
        (
            currency: { symbol: string },
            setCurrency: React.Dispatch<React.SetStateAction<string>>,
            setAnchor: React.Dispatch<React.SetStateAction<null | HTMLElement>>
        ) => {
            setCurrency(currency.symbol);
            setAnchor(null);
        },
        []
    );

    const handleSwapCurrencies = useCallback(() => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setFromAmount(toAmount);
        setToAmount(fromAmount);
    }, [
        setFromCurrency,
        toCurrency,
        setToCurrency,
        fromCurrency,
        toAmount,
        fromAmount,
    ]);

    const handleNext = () => {
        if (activeStep < totalSteps - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    const getCurrencyLogoUrl = (currencySymbol: string) => {
        const crypto = cryptos.find((crypto) => crypto.symbol === currencySymbol);
        if (crypto?.symbol === "USDT" || "USDC") {
            return `src/publick/images/cryptos/${crypto?.slug?.toLowerCase()}-${crypto?.symbol?.toLowerCase()}-logo.png`;
        }
        return `src/publick/images/cryptos/${crypto.name?.toLowerCase()}-${crypto.symbol?.toLowerCase()}-logo.png`;
    };

    const matchedToCrypto = cryptos.find(
        (crypto) => crypto.symbol === toCurrency
    );
    const navigate = useNavigate();
    const handleNextThankYouPage = () => {
        navigate("/thank-you", {
            state: {
                fromCurrency,
                toCurrency,
                fromAmount,
                toAmount,
                networkReceive,
                receivingAddress,
                networkMerchant,
                merchantAddress:
                    networks[fromCurrency][networkMerchant.replace(/\s+/g, "_")],
            },
        });
    };

    return (
        <Grid
            item
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignSelf: "flex-end",
            }}
        >
            <Paper
                sx={{
                    p: 3,
                    borderRadius: 2,
                    backgroundImage: "none",
                    color: "white",
                    marginBottom: 4,
                    border: 0.2,
                    borderColor: "#2d2d2d",

                }}
            >
                <Box display={"flex"} flexDirection={"column"}>
                    <Typography variant="h6" sx={{ mb: 2 }}>
                        {t("walletDetails")}
                    </Typography>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "4px",
                            backgroundColor: "#2d2d2d",
                            borderRadius: "9999px",
                            mt: 4,
                            marginBottom: 3,
                            marginTop: -0.5,
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                height: "4px",
                                width: `${(activeStep / (totalSteps - 1)) * 100}%`,
                                backgroundImage: "linear-gradient(to right, #eab308, #f97316)",
                                borderRadius: "9999px",
                                transition: "all 0.3s ease",
                            }}
                        />
                    </Box>
                </Box>
                {activeStep === 1 && (
                    <>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                <Box sx={{ mb: 2 }}>
                                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                        {t("youPay")}
                                    </Typography>
                                    <StyledTextField
                                        fullWidth
                                        type="number"
                                        value={fromAmount}
                                        onChange={handleAmountChange}
                                        placeholder="0.000"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            fontWeight: "bold",
                                                            minWidth: 120,
                                                            border: 0.3,
                                                            borderColor: "rgb(59,59,59)",
                                                            backgroundColor:
                                                            darkTheme.palette.background.paper,
                                                            color: "white",
                                                            "&:hover": {
                                                                backgroundColor: darkTheme.palette.action.hover,
                                                            },
                                                        }}
                                                        onClick={(e) => handleOpenMenu(e, setAnchorFrom)}
                                                    >
                                                        <Box display={"flex"} gap={1}>
                                                            <Box
                                                                component="img"
                                                                src={getCurrencyLogoUrl(fromCurrency)}
                                                                alt={fromCurrency}
                                                                sx={{ width: 24, height: 24 }}
                                                            />
                                                            {fromCurrency}
                                                        </Box>
                                                    </Button>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Box>
                                <Box sx={{ display: "flex", justifyContent: "center" }}>
                                    <IconButton
                                        onClick={handleSwapCurrencies}
                                        sx={{ borderRadius: "50%", color: "white" }}
                                    >
                                        <SwapVert />
                                    </IconButton>
                                </Box>
                                <Box sx={{ mb: 4 }}>
                                    <Typography variant="subtitle2" sx={{ mb: 1 }}>
                                        {t("youReceive")}
                                    </Typography>
                                    <StyledTextField
                                        fullWidth
                                        type="number"
                                        value={toAmount}
                                        disabled
                                        placeholder="0.000"
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <Button
                                                        variant="contained"
                                                        sx={{
                                                            fontWeight: "bold",
                                                            minWidth: 120,
                                                            border: 0.3,
                                                            borderColor: "rgb(59,59,59)",
                                                            backgroundColor:
                                                            darkTheme.palette.background.paper,
                                                            color: "white",
                                                            "&:hover": {
                                                                backgroundColor: darkTheme.palette.action.hover,
                                                            },
                                                        }}
                                                        onClick={(e) => handleOpenMenu(e, setAnchorTo)}
                                                    >
                                                        <Box display={"flex"} gap={1}>
                                                            <Box
                                                                component="img"
                                                                src={getCurrencyLogoUrl(toCurrency)}
                                                                alt={fromCurrency}
                                                                sx={{ width: 24, height: 24 }}
                                                            />
                                                            {toCurrency}
                                                        </Box>
                                                    </Button>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                    {isAmountBelowMinimum() && fromAmount !== "" && (
                                        <MinimumAmountWarning>
                                            <AlertCircle size={16} />
                                            <Typography variant="caption">
                                                {getMinimumAmountMessage()}
                                            </Typography>
                                        </MinimumAmountWarning>
                                    )}
                                    {hasBonus && (
                                        <Box sx={{ mt: 2 }}>
                                            <Tooltip title="Get 5% more when converting ETH/SOL to USDT/USDC">
                                                <BonusChip>
                                                    <Sparkles size={14} />
                                                    +5% Bonus Applied
                                                </BonusChip>
                                            </Tooltip>
                                            <BonusAmount>
                                                You get +{parseFloat(bonusAmount) === 0 || isNaN(parseFloat(bonusAmount)) ? "0" : bonusAmount} {toCurrency} extra
                                            </BonusAmount>
                                        </Box>
                                    )}
                                </Box>
                                <Button
                                    sx={{
                                        fontWeight: "bold",
                                        backgroundImage:
                                            "linear-gradient(to right, #eab308, #f97316)",
                                        color: "black",
                                        "&:hover": {
                                            backgroundImage:
                                                "linear-gradient(to right, #ca8a04, #ea580c)",
                                        },
                                        "&:disabled": {
                                            opacity: 0.5,
                                            cursor: "not-allowed",
                                        },
                                    }}
                                    onClick={handleNext}
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    fullWidth
                                    disabled={!fromAmount || !toAmount || isAmountBelowMinimum()}
                                >
                                    {t("proceed")}
                                </Button>

                                <CurrencyMenu
                                    anchorEl={anchorFrom}
                                    onClose={() => setAnchorFrom(null)}
                                    onSelect={(crypto) =>
                                        handleSelectCurrency(crypto, setFromCurrency, setAnchorFrom)
                                    }
                                    cryptos={cryptos}
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                />
                                <CurrencyMenu
                                    anchorEl={anchorTo}
                                    onClose={() => setAnchorTo(null)}
                                    onSelect={(crypto) =>
                                        handleSelectCurrency(crypto, setToCurrency, setAnchorTo)
                                    }
                                    cryptos={cryptos}
                                    searchTerm={searchTerm}
                                    setSearchTerm={setSearchTerm}
                                />
                            </motion.div>
                        </AnimatePresence>
                    </>
                )}
                {activeStep === 2 && (
                    <>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}
                                    gap={1}
                                    marginBottom={2}
                                >
                                    <Typography>Choose Network</Typography>
                                    <Select
                                        fullWidth
                                        value={networkReceive}
                                        onChange={(e) => setNetworkReceive(e.target.value)}
                                        displayEmpty
                                        sx={{
                                            borderRadius: 1,
                                        }}
                                        size="medium"
                                    >
                                        {getNetworksForCrypto(toCurrency).map((network, i) => (
                                            <MenuItem key={i} value={network}>
                                                {network}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Box>
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}
                                    gap={1}
                                    marginBottom={10}
                                >
                                    <Typography>Receiving Address</Typography>
                                    <TextField
                                        size="medium"
                                        placeholder={`${matchedToCrypto?.name} address`}
                                        value={receivingAddress}
                                        onChange={(e) => setReceivingAddress(e.target.value)}
                                    ></TextField>
                                </Box>
                                <Box
                                    display={"flex"}
                                    flexDirection={"row"}
                                    justifyContent={"space-between"}
                                    alignSelf={"flex-end"}
                                >
                                    <Button
                                        sx={{
                                            fontWeight: "bold",
                                            minWidth: 100,
                                            backgroundImage:
                                                "linear-gradient(to right, #eab308, #f97316)",
                                            color: "black",
                                            "&:hover": {
                                                backgroundImage:
                                                    "linear-gradient(to right, #ca8a04, #ea580c)",
                                            },
                                        }}
                                        onClick={handleBack}
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        startIcon={<ChevronLeft />}
                                    >
                                        {t("back")}
                                    </Button>
                                    <Button
                                        sx={{
                                            fontWeight: "bold",
                                            minWidth: 100,
                                            backgroundImage:
                                                "linear-gradient(to right, #eab308, #f97316)",
                                            color: "black",
                                            "&:hover": {
                                                backgroundImage:
                                                    "linear-gradient(to right, #ca8a04, #ea580c)",
                                            },
                                        }}
                                        onClick={handleNext}
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        endIcon={<ChevronRight />}
                                        disabled={!networkReceive || !receivingAddress}
                                    >
                                        {t("next")}
                                    </Button>
                                </Box>
                            </motion.div>
                        </AnimatePresence>
                    </>
                )}
                {activeStep === 3 && (
                    <>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, x: 0 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            >
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}
                                    gap={1}
                                    marginBottom={2}
                                >
                                    <Typography>Choose Network</Typography>
                                    <Select
                                        fullWidth
                                        value={networkMerchant}
                                        onChange={(e) => setNetworkMerchant(e.target.value)}
                                        displayEmpty
                                        sx={{
                                            backgroundColor: "#161a23",
                                            color: "white",
                                            borderRadius: 1,
                                        }}
                                        size="medium"
                                    >
                                        {getNetworksForCrypto(fromCurrency).map((network, i) => (
                                            <MenuItem key={i} value={network}>
                                                {network}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </Box>
                                <Box
                                    display={"flex"}
                                    flexDirection={"column"}
                                    gap={1}
                                    marginBottom={10}
                                >
                                    <Typography>Merchant Address</Typography>
                                    <Typography>
                                        {
                                            networks[fromCurrency][
                                                networkMerchant.replace(/\s+/g, "_")
                                                ]
                                        }
                                    </Typography>
                                </Box>
                                <Box
                                    display={"flex"}
                                    flexDirection={"row"}
                                    justifyContent={"space-between"}
                                    alignSelf={"flex-end"}
                                >
                                    <Button
                                        sx={{
                                            fontWeight: "bold",
                                            minWidth: 100,
                                            backgroundImage:
                                                "linear-gradient(to right, #eab308, #f97316)",
                                            color: "black",
                                            "&:hover": {
                                                backgroundImage:
                                                    "linear-gradient(to right, #ca8a04, #ea580c)",
                                            },
                                        }}
                                        onClick={handleBack}
                                        variant="contained"
                                        color="primary"
                                        size="small"
                                        startIcon={<ChevronLeft />}
                                    >
                                        {t("back")}
                                    </Button>
                                    <Button
                                        sx={{
                                            fontWeight: "bold",
                                            minWidth: 100,
                                            backgroundImage:
                                                "linear-gradient(to right, #eab308, #f97316)",
                                            color: "black",
                                            "&:hover": {
                                                backgroundImage:
                                                    "linear-gradient(to right, #ca8a04, #ea580c)",
                                            },
                                        }}
                                        onClick={handleNextThankYouPage}
                                        variant="contained"
                                        color="primary"
                                        size="medium"
                                    >
                                        {t("next")}
                                    </Button>
                                </Box>
                            </motion.div>
                        </AnimatePresence>
                    </>
                )}
            </Paper>
        </Grid>
    );
};

export default CryptoConverter;