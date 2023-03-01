import React, { useState, useEffect } from "react";
import Navbar from "./Layouts/Navbar";
import Home from "./Layouts/Home";
import Projects from "./Layouts/Projects";
import About from "./Layouts/About";
import Footer from "./Layouts/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      } else {
        setIsTopOfPage(false);
        const homeOffset = document.getElementById("home").offsetTop - 120;
        const projectsOffset =
          document.getElementById("projects").offsetTop - 120;
        const aboutOffset = document.getElementById("about").offsetTop - 120;
        const footerOffset = document.getElementById("footer").offsetTop - 120;
        if (window.scrollY >= homeOffset && window.scrollY < projectsOffset) {
          setSelectedPage("home");
        } else if (
          window.scrollY >= projectsOffset &&
          window.scrollY < aboutOffset
        ) {
          setSelectedPage("projects");
        } else if (
          window.scrollY >= aboutOffset &&
          window.scrollY < footerOffset
        ) {
          setSelectedPage("about");
        } else {
          setSelectedPage("get in touch");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage}  />

      <Projects setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage}  />
      <Footer setSelectedPage={setSelectedPage}  />
    </div>
  );
}

export default App;
