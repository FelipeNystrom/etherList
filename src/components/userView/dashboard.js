import React, { Component, Fragment } from 'react';
import Nav from './nav';
import MyAgreements from './myAgreements';
import './dashboard.css';

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <main>
          <MyAgreements />
        </main>
      </Fragment>
    );
  }
}

export default Dashboard;
