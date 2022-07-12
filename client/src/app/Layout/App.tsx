// Import React's Components
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Import Material-UI
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

// Import Components
import AboutPage from "../../features/About/AboutPage";
import Catalog from "../../features/Catalog/Catalog";
import ProductDetails from "../../features/Catalog/ProductDetails";
import ContactPage from "../../features/Contact/ContactPage";
import HomePage from "../../features/Home/HomePage";
import Header from "./Header";
import ServerError from "../Errors/ServerError";
import NotFound from "../Errors/NotFound";

// Import CSS
import "react-toastify/dist/ReactToastify.css";

// Codes
function App() {
  // State Conditions
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? "dark" : "light";

  // Theme Function
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  // Handle Dark Themes
  function handleThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <ToastContainer position="bottom-right" hideProgressBar />
        <CssBaseline />
        <Header darkMode={darkMode} handleThemeChange={handleThemeChange} />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/catalog/:id" element={<ProductDetails />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/server-error" element={<ServerError />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
