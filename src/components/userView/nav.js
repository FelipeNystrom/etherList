import React, { Component } from 'react';
import './nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="usernameWrapper">
          <p className="msgToUser">Hello</p>
          <p className="username">Username!</p>
        </div>
        <ul className="menu">
          <li className="menuItem left">My Agreements</li>
          <li className="menuItem right">Live Contracts</li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
