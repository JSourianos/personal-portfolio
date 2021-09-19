import * as React from "react";
import {Link} from "react-router-dom";

import "./HeaderButton.css"

export default function HeaderButton() {
    return(
        <>
            <div className="header-button">
                <Link className="link" to="/contact"><p>Contact</p></Link>
            </div>
        </>
    )
}
