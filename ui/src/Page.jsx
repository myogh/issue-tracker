import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon,
  Grid,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Contents from './Contents.jsx';
import IssueAddNavItem from './IssueAddNavItem.jsx';

function NavBar() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>Issue Tracker</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem href="/">Home</NavItem>
        <NavItem href="/issues">Issue List</NavItem>
        <NavItem href="/report">Report</NavItem>
      </Nav>
      <Nav pullRight>
        <IssueAddNavItem />
        <NavDropdown id="user-dropdown" title={<Glyphicon glyph="option-vertical" />} noCaret>
          <MenuItem href="/about">About</MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

function Footer() {
  return (
    <small>
      <hr />
      <p className="text-center">
        Full source code available at this{' '}
        <a href="https://github.com/aungmcs/issue-tracker">GitHub repository</a>
      </p>
    </small>
  );
}

export default function Page() {
  return (
    <div>
      <NavBar />
      <Grid fluid>
        <Contents />
      </Grid>
      <Footer />
    </div>
  );
}
