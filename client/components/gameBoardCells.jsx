import React, { Component } from 'react';

export default class GameBoardCells extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cellSelected: false,
    }
  }

  render() {
    const { handleCellSelect, cellIndex, num, cellSelected } = this.props;
    return (
      <div onClick={() => handleCellSelect(cellIndex)} id={`cell-${cellIndex}`} className={`cell col-4 ${cellSelected ? 'selected' : ''}`}>{num}</div>
    );
  }
}
