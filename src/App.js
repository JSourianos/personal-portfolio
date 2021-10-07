import "./App.css";
//import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//components
import NavigationBar from "./components/NavigationBar/NavigationBar";

//pages
import LandingPage from "./pages/LandingPage/LandingPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="navbar">
          <NavigationBar />
        </header>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/portfolio">
            <PortfolioPage />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
