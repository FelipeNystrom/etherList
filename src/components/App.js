import React, { Component } from 'react';
import './App.css';
// import web3 from '../web3';
import Dashboard from './userView/dashboard';

class App extends Component {
  // state = {
  //   isLoggedIn: false,
  //   checkingForMetaMask: 'Loading...',
  //   user: '',
  //   metamaskError: ''
  // };
  // componentDidMount() {
  //   web3.currentProvider.publicConfigStore.on('update', this.checkIfMetaMask);
  // }

  // componentDidUpdate(prevState) {
  //   if (prevState.user !== this.state.user) {
  //     this.checkIfMetaMask();
  //   }
  // }

  // checkIfMetaMask = async () => {
  //   await web3.eth.getAccounts((err, accounts) => {
  //     if (err !== null) {
  //       console.error('An error occurred: ' + err);
  //     } else if (accounts.length === 0) {
  //       this.noMetaMask();
  //     } else {
  //       this.fetchUserAndLogin(accounts[0]);
  //     }
  //   });
  // };

  // noMetaMask = () => {
  //   this.setState(prevState => {
  //     return {
  //       prevState,
  //       metamaskError: 'Please log in on your metamask account',
  //       checkingForMetaMask: '',
  //       isLoggedIn: false,
  //       user: ''
  //     };
  //   });
  // };

  // fetchUserAndLogin = userInput => {
  //   this.setState(prevState => {
  //     if (prevState.user !== userInput || this.state.user === '') {
  //       return {
  //         user: userInput,
  //         checkingForMetaMask: '',
  //         isLoggedIn: true
  //       };
  //     }
  //   });
  // };
  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
