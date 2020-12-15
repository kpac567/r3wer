import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Parks from './Components/Parks';
import CovidStats from './Components/CovidStats';
import Chat from './Components/Chat';
import ChatRoom from './Components/ChatRoom';
// import './css/styles.css';

import { connect } from 'react-redux';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
            <div className="col-12">
              <Router>
                  <NavigationBar />
                  {/* this fuction if you load just the domain name (/) will redirect to registration */}
                  <Route exact path="/" component={Home} />
                  <Route path="/home" component={ Home }/>
                  <Route path="/login" component={LoginForm} />
                  <Route path="/parks" component={Parks} />
                  <Route path="/covid-stats" component={CovidStats} />
                  <Route path="/chat" component={Chat} />
                  <Route path="/chat-room" component={ChatRoom} />
                  {/* this fuction if you load anything but the defined route will redirect to registration */}
                  {/*{<Redirect from="*" to="/home" />}*/}
                  <Footer />
              </Router>
            </div>
        </div>
      </div>
    );
  }
}
function mapState(state) {
    return {};
}

const actionCreators = {
};

export default connect(mapState, actionCreators)(App);
