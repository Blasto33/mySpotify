// Mettre le connect ici

import { BrowserRouter as Router, Switch, Route, Redirect, Link
} from "react-router-dom";
import Login from '../Login/Login';
import Home from '../Home/Home';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/profile" component={Home} /* Remplacer par User component  */ />
            <Route path="/login" component={Login} />
            <Redirect from="*" to="/login" />
        </Switch>
    </Router>
)

export default Routes