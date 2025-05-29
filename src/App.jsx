import './App.css'
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <div className="header">
        <div className="left">
          <p className="name">Aaron Aboyewa</p>
        </div>
        <div className="right">
          <a href="https://www.linkedin.com/in/aaron-aboyewa-5980391b3/">
            <img className="socal-badge" src="/badges/InBug-Black.png"/>
          </a>
        </div>
      </div>
      <div className="hero">
        <span>Application IT Support/Junior Developer based in Bedfordshire, UK.</span>
      </div>
      <h3 >Projects</h3>
      <Gallery />
      <h3 className="section-break">About</h3>
      <div className="about">
        <p>
          I am an Application Support/Junior Developer with hands-on commercial experience contributing to the development of two SaaS products 
          currently in progress. With a strong foundation in HTML, CSS, JavaScript, and React, I bring a practical understanding of responsive 
          design and version control using Git.
        </p>
        <p>
          Working in real-world development teams has given me experience in Agile workflows, collaborating with designers 
          and back-end developers, and writing clean, maintainable code that aligns with product requirements and user needs. 
          I'm passionate about creating intuitive, accessible interfaces and continuously improving my skills to stay up-to-date with industry 
          best practices.
        </p>
      </div>
      <h3 className="section-break">Skills</h3>
      <div className='skills'>
        <div className='left-shadow'></div>
        <div className='right-shadow'></div>
        <div className="carousel">
          <div className="badge-group">
            <img className="badge" src="\badges\HTML5_Logo_128.png" />
            <img className="badge" src="\badges\CSS Icon.png" />
            <img className="badge" src="\badges\JavaScript-logo.png" />
            <img className="badge" src="\badges\React-Icon.png" />
            <img className="badge" src="\badges\Git-Icon-1788C.png"/>
            <img className="badge" src="\badges\github-mark.png" />
            <img className="badge" src="\badges\Vite-Icon.png"/>
            <img className="badge" src="\badges\vscode-icon.png"/>
          </div>
          <div aria-hidden className="badge-group">
            <img className="badge" src="\badges\HTML5_Logo_128.png" />
            <img className="badge" src="\badges\CSS Icon.png" />
            <img className="badge" src="\badges\JavaScript-logo.png" />
            <img className="badge" src="\badges\React-Icon.png" />
            <img className="badge" src="\badges\Git-Icon-1788C.png"/>
            <img className="badge" src="\badges\github-mark.png" />
            <img className="badge" src="\badges\Vite-Icon.png"/>
            <img className="badge" src="\badges\vscode-icon.png"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
