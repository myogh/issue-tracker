import React from 'react';
import {
  Button,
  MenuItem,
  Modal,
  NavDropdown,
  NavItem,
} from 'react-bootstrap';

export default class SignInNavItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: { signedIn: false, username: '' },
      showingModal: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  showModal() {
    this.setState({ showingModal: true });
  }

  hideModal() {
    this.setState({ showingModal: false });
  }

  signIn() {
    this.hideModal();
    this.setState({ user: { signedIn: true, username: 'User1' } });
  }

  signOut() {
    this.setState({ user: { signedIn: false, username: '' } });
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
            <Button block bsStyle="primary" onClick={this.signIn}>
              Sign In
            </Button>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="link" onClick={this.hideModal}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
