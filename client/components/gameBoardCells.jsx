import React, { Component } from 'react';

export default class GameBoardCells extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellSelected: false,
    }
    this.handleCellClick = this.handleCellClick.bind(this);
  }

  handleCellClick() {
    this.setState({ cellSelected: !this.state.cellSelected }, this.props.handleCellSelect(this.props.cellIndex))
  }

  render() {
    const { cellIndex, rowIndex, num, highlight, handleCellSelect, colSelection, rowSelection, rowAndColIsDifferent } = this.props, { cellSelected } = this.state;
    if ((cellIndex === colSelection) && (rowIndex === rowSelection)) {
      return (
        <div onClick={this.handleCellClick} id={`cell-${cellIndex}`} className={`cell col d-flex justify-content-center align-items-center main-selection`}>{num}</div>
      );
    }
    if (cellIndex === colSelection && rowIndex !== rowSelection) {
      return (
        <div onClick={this.handleCellClick} id={`cell-${cellIndex}`} className={`cell col d-flex justify-content-center align-items-center selected`}>{num}</div>
      );
    } else {
      if (num === '') {
        return (
          <div onClick={this.handleCellClick} id={`cell-${cellIndex}`} className={`cell col d-flex justify-content-center align-items-center ${cellSelected ? 'selected' : ''}`}>{num}</div>
        );
      } else {
        return (
          <div onClick={this.handleCellClick} id={`cell-${cellIndex}`} className={`cell col d-flex justify-content-center align-items-center ${cellSelected ? 'selected' : ''}`}>{num}</div>
        );
      }
    }
  }
}
