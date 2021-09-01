import React from 'react';
import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  HelpBlock,
  MenuItem,
  Modal,
  NavDropdown,
  NavItem,
} from 'react-bootstrap';

export default class SignInNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { signedIn: false, username: '', pswd: '' },
      showingModal: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.validateUsername = this.validateUsername.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  showModal() {
    this.setState({ showingModal: true });
  }

  hideModal() {
    this.setState({ showingModal: false });
  }

  signIn() {
    this.hideModal();
    // things left to do
  }

  signOut() {
    this.setState({ user: { signedIn: false, username: '' } });
    // things left to do
  }

  validateUsername() {
    const { user: { username } } = this.state;
    const len = username.length;
    if (len > 4) return 'success';
    if (len > 0) return 'error';
    return null;
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const user = { ...prevState.user, [name]: value };
      return { user };
    });
  }

  render() {
    const { user } = this.state;
    if (user.signedIn) {
      return (
        <>
          <NavDropdown title={user.username} id="user">
            <MenuItem onClick={this.signOut}>Sign out</MenuItem>
          </NavDropdown>
        </>
      );
    }

    let signInDisable = true;
    if (user.username && user.pswd) {
      signInDisable = false;
    }

    const { showingModal } = this.state;

    return (
      <>
        <NavItem onClick={this.showModal}>
          Sign in
        </NavItem>
        <Modal keyboard show={showingModal} onHide={this.hideModal} bsSize="sm">
          <Modal.Header closeButton>
            <Modal.Title>Sign in</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form name="signIn" onSubmit={this.signIn}>
              {/* ------ sign in form username group ---------- */}
              <FormGroup
                controlId="formUsername"
                validationState={this.validateUsername()}
              >
                <ControlLabel>Username</ControlLabel>
                <FormControl
                  type="text"
                  name="username"
                  value={user.username}
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>
                  More than three characters.
                </HelpBlock>
              </FormGroup>
              {/* ------ sign in form password group ---------- */}
              <FormGroup
                controlId="formPassword"
              >
                <ControlLabel>Password</ControlLabel>
                <FormControl
                  type="password"
                  name="pswd"
                  value={user.pswd}
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>
                  Password: 12345
                </HelpBlock>
              </FormGroup>
              {/* ------- Sign-in block button -------------- */}
              <Button
                block
                type="submit"
                bsStyle="primary"
                onClick={this.signIn}
                disabled={signInDisable}
              >
                Sign In
              </Button>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="link" onClick={this.hideModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
