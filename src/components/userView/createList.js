import React, { Component, Fragment } from 'react';
import './createList.css';

class CreateList extends Component {
  state = {
    liveInput: '',
    listItems: [],
    listTitle: 'List title',
    isHidden: true,
    isShowing: false
  };

  componentDidMount() {
    if (this.props.classname === 'hide') {
      setTimeout(() => {
        this.setState({ isHidden: true });
      }, 500);
    }
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState(prevState => ({
      listItems: [...prevState.listItems, prevState.liveInput],
      liveInput: ''
    }));
  };

  render() {
    const { liveInput, listItems, listTitle } = this.state;
    const generateListItems = listItems.map((item, i) => {
      return (
        <li className="listItem" key={i}>
          {item}
        </li>
      );
    });
    return (
      <Fragment>
        <div
          className={
            this.props.classname
              ? `formWrapper ${this.props.classname}`
              : `formWrapper ${this.props.classname}`
          }
        >
          <form className="createListForm" onSubmit={this.handleSubmit}>
            <label>Add to list:</label>
            <input
              onChange={this.handleChange}
              name="liveInput"
              value={liveInput}
            />
            <button className="addToListButton" type="submit">
              Add to list
            </button>
          </form>
          <h6>
            <label name="list title">
              <input
                className="listTitle"
                name="listTitle"
                onChange={this.handleChange}
                value={listTitle}
              />
            </label>
          </h6>
          <ul className="createList">{generateListItems}</ul>
          <div className="listControlButtonWrapper">
            <button className="listControlButton">&#x2714;</button>
            <button className="listControlButton">&#x2715;</button>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default CreateList;
