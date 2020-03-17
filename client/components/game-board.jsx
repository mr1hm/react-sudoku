import React, { Component } from 'react';
import GameBoardCells from './gameBoardCells';
import InputSelection from './input-selection';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: [],
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
      },
      solution: [],
      entireRows: [],
      condensed: [],
    }
    this.handleCellSelect = this.handleCellSelect.bind(this);
    this.handleBlockSelect = this.handleBlockSelect.bind(this);
    this.changeSelectionValue = this.changeSelectionValue.bind(this);
    this.handleValueSelection = this.handleValueSelection.bind(this);
    this.clearValueSelected = this.clearValueSelected.bind(this);
    this.handleInputSelected = this.handleInputSelected.bind(this);
    // this.setBoard = this.setBoard.bind(this);
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.gameBoard !== this.props.gameBoard) {
  //     this.setState({ gameBoard: this.props.gameBoard })
  //   }
  // }

  componentDidMount() { // Create Random Solution
    let board = [], solution = [], possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 9; i++) {
      board.push(this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
    }
    let randomBoard = board.slice();
    let original = randomBoard.slice();
    for (let j = 0; j < original.length; j++) {
      solution.push(original[j].splice(0, 3))
      solution.push(original[j].splice(0, 3))
      solution.push(original[j].splice(0, 3))
    }
    console.log(possibleValues)
    this.setState({ solution })
    let finalSolution = solution.slice();
    console.log(finalSolution)
    console.log(solution)
    let wholeRow = [];
    for (let rowIndex = 0; rowIndex < finalSolution.length; rowIndex++) {
      let currentRowIndex = rowIndex;
      const entireRows = [].concat(finalSolution[rowIndex]).concat(finalSolution[rowIndex + 3]).concat(finalSolution[rowIndex + 6]);
      wholeRow.push(entireRows);
      if (rowIndex === 2) rowIndex += 6;
      if (rowIndex === 11) rowIndex += 6
      if (rowIndex === 20) {
        this.setState({ entireRows: wholeRow, gameBoard: wholeRow })
        break;
      }
    }
    let condensed = [];
    for (let z = 0; z < wholeRow.length; z + 3) {
      const reduce = [].concat(wholeRow[z]).concat(wholeRow[z + 1]).concat(wholeRow[z + 2])
      condensed.push(reduce);
      console.log(condensed); // INFINITE LOOP HERE. BE CAREFUL
      if (z === 6) break;
    }
    this.setState({ condensed })
    console.log(wholeRow);
    // console.log(rowIndex)
    // for (let rowValueIndex = 0; rowValueIndex < finalSolution[rowIndex].length; rowValueIndex++) {
    //   if (!finalSolution[rowIndex + 3] || !finalSolution[rowIndex + 3][rowValueIndex]) {
    //     // debugger;
    //     this.setState({ gameBoard: solution })
    //   }
    //   if (finalSolution[rowIndex + 1]) { // Check for same values in the same block row.
    //     if (finalSolution[rowIndex][rowValueIndex] === finalSolution[rowIndex + 1][rowValueIndex]) {
    //       let possible = possibleValues.filter(val => val !== finalSolution[rowIndex + 1][rowValueIndex]);
    //       finalSolution[rowIndex + 1][rowValueIndex] = possible[Math.floor(Math.random() * possible.length)];
    //     }
    //   }
    //   if (finalSolution[rowIndex + 2]) {
    //     if (finalSolution[rowIndex][rowValueIndex] === finalSolution[rowIndex + 2][rowValueIndex]) {
    //       let possible = possibleValues.filter(val => val !== finalSolution[rowIndex + 2][rowValueIndex]);
    //       finalSolution[rowIndex + 2][rowValueIndex] = possible[Math.floor(Math.random() * possible.length)];
    //     }
    //   }
    //   if (rowIndex === 0) { // Check for same values in across the entire row.
    //     if (finalSolution[rowIndex][rowValueIndex] === finalSolution[rowIndex + 2][rowValueIndex]) {
    //       let possible = possibleValues.filter(val => val !== finalSolution[rowIndex][rowValueIndex] && val !== finalSolution[rowIndex][rowValueIndex + 1] && val !== finalSolution[rowIndex][rowValueIndex + 2])
    //       console.log(possible);
    //       finalSolution[rowIndex + 2][rowValueIndex] = possible[Math.floor(Math.random() * possible.length)];
    //       console.log(finalSolution)
    //     }
    //   }
    //   if (finalSolution[rowIndex + 3]) {
    //     if (finalSolution[rowIndex][rowValueIndex] === finalSolution[rowIndex + 3][rowValueIndex]) {
    //       // debugger;
    //       let possible = possibleValues.filter(val => val !== finalSolution[rowIndex][rowValueIndex] && val !== finalSolution[rowIndex][rowValueIndex + 1] && val !== finalSolution[rowIndex][rowValueIndex + 2])
    //       console.log(possible);
    //       finalSolution[rowIndex + 2][rowValueIndex] = possible[Math.floor(Math.random() * possible.length)];
    //     }
    //   }
    // }
  }

  shuffle(arr) {
    let tmp, current, top = arr.length;
    if (top) while (--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = arr[current];
      arr[current] = arr[top]
      arr[top] = tmp;
    }
    return arr;
  }

  handleBlockSelect(e) {
    const blockSelection = e.currentTarget.getAttribute('data-block');
    this.setState({ blockSelection: +blockSelection })
  }

  handleCellSelect(cellIndex) {
    this.setState({ cellSelection: +cellIndex }, this.changeSelectionValue)
  }

  handleInputSelected(e) {
    const { inputSelected, valueSelected } = this.state;
    const value = e.currentTarget.getAttribute('data-cell');
    if (value !== valueSelected) {
      for (const key in inputSelected) {
        if (key !== value) {
          if (inputSelected[key] === true) this.setState(prevState => ({ inputSelected: { ...prevState.inputSelected, [key]: false } }))
        }
      }
    }
    this.setState(prevState => ({ inputSelected: { ...prevState.inputSelected, [value]: !inputSelected[value] } }), this.handleValueSelection(value))
  }

  changeSelectionValue() {
    const { blockSelection, cellSelection, valueSelected, inputSelected } = this.state;
    const gameBoard = this.state.gameBoard.slice();
    gameBoard[blockSelection][cellSelection] = valueSelected;
    this.setState(prevState => ({ gameBoard, valueSelected: '' }), () => {
      for (const key in inputSelected) {
        if (inputSelected[key]) this.setState(prevState => ({ inputSelected: { ...prevState.inputSelected, [key]: false } }))
      }
    })
  }

  handleValueSelection(value) {
    if (this.state.valueSelected === value) this.setState({ valueSelected: '' })
    else this.setState({ valueSelected: value })
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
                        <GameBoardCells key={`b${blockIndex}-c${cellIndex}`} handleCellSelect={this.handleCellSelect} cellIndex={cellIndex} num={num} />
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
                <InputSelection key={i + 1} inputSelected={inputSelected} handleInputSelected={this.handleInputSelected} clearValueSelected={this.clearValueSelected} handleValueSelection={this.handleValueSelection} value={val} />
              );
            })}
          </section>
        </main>
      </>
    );
  }
}
