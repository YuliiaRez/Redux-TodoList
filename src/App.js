import logo from "./logo.svg";
import "./App.css";
import TodoPage from "./Pages/TodoPage";
import GlobalStyle from "./components/globalStyle";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/themes";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
    console.log(`theme`, theme);
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <button onClick={themeToggler}>Switch Theme</button>
        <div className="App">
          <TodoPage />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
