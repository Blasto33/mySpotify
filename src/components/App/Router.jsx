// Mettre le connect ici

import { BrowserRouter as Router, Switch, Route, Redirect, Link
} from "react-router-dom";
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Home from '../Home/Home';
import Artist from '../Artist/Artist';
import User from '../User/User';
import Error from '../Error/Error';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/artist" component={Artist} />
                <Route path="/profile" component={User} /* Remplacer par User component  */ />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Redirect from="/" to="/login" />
                <Route component={Error}></Route>
            </Switch>
        </Router>
    );
}

export default Routes;