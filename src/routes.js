import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// impotando as pages
import Home from './pages/home';
import Community from './pages/community';
import Stream from './pages/stream';
import Statistics from './pages/statistics';
import Navbar from "./components/navbar";
import Topnav from "./components/topnav";
import Player from "./components/player";

export default function Routes() {
    return (
        <Router basename={process.env.PUBLIC_URL}>

            <Navbar />
            <Topnav />

            <div className="Content">
                <Switch>

                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route exact path='/home'>
                        <Home />
                    </Route>

                    <Route path='/community'>
                        <Community />
                    </Route>

                    <Route path='/stream'>
                        <Stream />
                    </Route>

                    <Route path='/statistics'>
                        <Statistics />
                    </Route>

                </Switch>

                <Player />
            </div>

        </Router>
    )
}