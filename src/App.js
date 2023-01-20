import Blog from "./Copmponent/Blog/Blog";
import Contact from "./Copmponent/Contact/Contact";
import Home from "./Copmponent/Home/Home";
import Menu from "./Copmponent/Menu/Menu";
import Portfolio from "./Copmponent/Portfolio/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Copmponent/About/About";
import "./App.css";
import Store from "./Store";
import { useEffect, useState } from "react";
import Scrolltop from "./Copmponent/Scrolltop/Scrolltop";
function App() {
  const [flag,setflag]=useState(JSON.parse(localStorage.getItem('dark')));

  useEffect(() => {
    if(localStorage.getItem('dark')===null){
      localStorage.setItem('dark', true) 
    }
  }, [])
  
  return (
    <BrowserRouter>
      <Store.Provider value={{flag,setflag}}>
        <Menu />
        {/* <Scrolltop/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio/about" element={<About />} />
          <Route path="/portfolio/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/contact" element={<Contact />} />
          <Route path="/portfolio/blog" element={<Blog />} />
        </Routes>
      </Store.Provider>
    </BrowserRouter>
  );
}

export default App;
