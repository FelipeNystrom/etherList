import React, { Component, Fragment } from 'react';
import CreateList from './createList';
import Lists from './lists';
import './myAgreements.css';

class MyAgreements extends Component {
  state = {
    listView: true,
    lists: []
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ listView: !this.state.listView });
  };

  saveList = newList => {
    this.setState(prevState => {
      return {
        lists: [...prevState.lists, newList],
        listView: true
      };
    });
  };

  render() {
    const { listView, lists } = this.state;
    return (
      <Fragment>
        <h1 className="agreementsTitle">My Agreements</h1>
        <div className="agreementsBox">
          <div className="agreementsBoxSettings">
            <ul className="agreementsBoxSettingsMenu">
              <li className="settingItem">
                <button className="settingOption" onClick={this.handleClick}>
                  Create New Agreement
                </button>
              </li>
            </ul>
          </div>
          <div className="agreementsView">
            <Lists lists={lists} listView={listView} />
            <CreateList saveList={this.saveList} listView={listView} />
          </div>
        </div>
      </Fragment>
    );
  }
}
export default MyAgreements;
