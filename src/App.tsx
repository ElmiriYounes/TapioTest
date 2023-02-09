import React, { FC, useEffect, useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import { lightTheme } from "./themes/lightTheme";
import { darkTheme } from "./themes/darkTheme";
import Error404 from "./components/errors/Error404";
import PostsPage from "./pages/PostsPage";

const App: FC = () => {
  const [mode, setMode] = useState<string>("light");

  useEffect(() => {
    localStorage.getItem("mode") !== null &&
      setMode(localStorage.getItem("mode")!);

    // to avoid warning "react hook useeffect has a missing dependency"
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      {GlobalStyle}

      <Router>
        <Routes>
          <Route
            path="/tapiotest"
            element={<PostsPage mode={mode} setMode={setMode} />}
          />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
