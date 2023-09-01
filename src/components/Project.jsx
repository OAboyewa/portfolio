import '/src/styles/Project.css';

function Project({title, technologies, thumbnailHref, liveHref, repoHref}) {
    return (
        <div className="pjt-cnt">
            <div className="pjt-thumbnail">
                <img src={thumbnailHref}/>
            </div>
            <p>{title}</p>
            <p>{technologies}</p>
            <div>
                { liveHref &&
                    <span>
                        <a href={liveHref}>Live</a>
                    </span>
                }
                { repoHref &&
                    <span>
                        <a href={repoHref}>Code</a>
                    </span>
                }
            </div>
        </div>
    );
}

export default Project;