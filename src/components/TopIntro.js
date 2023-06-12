import React from 'react';
import { createContext, useState } from "react";
import "../pages/Home/home.css";

export const ThemeContext = createContext(null);

const TopIntro = () => {
    const [theme, setTheme] = useState("esther");

    function toggleTheme() {
        setTheme((curr) => curr === "esther" ? "maple" : "esther")
    }
  return (
    <div className='home-geometry-image'>
      <img src="../../images/brown-geometry.png" alt="geometry logo"/>
    </div>
  )
}

export default TopIntro