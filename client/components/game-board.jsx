import React, { Component } from 'react';
import InputSelection from './input-selection';

const MakeBoard = () => {
  let block = [];
  for (let i = 0; i < 9; i++) {
    block.push(['', '', '', '', '', '', '', '', ''])
  }
  return block;
}

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: MakeBoard(),
      cellSelected: false,
      cellSelection: null,
      blockSelection: null,
      valueSelected: '',
      inputValues: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      inputClicked: false,
    }
    this.handleCellSelect = this.handleCellSelect.bind(this);
    this.handleBlockSelect = this.handleBlockSelect.bind(this);
    this.changeSelectionValue = this.changeSelectionValue.bind(this);
    this.handleValueSelection = this.handleValueSelection.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.valueSelected !== this.state.valueSelected) this.setState({ valueSelected: this.state.valueSelected })
  }

  handleBlockSelect(e) {
    const blockSelection = e.currentTarget.getAttribute('data-block');
    this.setState({ blockSelection })
  }

  handleCellSelect(e) {
    const cellSelection = e.currentTarget.getAttribute('data-cell');
    this.setState({ cellSelection }, this.changeSelectionValue)
  }

  changeSelectionValue() {
    const { blockSelection, cellSelection, valueSelected } = this.state;
    if (blockSelection && cellSelection) {
      const gameBoard = this.state.gameBoard.slice();
      gameBoard[blockSelection][cellSelection] = valueSelected;
      this.setState({ gameBoard, valueSelected: '' })
    }
  }

  handleValueSelection(e, value) {
    if (!value) this.setState({ cellSelected: !this.state.cellSelected })
    if (value !== this.state.valueSelected) this.setState({ valueSelected: value })
    else this.setState({ valueSelected: value, cellSelected: !this.state.cellSelected })
  }

  render() {
    const { selected, gameBoard, inputValues, cellSelected } = this.state;
    return (
      <>
        <main className="game-container container">
          <section className="game-board row">
            {gameBoard.map((val, blockIndex) => {
              return (
                <div onClick={this.handleBlockSelect} data-block={blockIndex} id={`block-${blockIndex}`} key={blockIndex} className="game-block col-4">
                  <div className="row">
                    {val.map((num, cellIndex) => {
                      return (
                        <div data-cell={cellIndex} key={cellIndex} onClick={this.handleCellSelect} id={`cell-${cellIndex}`} className={`cell col-4 ${cellSelected ? 'selected' : ''}`}>{num}</div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </section>
        </main>
        <main className="input-container container">
          <section className="input-values row">
            {inputValues.map((val, i) => {
              return (
                <InputSelection key={i + 1} handleValueSelection={this.handleValueSelection} value={val} selected={selected} />
              );
            })}
          </section>
        </main>
      </>
    );
  }
}
