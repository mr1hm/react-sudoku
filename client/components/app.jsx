import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from './header';

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
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <Header text="Sudoku" />
          </div>
        </div>
      </div>
    );
  }
}
