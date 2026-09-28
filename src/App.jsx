import React, { useMemo, useState } from "react";

import { ThemeProvider, createTheme, CssBaseline, Box } from "@mui/material";

import ResponsiveAppBar from "./Tripvista/Navbar";
import Hero from "./Tripvista/Hero";
import PopularDestinations from "./Tripvista/PopularDestinations";
import TravelExperience from "./Tripvista/TravelExperience";
import JourneyElevated from "./Tripvista/JourneyElevated";
// import CuratedEscapes from "./Tripvista/CuratedEscapes";
import Mytrip from "./Tripvista/Mytrip";
import Favorites from "./Tripvista/Favorites";
import Footer from "./Tripvista/Footer";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",

          primary: {
            main: "#4FC3F7",
          },

          secondary: {
            main: "#C49A55",
          },

          background: {
            default: darkMode ? "#050A30" : "#F5F1E8",
            paper: darkMode ? "#0B1238" : "#FFFFFF",
          },

          text: {
            primary: darkMode ? "#FFFFFF" : "#07113F",
            secondary: darkMode ? "#C8CEDD" : "#73798A",
          },
        },

        typography: {
          fontFamily: "Arial, sans-serif",
        },

        shape: {
          borderRadius: 14,
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "background.default",
          color: "text.primary",
          transition: "background-color 0.4s ease, color 0.4s ease",
        }}
      >
        <ResponsiveAppBar
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
      
        <Hero />
        <PopularDestinations />
        <TravelExperience />
        <JourneyElevated />
        {/* <CuratedEscapes /> */}
        <Mytrip />
        <Favorites />
        <Footer />
      </Box>
    </ThemeProvider>
    
  );
}

export default App;






