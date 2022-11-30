import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: "",
      surname: "",
      username: "",
    };
  }

  onSubmit() {
    this.props.addUser(
      this.state.name,
      this.state.surname,
      this.state.username
    );
    if ((this.state.name, this.state.surname, this.state.username)) {
      this.props.hide();
    }
  }

  onUpdate() {
    this.props.editUser(
      this.state.id,
      this.state.name,
      this.state.surname,
      this.state.username
    );
    this.props.hide();
  }

  componentDidMount() {
    this.setState({
      id: this.props.user.id,
      name: this.props.user.name,
      surname: this.props.user.surname,
      username: this.props.user.username,
    });
  }

  render() {
    return (
      <Modal fade={false} isOpen={this.props.visible}>
        <ModalHeader> {this.props.title}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="name">name </Label>
              <Input
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
                id="name"
                name="name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="surname">surname</Label>
              <Input
                value={this.state.surname}
                onChange={(e) => this.setState({ surname: e.target.value })}
                id="surname"
                name="name"
                type="text"
              />
            </FormGroup>
            <FormGroup>
              <Label for="username">username</Label>
              <Input
                value={this.state.username}
                onChange={(e) => this.setState({ username: e.target.value })}
                id="username"
                name="name"
                type="text"
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          {this.props.user.id ? (
            <button className="btn btn-success" onClick={() => this.onUpdate()}>
              {" "}
              update{" "}
            </button>
          ) : (
            <button className="btn btn-success" onClick={() => this.onSubmit()}>
              add
            </button>
          )}
          <button className="btn btn-danger" onClick={() => this.props.hide()}>
            cancel
          </button>
        </ModalFooter>
      </Modal>
    );
  }
}
