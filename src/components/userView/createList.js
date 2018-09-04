import React, { Component, Fragment } from 'react';
import './createList.css';

class CreateList extends Component {
  state = {
    liveInput: '',
    listItems: [],
    listTitle: 'List title',
    isHidden: true
  };
  componentDidMount() {
    if (this.props.listView) {
      this.setState({ isHidden: true });
    }

    if (!this.props.listView) {
      this.setState({
        isHidden: false
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listView !== this.props.listView) {
      this.setState({
        isHidden: !this.state.isHidden
      });
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

  handleSave = newList => {
    const { saveList } = this.props;
    saveList(newList);
    this.setState({
      liveInput: '',
      listItems: [],
      listTitle: 'List title'
    });
  };

  render() {
    const { liveInput, listItems, listTitle, isHidden } = this.state;
    const newList = {
      listTitle: listTitle,
      listItems: listItems
    };
    const generateListItems = listItems.map((item, i) => {
      return (
        <li className="listItem" key={i}>
          {item}
          <span className="update">
            <i class="far fa-edit" />
          </span>
          <span className="delete">
            <i class="far fa-trash-alt" />
          </span>
        </li>
      );
    });
    return (
      <Fragment>
        <div className={`formWrapper ${isHidden ? `hide` : `show`}`}>
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
            <button
              name="save"
              onClick={() => {
                this.handleSave(newList);
              }}
              className="listControlButton"
            >
              &#x2714;
            </button>
            <button name="abort" className="listControlButton">
              &#x2715;
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
export default CreateList;
