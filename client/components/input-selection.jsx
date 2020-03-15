import React, { Component } from 'react';

export default class InputSelection extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    // this.handleClick = this.handleClick.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.inputSelected !== this.state.inputSelected) this.props.clearValueSelected();
  // }

  // handleClick(e) {
  //   this.setState({ inputSelected: !this.state.inputSelected })
  //   this.props.handleValueSelection(e, this.props.value);
  // }

  render() {
    const { value, index, handleValueSelection, clearValueSelected, handleInputSelected, inputSelected } = this.props;
    return (
      <div onClick={(e) => handleInputSelected(e)} data-cell={value} className={`${inputSelected[value] ? 'selected' : ''} value col-4 d-flex justify-content-center align-items-center`}>{value}</div>
    );
  }
}
