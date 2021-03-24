import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Routes from './components/App/Router';
import { SideMenu } from './components/SideMenu/SideMenu';
import store from './redux/store';

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

    // Get the token from the store here

  }

  render() {

    const appSection = this.state.token ? <Routes /> : <Login />

    return (
      <Provider store={store}>
        { appSection }        
      </Provider>
    );
  
    
  }
}

export default App;
