import { useEffect, useState } from "react";
import { Copy, ArrowLeftRight } from "lucide-react";
import { Stepper, Step, StepLabel, styled } from "@mui/material";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { useLocation } from "react-router-dom";
import { Crypto } from "../components/convertor/Convertor";
import { fetchTopCryptos } from "../api/crypto";
import { useTranslation } from "react-i18next";  // Добавлен import для i18next

const ColorlibConnector = styled(StepConnector)(() => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: "linear-gradient(95deg, #FF6B00 0%, #FF8533 100%)",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      background: "linear-gradient(95deg, #FF6B00 0%, #FF8533 100%)",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: "#2A2A2A",
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ ownerState }) => ({
  backgroundColor: "#2A2A2A",
  zIndex: 1,
  color: "#fff",
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    background: "linear-gradient(136deg, #FF6B00 0%, #FF8533 100%)",
    boxShadow: "0 4px 10px 0 rgba(255, 107, 0, 0.25)",
  }),
  ...(ownerState.completed && {
    background: "linear-gradient(136deg, #FF6B00 0%, #FF8533 100%)",
  }),
}));

function ColorlibStepIcon(props: {
  active: boolean;
  completed: boolean;
  icon: number;
}) {
  const { active, completed, icon } = props;

  return (
      <ColorlibStepIconRoot ownerState={{ completed, active }}>
        {icon}
      </ColorlibStepIconRoot>
  );
}

