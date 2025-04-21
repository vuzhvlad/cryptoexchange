import "./i18n.ts";
import { AppBar, Box, ThemeProvider, CssBaseline } from "@mui/material";
import Footer from "./components/FooterMainPage";
import Header from "./components/header/Header.tsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import HelpCenter from "./pages/HelpCenter";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Terms from "./pages/Terms";
import ThankYouPage from "./pages/ThankYouPage";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Home from "./pages/Home";

import darkTheme from "./theme.ts";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Router>
            <div className="min-h-screen text-white">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/help-center" element={<HelpCenter />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/thank-you" element={<ThankYouPage />} />
              </Routes>
            </div>
          </Router>
        </AppBar>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
