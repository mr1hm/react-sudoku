import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './layout/header';
import GameBoard from './game-board';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      login: false
    };
  }

  render() {
    const { welcome, users } = this.state;
    return (
      <Header text="Sudoku" />
    );
  }
}
