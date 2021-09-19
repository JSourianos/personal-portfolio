import {Link} from "react-router-dom";
import logo from "../../assets/logoipsum-logo-15 1.png";
import "./NavigationBar.css"

export default function NavigationBar() {
    return <>
        <div className="logo">
            <li><Link className="link" to="/"><img src={logo} alt="logo"/></Link>
            </li>
        </div>
        <div className="links">
            <li><Link className="link" to="/portfolio">Portfolio</Link>
            </li>
            <li className="header-link"><Link className="link" to="/contact">Contact</Link>
            </li>
        </div>
    </>;
}
