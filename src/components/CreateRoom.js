import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import axios from "axios";

class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      roomTitle: "",
      createdBy: "",
    };

    this.toggle = this.toggle.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  async onFormSubmit(e) {
    e.preventDefault();
    const {createdBy, roomTitle} = this.state;
    //const { hi } = this.props;
    try {
      const { data } = await axios.post("/chats/create", {createdBy, roomTitle});
      this.props.history.push(`/chatDetail/${data.room._id}?name=${createdBy}`)
      //addRoom(data.room);
      //this.toggle();
    } catch (err) {
      console.log("hey errr==>>>>", err);
    }
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>
          {this.props.buttonLabel} Create Chat Room
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>New Chat Room</ModalHeader>
          <Form onSubmit={this.onFormSubmit}>
            <ModalBody>
              <FormGroup>
                <Label for="inputCreatedBy">Username:</Label>
                <Input
                  type="text"
                  name="createdBy"
                  id="inputCreatedBy"
                  placeholder="Required field"
                  value={this.state.createdBy}
                  onChange={(e) => this.setState({ createdBy: e.target.value })}
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Chat Room Title</Label>
                <Input
                  type="select"
                  name="roomTitle"
                  id="inputRoomTitle"
                  placeholder="Required field"
                  value={this.state.roomTitle}
                  onChange={(e) => this.setState({ roomTitle: e.target.value })}
                >
                  <option value="vaccinated">Vaccinated</option>
                  <option value="low-exposure">Low Exposure</option>
                  <option value="high-exposure">High Exposure</option>
                  <option value="quarantine">Quarantine</option>
                  <option value="unknown">Unknown</option>
                </Input>
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary">Create</Button>{" "}
              <Button color="secondary" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default CreateRoom;
