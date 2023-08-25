import "/src/styles/home.css"
import "/src/styles/text.css"
import "/src/styles/navigation.css"

export default function Home() {
    return(
        <div id="home">
            <aside className="nav-wrapper">
                <nav>
                    <span></span>
                    <div className="node">
                        H
                    </div>
                    <div className="node">
                        A
                    </div>
                    <div className="node">
                        A
                    </div>
                    <div className="node">
                        C
                    </div>
                </nav>
            </aside>
            <div className="row">
                <div className="column ft-primary t1">
                    <p>I'm a paragraph. Click here to add your own text and edit me. <br /> <br />
                        It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. 
                        Feel free to drag and drop me anywhere you like on your page. 
                        I’m a great place for you to tell a story and let your users know a little more about you. 
                        This is a great space to write a long text about your company and your services. 
                        You can use this space to go into a little more detail about your company. 
                        Talk about your team and what services you provide. 
                        Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. 
                        Make your company stand out and show your visitors who you are.
                    </p>
                </div>
                <div className="column badges-cnt">
                    <img className="badges-img" src="\src\images\badges\React-Icon.png" alt="React" />
                    <img className="badges-img" src="\src\images\badges\Git-Icon-1788C.png" alt="Git" />
                    <img className="badges-img" src="\src\images\badges\github-mark.png" alt="Github" />
                    <img className="badges-img" src="\src\images\badges\Vite-Icon.png" alt="Vite" />
                    <img className="badges-img" src="\src\images\badges\vscode-icon.png" alt="VSCode" />
                </div>
            </div>
        </div>
    );
}