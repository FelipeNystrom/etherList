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
      return { lists: [...prevState, newList] };
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
              <li className="settingItem" onClick={this.handleClick}>
                Create New Agreement
              </li>
            </ul>
          </div>
          <div className="agreementsView">
            {listView ? (
              <Fragment>
                <Lists lists={lists} classname="show" />{' '}
                <CreateList classname="hide" />
              </Fragment>
            ) : (
              <Fragment>
                <CreateList saveList={this.saveList} classname="show" />{' '}
                <Lists classname="hide" />
              </Fragment>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default MyAgreements;
