import React, { Component } from 'react';
import GameBoardCells from './gameBoardCells';
import InputSelection from './input-selection';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: [],
      colSelection: null,
      rowSelection: null,
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
      difficulty: 'easy',
      win: false,
    }
    this.handleCellSelect = this.handleCellSelect.bind(this);
    this.handleBlockSelect = this.handleBlockSelect.bind(this);
    this.changeSelectionValue = this.changeSelectionValue.bind(this);
    this.handleValueSelection = this.handleValueSelection.bind(this);
    this.clearValueSelected = this.clearValueSelected.bind(this);
    this.handleInputSelected = this.handleInputSelected.bind(this);
  }

  componentDidMount() { // Create Random Solution
    let board = [], solution = [], possibleValues = [1, 2, 3, 4, 5, 6, 7, 8, 9], randomBoard;
    for (let i = 0; i < 9; i++) {
      board.push(this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
    }
    solution = board.slice();
    this.setState({ solution })
    let finalSolution = solution.slice();
    console.log('rows', finalSolution)
    // Check Columns
    let temp = [];
    let col = [];
    let count = 0;
    while (count < 9) {
      temp = [];
      for (let colIndex = 0; colIndex < finalSolution.length; colIndex++) {
        temp.push(finalSolution[colIndex][count]);
      }
      col.push(temp);
      count++;
    }
    console.log('columns', col);
    let wholeRow = [];
    for (let rowIndex = 0; rowIndex < finalSolution.length; rowIndex++) {
      wholeRow.push(finalSolution[rowIndex]);
    }
    if (this.validateSolution(wholeRow)) {
      this.setState({ entireRows: wholeRow, gameBoard: wholeRow })
    }
    this.setState({ entireRows: wholeRow, gameBoard: wholeRow }) // GET RID OF THIS ONCE IT WORKS
  }

  validateSolution(solution) {
    function check(arr) {
      return arr.sort().filter((val, index) => val === index + 1).length === 9;
    }

    for (let i = 0; i < 9; i++) {
      var col = [];
      var row = [];
      var square = [];
      for (var j = 0; j < 9; j++) {
        col.push(solution[j][i]);
        row.push(solution[i][j]);
        square.push(solution[Math.floor(j / 3) + (i % 3) * 3][j % 3 + Math.floor(i / 3) * 3]);
      }
      if (!check(col) || !check(row) || !check(square)) {
        console.log('nope')
        return false;
      }
    }
    console.log('yay')
    return true;
  }

  // permute(values) {
  //   const result = [];
  //   const temp = [];
  //   this.findPermutations(temp, values, result);
  //   return result;
  // }

  // findPermutations(temp, values, result) {
  //   if (!values.length) {
  //     result.push(temp.concat());
  //     return;
  //   }

  //   for (let i = 0; i < values.length; i++) {
  //     const newVal = values[i];
  //     temp.push(newVal);
  //     values.splice(i, 1);
  //     this.findPermutations(temp, values, result);
  //     temp.pop();
  //     values.splice(i, 0, newVal);
  //   }
  // }

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
                <div onClick={this.handleBlockSelect} data-block={blockIndex} id={`block-${blockIndex}`} key={blockIndex} className="game-block col-12">
                  <div className="row board-row">
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
