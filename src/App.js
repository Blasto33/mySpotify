import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Routes from './components/App/Router';
import store from './redux/store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageTitle: "",
      token: "",
      items: []
    }

  }

  componentDidMount() {

    let hashParams = {};
    let e,
    r = /([^&;=]+)=?([^&;]*)/g,
    q = window.location.hash.substring(1);
    while ((e = r.exec(q))) {
        hashParams[e[1]] = decodeURIComponent(e[2]);
    }

    localStorage.setItem('token', hashParams.access_token);

  }

  render() {

    const { loggingIn } = this.props;

    const appSection = store.getState().token ? <Routes /> : <Login />

    return (
      <Provider store={store}>
        { appSection }     
      </Provider>
    );
  
    
  }
}

export default App;
