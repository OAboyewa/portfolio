import { useEffect, useState } from 'react';
import './App.css'
import Home from "/src/pages/Home.jsx";

function App() {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const html = document.querySelector("html");

    document.addEventListener("scroll", (event) => {
      setDistance(-html.scrollTop/10);
    });
  });

  return (
    <>
      {/*
      <div className="cnt-1">
        <div className="row" style={{backgroundColor: "transparent", border: "none"}}>
          <div className="box" id="box-1" style={{backgroundColor: "transparent", transform: `translateZ(${(distance/3)+5}px)`}}>
            <span className="h1 ft-primary">Hello, I am Tobi Aboyewa <br /> a Front-End Developer <br /> based in Leigh-on-Sea, UK</span>
          </div>
        </div> 
      </div>
      */}
      <div className="hero">
        <div className="hero-text">
          <span className="h1 ft-primary">Hello, I am Tobi Aboyewa <br /> a Front-End Developer <br /> based in Bedfordshire, UK</span>
        </div>
      </div>
      <div className="projects">
        <span>projects</span>
      </div>
    </>
  )
}

export default App;
