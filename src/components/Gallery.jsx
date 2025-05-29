import { Fragment } from "react";
import '../styles/gallery.css';

function Gallery() {
    const projectsData = [
        {
            imageSrc: "/public/images/pluto-software.svg", 
            tag: "commercial", 
            name: "Pluto Software",
            comments: "@Concept Care Solutions Limited",
            style: {
                backgroundColor: "#2b68a4",
            }
        },
        {
            imageSrc: "/public/images/pluto-software.svg", 
            tag: "commercial", 
            name: "Pluto Software",
            comments: "@Concept Care Solutions Limited",
            style: {
                backgroundColor: "#ff0000",
            }
        },
        {
            imageSrc: "/public/images/pluto-software.svg", 
            tag: "personal", 
            name: "Pluto Software",
            comments: "@Concept Care Solutions Limited",
            style: {
                backgroundColor: "#2b68a4",
            }
        },
    ];

    return (
        <div className="gallery">
            {
                projectsData.map(item => {
                    return <GalleryItem 
                        key={item.imageSrc}
                        imageSrc={item.imageSrc} 
                        tag={item.tag} 
                        name={item.name} 
                        comments={item.comments} 
                        style={item.style}
                    />
                })
            }
            
        </div>
    )
}

/**
 * 
 * @param {*} imageSrc Required param, input path to image file.
 * @param {*} tag Required param, input either "commercial" or "personal".
 * @param {*} name Required param, name of the project.
 * @param {*} comments Optional param.
 * @returns 
 */
function GalleryItem({imageSrc, style, tag, name, comments}) {
    return (
        <div className="gallery-item" style={style}>
            <div className="gallery-item-img-wrp">
                <img className="gallery-item-img" src={imageSrc} alt="" />
            </div>
            <div className="gallery-item-content">
                <div className="item-content-header">
                    <span className={`tag ${tag}`}>{tag}</span>
                    <span>{name}</span>
                    <span>{comments}</span>
                </div>
                <div className="item-content-footer">
                    <span>Click to see details</span>
                </div>
            </div>
        </div>
    );
}

export default Gallery;