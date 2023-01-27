import React from 'react';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import IssueAddNavItem from './IssueAddNavItem.jsx';
import Search from './Search.jsx';
import SignInNavItem from './SignInNavItem.jsx';

export default function NavBar({ user, onUserChange }) {
  return (
    <Navbar className="amNavbar">
      <Navbar.Header>
        <Navbar.Brand>
          <p style={{
            color: 'white',
            fontWeight: 'bold',
          }}
          >
            ⊚ Issue Tracker
          </p>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>
            Home
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/issues">
          <NavItem>
            Issue List
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/report">
          <NavItem>
            Report
          </NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        <IssueAddNavItem user={user} />
        <SignInNavItem user={user} onUserChange={onUserChange} />
        <NavDropdown
          id="user-dropdown"
          title={<Glyphicon glyph="option-vertical" />}
          noCaret
        >
          <MenuItem href="/about">About</MenuItem>
        </NavDropdown>
      </Nav>
      <div className="searchBarx container-fluid">
        <Navbar.Form>
          <Search />
        </Navbar.Form>
      </div>
    </Navbar>
  );
}
