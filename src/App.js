import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home"
import About from "./pages/About"
import Works from "./pages/Works"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("esther");

    function toggleTheme() {
        setTheme((curr) => curr === "esther" ? "maple" : "esther")
    }
  return (
    <div className="container">
      <Header/>
      <SideBar/>
      <main>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/works" Component={Works} />
        <Route path="/contact" Component={Contact} />  
      </Routes> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
