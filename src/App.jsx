import { useEffect, useState } from 'react';
import './App.css'
import Home from '/src/pages/Home.jsx';
import Project from '/src/components/Project.jsx';

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
      <div className="stn-projects">
        <div className="h2 ft-primary cnt-align">
          <span>PROJECTS</span>
        </div>
        <div className="projects">
          <Project title="wix-template" technologies={"Html, Css, JavaScript, React"} liveHref="http://127.0.0.1:5173/"/>
          <Project title="wix-template" liveHref="http://127.0.0.1:5173/"/>
          <Project title="wix-template" liveHref="http://127.0.0.1:5173/"/>
          <Project title="wix-template" liveHref="http://127.0.0.1:5173/" codeHref="http://127.0.0.1:5173/"/>
        </div>
      </div>
      <div className="stn-contacts">
        <div className="h2 ft-primary cnt-align">
          <span>CONTACT</span>
        </div>

      </div>
    </>
  )
}

export default App;
