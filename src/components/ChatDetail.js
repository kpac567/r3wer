import React, { Component } from "react";
import axios from "axios";
import { Input, ListGroup, ListGroupItem, Button, Form } from "reactstrap";
import socketIoClient from "socket.io-client";

class ChatDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatDetails: [],
      chatMsg: "",
    };
  }

  componentDidMount() {
   // this.socket = socketIoClient();//http://127.0.0.1:5000
    //this.socket.on('newMsg', (a) => {
        //console.log('new msg==>>>', a);
    //});
    //console.log("props==>>>", this.props);
    const { chatId } = this.props.match.params;
    axios.get("/chats/detail/" + chatId).then((response) => {
      const chatDetails = response.data;
      console.log('exisiting msgs==>>>', chatDetails)
      this.setState({ chatDetails });
    });
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { chatId } = this.props.match.params;
    const msgBy = new URLSearchParams(window.location.search).get("name");
    const { chatMsg } = this.state;
    try {
        const {data} = await axios.post(`/chats/addMsg/${chatId}`, { msgBy, chatMsg, chatId });
        this.setState(prevState => ({chatDetails: prevState.chatDetails.concat(data.msg), chatMsg: ''}));
    } catch (err) {

    } 
  };

  handleInputChange = async (e) => {
    this.setState({ chatMsg: e.target.value });
  };

  render() {
    const { chatMsg } = this.state;
    return (
      <div>
        <h1>Chat with your future crush: </h1>
        <ListGroup>
          {this.state.chatDetails.map((chatDetail) => (
            <ListGroupItem>
              {chatDetail.chatMsg} - By: {chatDetail.msgBy}
            </ListGroupItem>
          ))}
        </ListGroup>

        <Form onSubmit={this.onSubmit}>
          <Input value={chatMsg} onChange={this.handleInputChange} />
          <Button>Send </Button>
        </Form>
      </div>
    );
  }
}

export default ChatDetail;
