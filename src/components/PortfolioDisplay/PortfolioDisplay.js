import * as React from "react";
import "./PortfolioDisplay.css";

export default function PortfolioDisplay({title, desc, image, href}) {
    return (
        <>
            <div className="portfolio-container">
                <div className="portfolio-container-right">
                    <a href={href} target="_blank"><img
                        src={image} alt="Project Image"/></a>
                </div>
                <div className="portfolio-container-left">
                    <h3 className="portfolio-title">{title}</h3>
                    <p>{desc}</p>
                </div>
            </div>
        </>
    )
}
