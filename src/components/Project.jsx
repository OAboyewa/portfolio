import '/src/styles/Project.css';

function Project({title, technologies, thumbnailHref, liveHref, codeHref}) {
    return (
        <div className="pjt-cnt">
            <div className="pjt-thumbnail">
                <img src={thumbnailHref}/>
            </div>
            <div>
                <span className="p1 ft-primary">{title}</span>
            </div>
            <div>
                <span className="p2 ft-primary">{technologies}</span>
            </div>
            <div>
                { liveHref &&
                    <span className="p2 ft-primary">
                        <a href={liveHref}>Live</a>
                    </span>
                }
                { codeHref &&
                    <span className="p2 ft-primary">
                        <a href={codeHref}>Code</a>
                    </span>
                }
            </div>
        </div>
    );
}

export default Project;