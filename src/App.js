import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SideMenu } from './components/SideMenu/SideMenu';
import Login from './components/Login/Login';
import tokenActions from './redux/actions/tokenActions';
import uiActions from './redux/actions/uiActions';
import { uiConstants } from './redux/constants/uiConstants';
import store from './redux/store';
import { bindActionCreators } from 'redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "",
      token: ""
    }

  }

  componentDidMount() {

    console.log("Welcome to the app component!")

    let hashParams = {};
    let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    console.log(hashParams.access_token);
  }

  render() {

    const appSection = this.state.token ? <SideMenu /> : <Login />
    // Replace sidemenu with the new component that will hold everything

    return (
      <Provider store={store}>
        {appSection}
      </Provider>
    );

    
    
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  setPageTitle: uiActions.setPageTitle,
  setToken: tokenActions.setToken
}, dispatch);

function mapStateToProps(state) {
  return { 
    pageTitle: state.ui,
    token: state.tokenReducer.token,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
//export default App;
