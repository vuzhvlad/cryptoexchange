import axios from "axios";

const API_URL = "http://localhost:5001/api/cryptos";

export const fetchTopCryptos = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error.message);
    throw new Error("Failed to fetch cryptocurrencies");
  }
};
