import * as React from "react";
import "./ContactPage.css"

//Assets
import github from "../../assets/github-logo-silhouette-in-a-square.png";
import linkedIn from "../../assets/linkedin.png"


export default function ContactPage() {
    return (
        <>
            <div className="containerr">
                <div className="contact-container">
                    <h2>Contact?</h2>
                    <p>
                        If you wish to make contact, please send me an email
                        at tjsourianos@gmail.com
                        <br/>
                        You can also send me a message on <strong>Github</strong>, or link with me on <strong>LinkedIn!</strong>
                    </p>
                    <div className="contact-container-images">
                        <a href="https://github.com/JSourianos" target="_blank"><img src={github} alt="Github Logo"/></a>
                        <a href="https://www.linkedin.com/in/thomas-j-sourianos-597398192/" target="_blank"><img src={linkedIn} alt="Github Logo"/></a>
                    </div>
                </div>
            </div>
        </>
    )
}
