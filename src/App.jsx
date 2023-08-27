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
      {/*<Home />*/}
      <div className="cnt-1">
        <div className="row" style={{backgroundColor: "transparent", border: "none"}}>
          <div className="box" id="box-1" style={{backgroundColor: "transparent", transform: `translateZ(${(distance/3)+10}px)`}}>
            <span className="h1 ft-primary">Hello</span>
          </div>
          <div className="box" id="box-2" style={{backgroundColor: "transparent", transform: `translateZ(${(distance/6)+25}px)`}}>
            <span className="h1 ft-primary">I'm</span>
          </div>
          <div className="box" id="box-3" style={{backgroundColor: "transparent", transform: `translateZ(${(distance/9)+35}px)`}}>
            <span className="h1 ft-primary">Tobi</span>
          </div>
        </div>
      </div>
      <div className="cnt-2">

      </div>
    </>
  )
}

export default App;
