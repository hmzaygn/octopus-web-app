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
        main: "#e79937",
      },
      secondary: {
        main: "#8464c7",
      },
      background: {
        default: "#e79937",
        paper: "#e79937",
      },
    };

    if (darkMode) {
      palette = {
        mode: "dark",
        primary: {
          main: "#8464c7",
        },
        secondary: {
          main: "#e79937",
        },
        background: {
          default: "#8464c7",
          paper: "#8464c7",
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
