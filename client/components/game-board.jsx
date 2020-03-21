import React, { Component } from 'react';
import GameBoardCells from './gameBoardCells';
import InputSelection from './input-selection';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameBoard: [],
      cellClicked: false,
      colSelection: null,
      rowSelection: null,
      rowAndColIsDifferent: false,
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
      eraser: false,
    }
    this.handleCellSelect = this.handleCellSelect.bind(this);
    this.handleBlockSelect = this.handleBlockSelect.bind(this);
    this.changeSelectionValue = this.changeSelectionValue.bind(this);
    this.handleValueSelection = this.handleValueSelection.bind(this);
    this.clearValueSelected = this.clearValueSelected.bind(this);
    this.handleInputSelected = this.handleInputSelected.bind(this);
    this.handleRowAndColIsDifferent = this.handleRowAndColIsDifferent.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.colSelection === null || prevState.rowSelection === null) return;
    if (prevState.colSelection !== this.state.colSelection || prevState.rowSelection !== this.state.rowSelection) {
      this.setState({ rowAndColIsDifferent: true })
      setTimeout(() => this.setState({ rowAndColIsDifferent: false }), 1000)
    }
  }

  componentDidMount() {
    let board = this.shuffle(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    console.log(board);
    let solution = this.createSolution(board);
    console.log('componentDidMount', solution)
    if (this.state.difficulty = 'easy') this.removeRandomNums(solution, 45);
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

  *combine(array, length) {
    if (length < 1) yield [];
    else for (let element of array) {
      for (let combination of this.combine(array, length - 1)) {
        yield combination.concat(element);
      }
    }
  }

  // randomPermute() {
  //   let a = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

  //   function* combine(array, length) {
  //     if (length < 1) yield [];
  //     else for (let element of array) {
  //       for (let combination of combine(array, length - 1)) {
  //         yield combination.concat(element);
  //       }
  //     }
  //   }
  //   console.log([...combine(a, 2)]);
  // }

  removeRandomNums(solution, amount) {
    const { difficulty } = this.state;
    let gameBoard = JSON.parse(JSON.stringify(solution)),
      possibleOuterIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8],
      possibleInnerIndices = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let randomPermute = [...this.combine([0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8], 2)];
    console.log(randomPermute);
    for (let j = 0; j < randomPermute.length; j++) {
      // if (randomPermute[j].every(val => val[0] === randomPermute[j + 1][0] || val[1] === randomPermute[j + 1][1])) {
      //   console.log('true');
      // }
      randomPermute.splice(j + 1, 1);
    }
    console.log(randomPermute)
    for (let z = 0; z < amount; z++) {
      const randomIndex = Math.floor(Math.random() * (9 - 0) + 0);
      const randomPermutatedIndexValue = Math.floor(Math.random() * randomPermute.length);
      gameBoard[randomPermute[randomPermutatedIndexValue][0]][randomPermute[randomPermutatedIndexValue][1]] = '';
      randomPermute.splice(randomPermutatedIndexValue, 1);
    }
    console.log(randomPermute);
    this.setState({ gameBoard })
  }

  validateValueInsert() {
    const { solution, gameBoard, rowSelection, colSelection } = this.state;
    if (solution[rowSelection][colSelection] === gameBoard[rowSelection][colSelection]) {
      console.log('correct');
      this.setState({ colSelection: null, rowSelection: null, valueSelected: '' })
    } else {
      console.log('incorrect');
    }
  }

  createSolution(shuffledRow) {
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
    gameBoard.splice(Math.floor(Math.random() * 9), 1, shuffledRow);
    sudokuSolver(gameBoard);
    this.setState({ solution: gameBoard })
    return gameBoard;

    function isValid(board, row, col, value) {
      for (let i = 0; i < 9; i++) {
        const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
        const n = 3 * Math.floor(col / 3) + i % 3;
        if (board[row][i] == value || board[i][col] == value || board[m][n] == value) {
          return false;
        }
      }
      return true;
    }

    function sudokuSolver(randomBoard) {
      for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
          if (randomBoard[row][col] == '') {
            for (let value = 1; value <= 9; value++) {
              if (isValid(randomBoard, row, col, value)) {
                randomBoard[row][col] = `${value}`;
                if (sudokuSolver(randomBoard)) {
                  return true;
                } else {
                  randomBoard[row][col] = '';
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

  isValidSolution() {
    const { gameBoard, solution } = this.state;
    let gameBoardCopy = gameBoard.slice(), correctCount = 0;
    for (let i = 0; i < gameBoardCopy.length; i++) {
      for (let z = 0; z < gameBoardCopy[i].length; z++) {
        if (gameBoardCopy[i][z] === solution[i][z]) correctCount++;
      }
    }
    if (correctCount === 81) return true;
    else return false;
  }

  handleBlockSelect(e) {
    const rowSelection = e.currentTarget.getAttribute('data-block');
    this.setState({ rowSelection: +rowSelection })
  }

  handleCellSelect(cellIndex) {
    this.setState({ cellClicked: !this.state.cellClicked, colSelection: +cellIndex }, this.changeSelectionValue)
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
    const { rowSelection, colSelection, valueSelected, inputSelected } = this.state;
    const gameBoard = this.state.gameBoard.slice();
    if (valueSelected === '') return;
    if (gameBoard[rowSelection][colSelection] === '') gameBoard[rowSelection][colSelection] = valueSelected;
    this.setState(prevState => ({ gameBoard, valueSelected: '' }), () => {
      if (!this.isValidSolution()) {
        this.validateValueInsert();
        for (const key in inputSelected) {
          if (inputSelected[key]) this.setState(prevState => ({ inputSelected: { ...prevState.inputSelected, [key]: false } }))
        }
      } else {
        console.log('you won');
      }
    })
  }

  handleValueSelection(value) {
    if (this.state.valueSelected === value) this.setState({ valueSelected: '' })
    else this.setState({ valueSelected: value })
  }

  handleRowAndColIsDifferent(boolean) {
    this.setState({ rowAndColIsDifferent: boolean })
  }

  clearValueSelected() {
    this.setState({ valueSelected: '' });
  }

  render() {
    const { gameBoard, inputValues, colSelection, rowSelection, inputSelected, cellClicked, highlight, rowAndColIsDifferent } = this.state;
    if (gameBoard.length === 0) return <div>LOADING...</div>
    return (
      <>
        <main className="game-container container-fluid">
          <section className="game-board row">
            {gameBoard.map((val, rowIndex) => {
              if (cellClicked) {
                if (rowIndex === rowSelection) {
                  console.log('rowIndex matched rowSelection');
                  return (
                    <div onClick={this.handleBlockSelect} data-block={rowIndex} id={`block-${rowIndex}`} key={rowIndex} className={`game-block selected col-12`}>
                      <div className={`row board-row`}>
                        {val.map((num, cellIndex) => {
                          return (
                            <GameBoardCells key={`b${rowIndex}-c${cellIndex}`} rowAndColIsDifferent={rowAndColIsDifferent} rowIndex={rowIndex} rowSelection={rowSelection} colSelection={colSelection} handleCellSelect={this.handleCellSelect} cellIndex={cellIndex} num={num} />
                          );
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div onClick={this.handleBlockSelect} data-block={rowIndex} id={`block-${rowIndex}`} key={rowIndex} className={`game-block col-12`}>
                      <div className={`row board-row`}>
                        {val.map((num, cellIndex) => {
                          return (
                            <GameBoardCells key={`b${rowIndex}-c${cellIndex}`} rowAndColIsDifferent={rowAndColIsDifferent} rowSelection={rowSelection} colSelection={colSelection} handleCellSelect={this.handleCellSelect} cellIndex={cellIndex} num={num} />
                          );
                        })}
                      </div>
                    </div>
                  );
                }
              } else {
                return (
                  <div onClick={this.handleBlockSelect} data-block={rowIndex} id={`block-${rowIndex}`} key={rowIndex} className="game-block col-12">
                    <div className={`row board-row`}>
                      {val.map((num, cellIndex) => {
                        return (
                          <GameBoardCells key={`b${rowIndex}-c${cellIndex}`} rowAndColIsDifferent={rowAndColIsDifferent} handleCellSelect={this.handleCellSelect} cellIndex={cellIndex} num={num} />
                        );
                      })}
                    </div>
                  </div>
                );
              }
            })}
          </section>
        </main>
        <main className="input-container container-fluid">
          <section className="input-values row">
            {inputValues.map((val, i) => {
              return (
                <InputSelection key={i + 1} inputSelected={inputSelected} rowAndColIsDifferent={rowAndColIsDifferent} handleInputSelected={this.handleInputSelected} clearValueSelected={this.clearValueSelected} handleValueSelection={this.handleValueSelection} value={val} />
              );
            })}
          </section>
        </main>
      </>
    );
  }
}
