import React, { Component } from 'react';
import GameBoardCells from './gameBoardCells';
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
      inputSelected: {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
        7: false,
        8: false,
        9: false
      }
    }
    this.handleCellSelect = this.handleCellSelect.bind(this);
    this.handleBlockSelect = this.handleBlockSelect.bind(this);
    this.changeSelectionValue = this.changeSelectionValue.bind(this);
    this.handleValueSelection = this.handleValueSelection.bind(this);
    this.clearValueSelected = this.clearValueSelected.bind(this);
    this.handleInputSelected = this.handleInputSelected.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.valueSelected === this.state.valueSelected) this.setState({ valueSelected: '' })
  }

  handleBlockSelect(e) {
    const blockSelection = e.currentTarget.getAttribute('data-block');
    this.setState({ blockSelection: +blockSelection })
  }

  handleCellSelect(cellIndex) {
    this.setState({ cellSelection: cellIndex }, this.changeSelectionValue)
  }

  handleInputSelected(e) {
    const { inputSelected } = this.state;
    const value = e.currentTarget.getAttribute('data-cell');
    for (const key in inputSelected) {
      console.log(inputSelected);
      if (key !== value) {
        if (inputSelected[key] === true) this.setState(prevState => ({ inputSelected: { ...prevState.inputSelected, [key]: false } }))
      }
    }
    this.setState(prevState => ({ inputSelected: { ...prevState.inputSelected, [value]: !inputSelected[value] } }), this.handleValueSelection(value))
  }

  changeSelectionValue() {
    const { blockSelection, cellSelection, valueSelected } = this.state;
    if (blockSelection && cellSelection) {
      const gameBoard = this.state.gameBoard.slice();
      gameBoard[blockSelection][cellSelection] = valueSelected;
      this.setState({ gameBoard, valueCellSelected: !this.state.valueCellSelected, valueSelected: '' })
    }
  }

  handleValueSelection(value, deselect) {
    this.setState({ valueSelected: value })
  }

  clearValueSelected() {
    this.setState({ valueSelected: '' });
  }

  render() {
    const { gameBoard, inputValues, cellSelected, inputSelected } = this.state;
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
