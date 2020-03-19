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

  componentDidMount() {
    let board = this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(board);
    let solution = this.createSolution(board);
    console.log('componentDidMount', solution)
    if (this.state.difficulty = 'easy') this.removeRandomNums(solution, 18);
  }

  removeRandomNums(solution, amount) {
    const { difficulty } = this.state;
    let gameBoard = JSON.parse(JSON.stringify(solution))
    console.log(gameBoard)
    for (let i = 0; i <= amount; i++) {
      const randomOuterIndex = Math.floor(Math.random() * (9 - 0) + 0);
      const randomInnerIndex = Math.floor(Math.random() * (9 - 0) + 0);
      gameBoard[randomOuterIndex].splice(randomInnerIndex, 1, '');
    }
    console.log(gameBoard);
    this.setState({ gameBoard })
  }

  createSolution(board) {
    let gameBoard = [
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
      ['', '', '', '', '', '', '', '', ''],
    ];
    gameBoard.splice(Math.floor(Math.random() * (0 - 9) + 0), 1, board);
    console.log('gameboard after splice:', gameBoard);
    sudokuSolver(gameBoard);
    return gameBoard;

    function isValid(board, row, col, k) {
      // debugger;
      for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
          return false;
        }
      }
      return true;
    }

    function sudokuSolver(data) {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (data[i][j] == '') {
            for (let k = 1; k <= 9; k++) {
              if (isValid(data, i, j, k)) {
                data[i][j] = `${k}`;
                if (sudokuSolver(data)) {
                  return true;
                } else {
                  data[i][j] = '';
                }
              }
            }
            return false;
          }
        }
      }
      return true;
    }
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
    const rowSelection = e.currentTarget.getAttribute('data-block');
    this.setState({ rowSelection: +rowSelection })
  }

  handleCellSelect(cellIndex) {
    this.setState({ colSelection: +cellIndex }, this.changeSelectionValue)
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
