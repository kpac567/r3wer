import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import AppNavbar from "./components/AppNavbar";
import ChatDetail from "./components/ChatDetail";
import CreateRoom from "./components/CreateRoom";
import { Route, Link, Switch } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Parks from "./components/Parks";
import CovidStats from "./components/CovidStats";
// import Chat from "./Components/Chat";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      chatLists: [],
    };
  }

  componentDidMount() {
    axios.get(`/chats/list`).then((res) => {
      const chatLists = res.data;
      this.setState({ chatLists });
    });
  }

  sendChatId(i) {
    return <ChatDetail chatId={i} />;
  }

  render() {
    return (
      <div className="App">
        {/* <AppNavbar /> */}

        {/* <hr />
        <h3>Chat Room List</h3> */}
          <Switch>
            <NavigationBar />
            {/* this fuction if you load just the domain name (/) will redirect to registration */}
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={LoginForm} />
            <Route path="/parks" component={Parks} />
            <Route path="/covid-stats" component={CovidStats} />
          </Switch>
          <CreateRoom />
          <ListGroup>
            {this.state.chatLists.map((chatList) => (
              <ListGroupItem tag="a" key={chatList._id}>
                <Link to={`/chatDetail`}>
                  {chatList.roomTitle}
                  {this.sendChatId(chatList._id)}
                </Link>
                <Route path={`/chatDetail`} component={ChatDetail} />
              </ListGroupItem>
            ))}
          </ListGroup>
          <Footer />
      </div>
    );
  }
}

export default App;
