import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import AppNavbar from "./components/AppNavbar";
import ChatDetail from "./components/ChatDetail";
import { Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Parks from "./components/Parks";
import CovidStats from "./components/CovidStats";
// import Chat from "./Components/Chat";

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <AppNavbar /> */}

        {/* <hr />

        <h3>Chat Room List</h3> */}
        <NavigationBar />
        <Switch>
          {/* this fuction if you load just the domain name (/) will redirect to registration */}
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={LoginForm} />
          <Route path="/parks" component={Parks} />
          <Route path="/covid-stats" component={CovidStats} />
          <Route path='/chatDetail/:chatId' component={ChatDetail} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
