import React, { Component } from 'react';

export default class InputSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({ clicked: !this.state.clicked })
    this.props.handleValueSelection(e, this.props.value);
  }

  render() {
    const { clicked } = this.state, { value, index, handleValueSelection, selected } = this.props;
    return (
      <div onClick={this.handleClick} className={`${clicked ? 'selected' : ''} value col-4 d-flex justify-content-center align-items-center`}>{value}</div>
    );
  }
}