function ThankYouPage() {
  const [cryptos, setCryptos] = useState<Crypto[]>([]);
  const [orderId] = useState("0144844461f947");
  const [activeStep] = useState(0);

  const location = useLocation();
  const {
    fromCurrency,
    toCurrency,
    fromAmount,
    toAmount,
    receivingAddress,
    merchantAddress,
  } = location.state || {};

  const { t } = useTranslation();  // Получаем функцию перевода

  useEffect(() => {
    fetchTopCryptos()
        .then((response) => {
          console.log("Fetched Cryptos:", response.data);
          const filteredCryptos = response.data.filter((crypto: Crypto) =>
              [
                "BTC", "SOL", "ETH", "USDT", "XRP", "BNB", "USDC", "DOGE", "ADA",
                "TRX", "TON", "LINK", "XLM", "AVAX", "SHIB", "SUI", "LTC", "UNI",
                "APT", "NEAR", "PEPE", "Ondo", "ARB", "OP",
              ].includes(crypto.symbol)
          );
          setCryptos(filteredCryptos);
        })
        .catch((err) => {
          console.error("Error:", err);
        });
  }, []);

  const steps = [
    t("thankYou.steps.awaitingDeposit"),
    t("thankYou.steps.awaitingConfirmations"),
    t("thankYou.steps.exchanging"),
    t("thankYou.steps.sendingToYou"),
    t("thankYou.steps.done"),
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getCurrencyLogoUrl = (currencySymbol: string) => {
    const crypto = cryptos.find((crypto) => crypto.symbol === currencySymbol);
    if (crypto?.symbol === "USDT" || "USDC") {
      return `src/publick/images/cryptos/${crypto?.slug?.toLowerCase()}-${crypto?.symbol?.toLowerCase()}-logo.png`;
    }
    return `src/publick/images/cryptos/${crypto.name?.toLowerCase()}-${crypto.symbol?.toLowerCase()}-logo.png`;
  };

  return (
      <div className="flex items-center justify-center p-4 mt-20 mb-20">
        <div className="max-w-2xl w-full space-y-4">
          {/* Order ID */}
          <div className="bg-[rgb(22,26,35)] rounded-lg p-4 flex items-center justify-between">
            <span className="text-[#808080]">{t("thankYou.orderId")}</span>
            <div className="flex items-center gap-2">
              <span className="text-white">{orderId}</span>
              <button
                  onClick={() => copyToClipboard(orderId)}
                  className="text-[#FF6B00] hover:text-[#FF8533]"
              >
              <span className="flex items-center gap-1">
                {t("thankYou.copyOrderId")} <Copy size={16} />
              </span>
              </button>
            </div>
          </div>

          {/* Exchange Info */}
          <div className="relative">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[rgb(22,26,35)] rounded-lg p-6">
                <h2 className="text-white mb-4">{t("thankYou.youNeedToSend")}</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <img
                        src={getCurrencyLogoUrl(fromCurrency)}
                        alt={fromCurrency}
                        className="w-6 h-6"
                    />
                    <span className="text-2xl text-white font-semibold">
                    {fromAmount} {fromCurrency}
                  </span>
                  </div>
                  <div className="text-[#808080]">{t("thankYou.currency")}</div>
                  <div className="text-white">{fromCurrency}</div>
                </div>
              </div>

              <div className="bg-[rgb(22,26,35)] rounded-lg p-6">
                <h2 className="text-white mb-4">{t("thankYou.youWillReceive")}</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <img
                        src={getCurrencyLogoUrl(toCurrency)}
                        alt={toCurrency}
                        className="w-6 h-6"
                    />
                    <span className="text-2xl text-white font-semibold">
                    {toAmount} {toCurrency}
                  </span>
                  </div>
                  <div className="text-[#808080]">{t("thankYou.currency")}</div>
                  <div className="text-white">{toCurrency}</div>
                </div>
              </div>
            </div>

            {/* Centered Arrow */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A2A2A] p-3 rounded-full shadow-lg">
              <ArrowLeftRight className="text-[#808080] w-6 h-6" />
            </div>
          </div>

          {/* Deposit Instructions */}
          <div className="bg-[rgb(22,26,35)] rounded-lg p-6">
            <h2 className="text-white mb-4">{t("thankYou.sendFundsToAddress")}</h2>

            <div className="space-y-6">
              <div>
                <div className="text-[#808080] mb-1">{t("thankYou.amount")}</div>
                <div className="flex items-center gap-2">
                  <img
                      src={getCurrencyLogoUrl(fromCurrency)}
                      alt={fromCurrency}
                      className="w-6 h-6"
                  />
                  <span className="text-white font-mono">{fromAmount} USDT</span>
                </div>
              </div>

              <div>
                <div className="text-[#808080] mb-1">{t("thankYou.toThisAddress")}</div>
                <div className="flex items-center gap-2">
                <span className="text-white font-mono break-all">
                  {merchantAddress}
                </span>
                  <button
                      onClick={() => copyToClipboard(merchantAddress)}
                      className="text-[#FF6B00] hover:text-[#FF8533] flex-shrink-0"
                  >
                  <span className="flex items-center gap-1">
                    {t("thankYou.copyAddress")} <Copy size={16} />
                  </span>
                  </button>
                </div>
              </div>

              <div>
                <div className="text-[#808080] mb-1">{t("thankYou.yourWalletAddress")}</div>
                <div className="flex items-center gap-2">
                <span className="text-white font-mono break-all">
                  {receivingAddress}
                </span>
                  <button
                      onClick={() => copyToClipboard(receivingAddress)}
                      className="text-[#FF6B00] hover:text-[#FF8533] flex-shrink-0"
                  >
                  <span className="flex items-center gap-1">
                    {t("thankYou.copyAddress")} <Copy size={16} />
                  </span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Steps */}
          <div className="bg-[rgb(22,26,35)] rounded-lg p-6">
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
            >
              {steps.map((label, index) => (
                  <Step key={label}>
                    <StepLabel StepIconComponent={ColorlibStepIcon}>
                      <div className="text-xs text-[#808080] mb-1">
                        STEP {index + 1}
                      </div>
                      <div className="text-white text-sm">{label}</div>
                    </StepLabel>
                  </Step>
              ))}
            </Stepper>
          </div>
        </div>
      </div>
  );
}

export default ThankYouPage;
