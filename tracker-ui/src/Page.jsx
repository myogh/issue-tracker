import React from 'react';
import {
  Grid,
} from 'react-bootstrap';
import Contents from './Contents.jsx';
import NavBar from './NavBar.jsx';
// import Footer from './Footer.jsx';
import UserContext from './UserContext.js';
import graphQLFetch from './graphQLFetch.js';
import store from './store.js';

export default class Page extends React.Component {
  static async fetchData(cookie) {
    const query = 'query { user { username signedIn } }';
    const data = await graphQLFetch(query, null, null, cookie);
    return data;
  }

  constructor() {
    super();
    const user = store.userData ? store.userData.user : null;
    delete store.userData;
    this.state = { user };
    this.onUserChange = this.onUserChange.bind(this);
  }

  async componentDidMount() {
    const { user } = this.state;
    if (user === null) {
      const data = await Page.fetchData();
      this.setState({ user: data.user });
    }
  }

  onUserChange(user) {
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    if (user === null) return null;

    return (
      <div>
        <NavBar user={user} onUserChange={this.onUserChange} />
        <Grid fluid>
          <UserContext.Provider value={user}>
            <Contents />
          </UserContext.Provider>
        </Grid>
        {/* <Footer /> */}
      </div>
    );
  }
}
