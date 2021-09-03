import React from 'react';
import fetch from 'isomorphic-fetch';
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
import withToast from './withToast.jsx';

class SignInNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pswd: '',
      showingModal: false,
      loginErrMsg: '',
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

  async signIn(e) {
    e.preventDefault();
    const { pswd } = this.state;
    const { user: { username }, onUserChange } = this.props;
    const { showSuccess } = this.props;

    const authEndpoint = window.ENV.UI_AUTH_ENDPOINT;

    try {
      const response = await fetch(`${authEndpoint}/signin`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username, pswd }),
      });

      const body = await response.text();
      const credentials = JSON.parse(body);

      onUserChange({ ...credentials });

      this.hideModal();
      showSuccess('Login Successful.');
    } catch (error) {
      this.setState({ loginErrMsg: 'Incorrect password!' });
    }
  }

  async signOut() {
    const { onUserChange } = this.props;
    const authEndpoint = window.ENV.UI_AUTH_ENDPOINT;
    await fetch(`${authEndpoint}/signout`, {
      method: 'POST',
      credentials: 'include',
    });

    onUserChange({ username: '', signedIn: false });
  }

  validateUsername() {
    const { user: { username } } = this.props;
    if (username) {
      const len = username.length;
      if (len > 3) return 'success';
      if (len > 0) return 'error';
    }
    return null;
  }

  handleChange(e) {
    const { onUserChange } = this.props;
    if (e.target.name === 'username') {
      onUserChange({ username: e.target.value, signedIn: false });
    } else {
      this.setState({ pswd: e.target.value });
    }
  }

  render() {
    const { user } = this.props;
    const { pswd } = this.state;
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
    if (user.username && pswd) {
      if (user.username.length > 3) {
        signInDisable = false;
      }
    }

    const { showingModal, loginErrMsg } = this.state;

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
                  value={pswd}
                  onChange={this.handleChange}
                />
                <FormControl.Feedback />
                <HelpBlock>
                  Password: superman
                  <div style={{ color: '#f26b41' }}>{loginErrMsg}</div>
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

export default withToast(SignInNavItem);
