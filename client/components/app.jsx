import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './layout/header';
import Footer from './layout/footer';
import GameBoard from './game-board';
import InputSelection from './input-selection';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      login: false,
      gameBoard: [],
    };
  }

  // componentWillMount() {
  //   let board = [];
  //   for (let i = 0; i < 9; i++) {
  //     // if (i === 0)
  //     board.push(this.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]))
  //     // else board.push(['', '', '', '', '', '', '', '', ''])
  //   }
  //   this.setState({ gameBoard: board }, () => console.log(this.state.gameBoard))
  // }

  // shuffle(arr) {
  //   let tmp, current, top = arr.length;
  //   if (top) while (--top) {
  //     current = Math.floor(Math.random() * (top + 1));
  //     tmp = arr[current];
  //     arr[current] = arr[top]
  //     arr[top] = tmp;
  //   }
  //   return arr;
  // }

  render() {
    const { welcome, users, gameBoard } = this.state;
    return (
      <>
        <Header text="Sudoku" />
        <GameBoard gameBoard={gameBoard} />
        <Footer text="Footer" />
      </>
    );
  }
}
