import { useEffect } from 'react';
import './App.css'
import Home from "/src/pages/Home.jsx";

function App() {
  useEffect(() => {
    const html = document.querySelector("html");
    const box = document.getElementById("box");

    document.addEventListener("scroll", (event) => {
      console.log(`scrollTop: ${html.scrollTop}`);
      box.style.transform = `translateZ(${-html.scrollTop/5}px)`;
    });
  });

  return (
    <>
      {/*<Home />*/}
      <div className="cnt-1">
        <div className="row" style={{backgroundColor: "transparent", border: "2px solid black"}}>
          <div className="box" id="box" style={{backgroundColor: "red"}}></div>
        </div>
      </div>
      {/*<div className="cnt-2">

      </div>*/}
    </>
  )
}

export default App;
