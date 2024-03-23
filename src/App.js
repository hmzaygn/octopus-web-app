import React, { useContext, useState } from "react";
import { Paper } from "@mui/material";
import AppRouter from "./router/AppRouter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { OctModeContext } from "./contexts/OctModeProvider";

function App() {
  const { darkMode } = useContext(OctModeContext);

  const toggleTheme = () => {
    let palette = {
      mode: "light",
      primary: {
        main: "#feecdc",
      },
      secondary: {
        main: "#28293d",
      },
      background: {
        default: "#feecdc",
        paper: "#feecdc",
      },
    };

    if (darkMode) {
      palette = {
        mode: "dark",
        primary: {
          main: "#28293d",
        },
        secondary: {
          main: "#feecdc",
        },
        background: {
          default: "#28293d",
          paper: "#28293d",
        },
      };
    }

    return palette;
  };

  const theme = createTheme({
    palette: { ...toggleTheme() },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Paper elevation={0} sx={{ height: "100vh" }} square>
          <AppRouter />
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default App;
