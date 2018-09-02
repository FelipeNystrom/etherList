import React, { Component } from 'react';
import './lists.css';

class Lists extends Component {
  state = {
    isHidden: false
  };
  componentDidMount() {
    if (this.props.listView) {
      this.setState({ isHidden: false });
    }

    if (!this.props.listView) {
      this.setState({
        isHidden: true
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
  render() {
    const { isHidden } = this.state;
    const { lists } = this.props;
    const generateLists = lists.map((list, i) => {
      return (
        <li key={i} className="agreementsListItem">
          {list.listTitle} ({list.listItems.length})
        </li>
      );
    });
    return (
      <div className={`listViewWrapper ${isHidden ? `hide` : `show`}`}>
        <ul className="agreementsList">{generateLists}</ul>
      </div>
    );
  }
}
export default Lists;
