import React, { useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import LandingPage from "./component/landingPage/LandingPage";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

const App = () => {
  const [mode, setMode] = useState("light");

  // Load saved theme on first render
  useEffect(() => {
    const savedMode = localStorage.getItem("themeMode");
    if (savedMode === "dark" || savedMode === "light") {
      setMode(savedMode);
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("themeMode", newMode);
          return newMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? { background: { default: "#f4f4f4" } }
            : { background: { default: "#121212" } }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LandingPage />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
