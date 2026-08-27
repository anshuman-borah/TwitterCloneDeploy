import { Route, Routes } from "react-router-dom";
import "./App.css";
import Authentication from "./Components/Authentication/Authentication";
import HomePage from "./Components/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserProfile } from "./Store/Auth/Action";
import darkTheme from "./Theme/DarkTheme";
import lightTheme from "./Theme/LightTheme";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import VerifiedSuccess from "./Components/VerifiedSuccess/VerifiedSuccess";

function App() {
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const jwt = localStorage.getItem("jwt");
  const [currentTheme, setCurrentTheme] = useState("");
  const { theme } = useSelector((store) => store);

  useEffect(() => {
    if (jwt) {
      dispatch(getUserProfile(jwt));
    }
  }, [jwt, dispatch]);

  useEffect(() => {
    setCurrentTheme(localStorage.getItem("theme"));
  }, [theme.currentTheme]);

  console.log("theme ", theme.currentTheme);

  return (
    <ThemeProvider theme={currentTheme === "dark" ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        <Routes>
          <Route path="/signin" element={<Authentication />} />
          <Route path="/signup" element={<Authentication />} />
          <Route path="/verified" element={<VerifiedSuccess />} />
          <Route
            path="/*"
            element={auth.user?.fullName ? <HomePage /> : <Authentication />}
          />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
