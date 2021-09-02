import React from 'react';
import {
  Grid,
} from 'react-bootstrap';
import Contents from './Contents.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';

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
