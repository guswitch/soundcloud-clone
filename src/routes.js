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
        <Router>

            <Navbar />
            <Topnav />

            <div className="Content">
                <Switch>

                    <Route exact path='soundcloud-clone/'>
                        <Home />
                    </Route>

                    <Route path='soundcloud-clone/community'>
                        <Community />
                    </Route>

                    <Route path='soundcloud-clone/stream'>
                        <Stream />
                    </Route>

                    <Route path='soundcloud-clone/statistics'>
                        <Statistics />
                    </Route>

                </Switch>

                <Player />
            </div>

        </Router>
    )
}