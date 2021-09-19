import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//components
import NavigationBar from "./components/NavigationBar/NavigationBar";

//pages
import LandingPage from "./pages/LandingPage/LandingPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

function App() {
    return (
        <div className="App">
            <Router>
                <header className="navbar">
                    <NavigationBar />
                </header>
                <Switch>
                    <Route exact path="/">
                        <LandingPage/>
                    </Route>
                    <Route exact path="/portfolio">
                        <PortfolioPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
