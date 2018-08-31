import React, { Component } from 'react';
import './lists.css';

class Lists extends Component {
  state = {
    isHidden: false
  };
  componentDidMount() {
    if (this.props.classname === 'hide') {
      setTimeout(() => {
        this.setState({ isHidden: true });
      }, 500);
    }

    if (this.props.classname === 'show') {
      setTimeout(() => {
        this.setState({
          isHidden: false
        });
      }, 500);
    }
  }
  render() {
    const { isHidden } = this.state;
    const { lists } = this.props;
    const generateLists = lists.map(list => {
      return <li className="agreementsListItem">{list}</li>;
    });
    return (
      <div
        className={
          isHidden
            ? `listViewWrapper ${this.props.classname}`
            : `listViewWrapper ${this.props.classname}`
        }
      >
        <ul className="agreementsList">
          <li className="agreementsListItem">Agreements title</li>
          <li className="agreementsListItem">Another title</li>
          <li className="agreementsListItem">Agreements title</li>
          <li className="agreementsListItem">Another title</li>
          <li className="agreementsListItem">Agreements title</li>
          <li className="agreementsListItem">Another title</li>
        </ul>
      </div>
    );
  }
}
export default Lists;
