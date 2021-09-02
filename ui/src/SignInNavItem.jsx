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
      user: { signedIn: false, username: '', pswd: '' },
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

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
    const response = await fetch(`${apiEndpoint}/user`, {
      method: 'POST',
    });
    const body = await response.text();
    const result = JSON.parse(body);
    const { signedIn } = result;
    const username = result.username ? result.username : '';
    this.setState(prevState => (
      { ...prevState, user: { ...prevState.user, signedIn, username } }
    ));
  }

  showModal() {
    this.setState({ showingModal: true });
  }

  hideModal() {
    this.setState({ showingModal: false });
  }

  async signIn(e) {
    e.preventDefault();
    const { user: { username, pswd } } = this.state;
    const { showSuccess } = this.props;

    const authEndpoint = window.ENV.UI_AUTH_ENDPOINT;

    try {
      const response = await fetch(`${authEndpoint}/signin`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ username, pswd }),
      });

      const body = await response.text();
      const credentials = JSON.parse(body);

      this.setState((prevState) => {
        const user = { ...prevState.user, ...credentials };
        return { user };
      });

      this.hideModal();
      showSuccess('Login Successful.');
    } catch (error) {
      this.setState({ loginErrMsg: 'Incorrect password!' });
    }
  }

  signOut() {
    this.setState({ user: { signedIn: false, username: '', pswd: '' } });
  }

  validateUsername() {
    const { user: { username } } = this.state;
    if (username) {
      const len = username.length;
      if (len > 3) return 'success';
      if (len > 0) return 'error';
    }
    return null;
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState((prevState) => {
      const user = { ...prevState.user, [name]: value };
      return { ...prevState, user };
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
                  value={user.pswd}
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
