import React from "react";
import Display from "./components/Display";
import { ThemeContextProvider } from './Context/ThemeContext';
import "./styles.css";

const App = () => {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Display />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
