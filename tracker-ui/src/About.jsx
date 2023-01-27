import React from 'react';
import store from './store.js';
import graphQLFetch from './graphQLFetch.js';

export default class About extends React.Component {
  static async fetchData() {
    const data = graphQLFetch('query{about}');
    return data;
  }

  constructor(props) {
    super(props);
    const apiAbout = store.initialData ? store.initialData.about : null;
    delete store.initialData;

    this.state = {
      apiAbout,
    };
  }

  async componentDidMount() {
    const {
      apiAbout,
    } = this.state;
    if (apiAbout == null) {
      const data = await About.fetchData();
      this.setState({
        apiAbout: data.about,
      });
    }
  }

  render() {
    const {
      apiAbout,
    } = this.state;
    return (
      <div className="text-center container">
        <div className="col-md-8 col-md-offset-2">
          <h3>Issue Tracker Application</h3>
          <hr />
          <p className="text-muted">
            An issue-tracking app which assists team members of a project
            to stay organized with the issues or tasks
            towards the completion
            of them. Each member or the project leader could perform
            CRUD operations on the list of issues during the
            development process. Although reading operation on the list
            of issues can be read is not restricted,
            the remaining operations such as creating, updating and
            deleting the data are only allowed to the authenticated
            and authorized users.
            <br />
            <br />
            The application is part of a coursework from the book:
            <br />
            <strong>
              {/* eslint-disable-next-line */}
              <a href="https://books.google.com.mm/books/about/Pro_MERN_Stack.html?id=TayXDwAAQBAJ&source=kp_book_description&redir_esc=y">
                Pro MERN Stack: Full Stack Web App Development 2nd ed.
                by Vasan Subramanian
              </a>
            </strong>
          </p>
          <hr />
          <p className="text-muted">{apiAbout}</p>
        </div>
      </div>
    );
  }
}
