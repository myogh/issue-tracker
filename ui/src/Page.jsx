import React from 'react';
import {
  Grid,
} from 'react-bootstrap';
import Contents from './Contents.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

export default class Page extends React.Component {
  constructor() {
    super();
    this.state = { user: { signedIn: false, username: '' } };
    this.onUserChange = this.onUserChange.bind(this);
  }

  async componentDidMount() {
    const apiEndpoint = window.ENV.UI_AUTH_ENDPOINT;
    const response = await fetch(`${apiEndpoint}/user`, {
      method: 'POST',
    });
    const body = await response.text();
    const result = JSON.parse(body);

    const { signedIn } = result;
    const username = result.username ? result.username : '';
    this.setState({ user: { signedIn, username } });
  }

  onUserChange(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;

    return (
      <div>
        <NavBar user={user} onUserChange={this.onUserChange} />
        <Grid fluid>
          <Contents />
        </Grid>
        <Footer />
      </div>
    );
  }
}
